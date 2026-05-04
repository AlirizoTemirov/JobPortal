"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useJobStore } from "@/store/useJobStore";
import { Category } from "@/types";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";

interface categoriesProps {
  category: Category[];
}

export default function CreateForm({ category }: categoriesProps) {
  const [loading, setLoading] = useState(false);
  const { jobForm, changeForm, resetForm } = useJobStore();
  const supabase = createClient();
  const router = useRouter();

  const handleSave = async () => {
    try {
      setLoading(true);
      const formattedRequirements = jobForm.requirements
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      await supabase
        .from("Jobs")
        .insert([{ ...jobForm, requirements: formattedRequirements }]);
      router.refresh();
      resetForm();
    } catch (error) {
      console.log();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link href={"/admin/jobs"}>
        <Button className="cursor-pointer" variant={"default"}>
          <FaArrowLeftLong /> Back to Jobs
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mt-4">Create New Job</h1>
      <p className="mt-2 text-gray-600">
        Fill in the form below to create a new job posting
      </p>

      <div className="w-187.5 mt-10 border bg-white p-8 rounded-2xl">
        <div className="mx-auto max-w-5xl">
          <Card className="rounded-2xl border bg-white shadow-sm">
            <CardContent className="p-8">
              <h1 className="mb-8 text-4xl font-bold tracking-tight">
                Add New Job
              </h1>

              <form className="space-y-6">
                {/* TOP GRID */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Job Title */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Job Title <span className="text-red-500">*</span>
                    </label>

                    <Input
                      value={jobForm.title}
                      onChange={(e) => changeForm("title", e.target.value)}
                      name="title"
                      placeholder="e.g., Senior Frontend Engineer"
                      className="h-12 rounded-xl mt-2"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Company <span className="text-red-500">*</span>
                    </label>

                    <Input
                      value={jobForm.company}
                      onChange={(e) => changeForm("company", e.target.value)}
                      name="company"
                      placeholder="e.g., TechCorp"
                      className="h-12 rounded-xl mt-2"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Location <span className="text-red-500">*</span>
                    </label>

                    <Input
                      value={jobForm.location}
                      onChange={(e) => changeForm("location", e.target.value)}
                      name="location"
                      placeholder="e.g., San Francisco, CA"
                      className="h-12 rounded-xl mt-2"
                    />
                  </div>

                  {/* Salary */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Salary (Optional)
                    </label>

                    <Input
                      value={jobForm.salary}
                      onChange={(e) => changeForm("salary", e.target.value)}
                      name="salary"
                      placeholder="e.g., $100,000 - $150,000"
                      className="h-12 rounded-xl mt-2"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Category</label>

                    <Select
                      value={jobForm.categoryId}
                      onValueChange={(value) => changeForm("categoryId", value)}
                    >
                      <SelectTrigger className="h-12 rounded-xl mt-2">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>

                      <SelectContent>
                        {category.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Job Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Job Type</label>

                    <Select
                      value={jobForm.jobType}
                      onValueChange={(value) => changeForm("jobType", value)}
                      defaultValue="Full-time"
                    >
                      <SelectTrigger className="h-12 rounded-xl mt-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>

                        <SelectItem value="Part-time">Part-time</SelectItem>

                        <SelectItem value="Remote">Remote</SelectItem>

                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold">
                    Description <span className="text-red-500">*</span>
                  </label>

                  <Textarea
                    value={jobForm.description}
                    onChange={(e) => changeForm("description", e.target.value)}
                    name="description"
                    placeholder="Job description and responsibilities..."
                    className="min-h-45 rounded-2xl resize-none mt-2"
                  />
                </div>

                {/* REQUIREMENTS */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold">
                    Requirements (comma-separated)
                  </label>

                  <Input
                    value={jobForm.requirements}
                    onChange={(e) => changeForm("requirements", e.target.value)}
                    name="requirements"
                    placeholder="e.g., React, TypeScript, 5+ years experience, Node.js"
                    className="h-12 rounded-xl mt-2"
                  />
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col gap-4 pt-2 md:flex-row">
                  <Button
                    onClick={handleSave}
                    type="submit"
                    disabled={loading}
                    className="h-12 flex items-center gap-2 cursor-pointer flex-1 rounded-xl bg-blue-900 text-base hover:bg-blue-800"
                  >
                    {loading && <IoReload className="animate-spin" />}

                    {loading ? "Adding Job..." : "Add Job"}
                  </Button>

                  <Button
                    type="reset"
                    variant="outline"
                    onClick={resetForm}
                    className="h-12 flex-1 cursor-pointer rounded-xl text-base"
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
