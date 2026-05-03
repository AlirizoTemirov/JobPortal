import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-36 py-5">
      <div className="container mx-auto border flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-950 flex justify-center items-center text-white font-bold">
            JP
          </div>
          <h1 className="font-bold">JobPortal</h1>
        </div>

        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <p className="cursor-pointer hover:text-blue-900">Home</p>
          </Link>
          <Link href={"/jobs"}>
            <p className="cursor-pointer hover:text-blue-900">Jobs</p>
          </Link>

          <Link href={"/admin"}>
            <Button>Post a Job</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
