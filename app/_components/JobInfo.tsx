"use client";

import { Job } from "@/types";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDetailPageStore } from "@/store/useDetailPageStore";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function JobInfo({ job }: { job: Job }) {
  const { modalOpen, setVisable, appliecFrom, changeForm, resetForm } =
    useDetailPageStore();
  const supabase = createClient();

  const router = useRouter();

  const handleSave = async () => {
    try {
      await supabase
        .from("Applications")
        .insert([{ ...appliecFrom, jobId: job.id }]);
      router.refresh();
      resetForm();
      setVisable(false);
    } catch (error) {
      console.log();
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-225 container mx-auto mt-10 pb-10">
        <Link href={"/jobs"}>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaArrowLeftLong /> Back to Jobs
          </Button>
        </Link>

        <div className="p-5 bg-white border rounded-xl mt-12">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <h1 className="text-3xl font-bold text-red-500">{job.salary}</h1>
          </div>

          <p className="text-xl font-bold text-blue-900 mt-2">{job.company}</p>

          <div className="flex gap-2 mt-4 mb-5">
            <div className="p-1 w-fit text-[11px] bg-blue-100 text-blue-900 rounded-md">
              {job.category.name}
            </div>
            <div className="p-1 w-fit text-[11px] bg-blue-100 text-blue-900 rounded-md">
              {job.jobType}
            </div>
          </div>
          <hr />
          <Button
            onClick={() => setVisable(true)}
            className="px-10 py-5 mt-5 cursor-pointer"
          >
            Apply Now
          </Button>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Job Description
              </h2>

              <p className="text-gray-600">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Requirements
              </h2>

              <ul className="space-y-6 text-gray-700 list-disc pl-6 marker:text-blue-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              Job Details
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-gray-500 mb-1">Location</p>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.location}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Job Type</p>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.jobType}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Category</p>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.category.name}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Salary</p>
                <h3 className="text-xl font-semibold text-orange-600">
                  {job.salary}
                </h3>
              </div>

              <hr className="border-gray-200" />

              <div>
                <p className="text-gray-500 mb-1">Company</p>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.company}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={() => setVisable(false)}>
        <form>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Apply for Position</DialogTitle>
              <DialogDescription>Apply to: {job.title}</DialogDescription>
            </DialogHeader>

            <div>
              <div>
                <p>Full Name</p>
                <Input
                  value={appliecFrom.fullName}
                  onChange={(e) => changeForm("fullName", e.target.value)}
                  className="mt-2"
                  placeholder="John Doe"
                />
              </div>
              <div className="mt-6">
                <p>Email Address</p>
                <Input
                  value={appliecFrom.email}
                  onChange={(e) => changeForm("email", e.target.value)}
                  className="mt-2"
                  placeholder="John@example.com"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                onClick={handleSave}
                className="w-full py-5 cursor-pointer"
                type="submit"
              >
                Submit Applications
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
