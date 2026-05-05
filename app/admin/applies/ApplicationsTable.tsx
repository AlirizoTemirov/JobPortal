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
import { Applications } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

interface AppliecProps {
  Appliec: Applications[];
}

export default function ApplicationsTable({ Appliec }: AppliecProps) {
  const supabase = createClient();
  const router = useRouter();

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
                <TableCell>{appliec.created_at}</TableCell>
                <TableCell>
                  <Button className="cursor-pointer mr-2" variant={"outline"}>
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
    </div>
  );
}
