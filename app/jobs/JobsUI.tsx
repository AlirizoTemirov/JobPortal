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
import { Job } from "@/types";

interface JobsUIProps {
  jobs: Job[];
}

export default function JobsUI({ jobs }: JobsUIProps) {
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
              <Input placeholder="Job title, company or skills..." />
            </div>

            <div className="mt-10">
              <p className="text-[14px] text-gray-600 mb-1">Category</p>
              <Select>
                <SelectTrigger className="h-12 rounded-xl mt-2 w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full py-3 cursor-pointer mt-10"
              variant={"outline"}
            >
              Reset Filters
            </Button>

            <p className="text-[12px] text-gray-500 mt-10">
              Category: All Categories
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
              {jobs?.map((job) => (
                <JobBox key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
