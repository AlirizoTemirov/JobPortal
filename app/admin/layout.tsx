import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AdminLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="border h-screen p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-950 flex justify-center items-center text-white font-bold">
            JP
          </div>
          <h1 className="font-bold">JobPortal</h1>
        </div>

        <div className="mt-10 flex flex-col">
          <Link href={"/admin/jobs"}>
            <Button
              className="w-60 py-6 text-xl mb-2 cursor-pointer"
              variant={"outline"}
            >
              Jobs
            </Button>
          </Link>
          <Link href={"/admin/create"}>
            <Button
              className="w-60 py-6 text-xl mb-2 cursor-pointer"
              variant={"outline"}
            >
              Creat Job
            </Button>
          </Link>
          <Link href={"/admin/applies"}>
            <Button
              className="w-60 py-6 text-xl cursor-pointer"
              variant={"outline"}
            >
              Applications
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 w-full p-10">{children}</div>
    </div>
  );
}
