"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDetailPageStore } from "@/store/useDetailPageStore";
import { Applications } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AppliecProps {
  Appliec: Applications[];
}

export default function ApplicationsTable({ Appliec }: AppliecProps) {
  const { modalOpen, setVisable } = useDetailPageStore();
  const supabase = createClient();
  const router = useRouter();

  const [selectedApplication, setSelectedApplication] =
    useState<Applications | null>(null);

  const handleView = (application: Applications) => {
    setSelectedApplication(application);
    setVisable(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await supabase.from("Applications").delete().eq("id", id);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Job Applicationst</h1>
      <p className="text-gray-500 mt-2">
        Review and manage all job applications ({Appliec.length} total)
      </p>

      <div className="border rounded-2xl bg-white overflow-hidden mt-10">
        <Table className="text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Job</TableHead>
              <TableHead className="text-center">Applied Data</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Appliec.map((appliec) => (
              <TableRow key={appliec.id}>
                <TableCell>{appliec.fullName}</TableCell>
                <TableCell>{appliec.email}</TableCell>
                <TableCell>{appliec.job.title}</TableCell>
                <TableCell>
                  {new Date(appliec.created_at).toDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleView(appliec)}
                    className="cursor-pointer mr-2"
                    variant={"outline"}
                  >
                    View
                  </Button>
                  <Button
                    onClick={() => handleDelete(appliec.id)}
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

      <Dialog open={modalOpen} onOpenChange={() => setVisable(false)}>
        <form>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Application Deteils</DialogTitle>
              <DialogDescription>
                View the full application details
              </DialogDescription>
            </DialogHeader>

            <div>
              <p className="text-gray-500">NAME</p>
              <p className="mt-1">{selectedApplication?.fullName}</p>

              <p className="text-gray-500 mt-5">EMAIL</p>
              <p className="mt-1">{selectedApplication?.email}</p>

              <p className="text-gray-500 mt-5">JOB POSITION</p>
              <p className="mt-1">{selectedApplication?.job.title}</p>

              <p className="text-gray-500 mt-5">APPLIED DATE</p>
              {selectedApplication && (
                <p className="mt-1">{selectedApplication.created_at}</p>
              )}
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
