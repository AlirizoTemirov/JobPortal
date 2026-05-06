"use client";

import { Input } from "@/components/ui/input";
import Header from "../_components/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import JobBox from "./JobBox";
import { Category, Job } from "@/types";
import { useFilterStore } from "@/store/useFilterStore";

interface JobsUIProps {
  jobs: Job[];
  categories: Category[];
}

export default function JobsUI({ jobs, categories }: JobsUIProps) {
  const { changeForm, filterForm, resetForm } = useFilterStore();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(filterForm.search.toLowerCase()) ||
      job.company.toLowerCase().includes(filterForm.search.toLowerCase()) ||
      job.description.toLowerCase().includes(filterForm.search.toLowerCase());

    const matchesCategory =
      filterForm.categoryFilter === "All Categories" ||
      job.category?.id === filterForm.categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto max-w-312.5 py-16">
        <h1 className="text-4xl font-bold">Find Your Next Opportunity</h1>
        <p className="text-gray-600 mt-3">
          Explore our curated list of job openings and find the perfect match
          for your career.
        </p>

        <div className="mt-10 flex gap-10">
          <div className="w-87.5 h-fit shadow p-5 rounded-2xl bg-white">
            <h1 className="text-xl font-bold">Filter Jobs</h1>

            <div className="mt-10">
              <p className="text-[14px] text-gray-600 mb-1">
                Search by keyword
              </p>
              <Input
                value={filterForm.search}
                onChange={(e) => changeForm("search", e.target.value)}
                placeholder="Job title, company or skills..."
              />
            </div>

            <div className="mt-10">
              <p className="text-[14px] text-gray-600 mb-1">Category</p>
              <Select
                value={filterForm.categoryFilter}
                onValueChange={(value) => changeForm("categoryFilter", value)}
                defaultValue="All Categories"
              >
                <SelectTrigger className="h-12 rounded-xl mt-2 w-full">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="All Categories">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full py-3 cursor-pointer my-10"
              variant={"outline"}
              onClick={() => resetForm()}
            >
              Reset Filters
            </Button>

            <p
              className={`text-[12px] ${
                filterForm.search.length === 0 ? "hidden" : ""
              } text-gray-500`}
            >
              Search: "{filterForm.search}"
            </p>

            <p className="text-[12px] text-gray-500 mt-1">
              Category:{" "}
              {categories.find((c) => c.id === filterForm.categoryFilter)
                ?.name || "All Categories"}
            </p>
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Available Jobs</h1>
              <p className="text-[14px] text-gray-500">
                {jobs.length} positions
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              {filteredJobs?.map((job) => (
                <JobBox key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
