"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Job } from "@/types";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface JobProps {
  jobs: Job[];
}

export default function page({ jobs }: JobProps) {
  const supabase = createClient();
  const router = useRouter();

  const handleDelete = async (jobId: string) => {
    try {
      await supabase.from("Jobs").delete().eq("id", jobId);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Jobs Management</h1>
      <p className="text-gray-500 mt-2">Manage all your job postings</p>
      <Link href={"/admin/create"}>
        <Button className="mt-5 px-3 py-5 cursor-pointer">
          Create New Job
        </Button>
      </Link>

      <div className="bg-white rounded-2xl border p-6 mt-10">
        <h1 className="text-xl font-bold">All Jobs ({jobs.length})</h1>

        <div className="border rounded-2xl overflow-hidden mt-5">
          <Table className="text-center">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Title</TableHead>
                <TableHead className="text-center">Company</TableHead>
                <TableHead className="text-center">Category</TableHead>
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>
                    <h1 className="text-[16px]">{job.title}</h1>
                    <p className="text-[12px]">{job.location}</p>
                  </TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>
                    <div className="p-1 border rounded-md text-[12px] w-fit mx-auto">
                      {job.category.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="p-1 border rounded-md text-[12px] w-fit mx-auto">
                      {job.jobType}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelete(job.id)}
                      className="cursor-pointer"
                      variant={"destructive"}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
