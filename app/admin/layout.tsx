import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import LogoutButton from "@/app/_components/LogoutButton";
import { redirect } from "next/navigation";

export default async function AdminLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex">
      <div className="fixed left-0 border h-screen p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-950 flex justify-center items-center text-white font-bold">
            JP
          </div>
          <h1 className="font-bold">JobPortal</h1>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <Link href={"/admin/jobs"}>
            <Button
              className="w-60 py-6 text-xl cursor-pointer"
              variant={"outline"}
            >
              Jobs
            </Button>
          </Link>
          <Link href={"/admin/create"}>
            <Button
              className="w-60 py-6 text-xl cursor-pointer"
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
          <Link className="mt-10 w-fit mx-auto" href={"/"}>
            <button className="flex items-center justify-center gap-2 cursor-pointer">
              <FaArrowLeftLong />
              Go To Home Page
            </button>
          </Link>

          <LogoutButton />
        </div>
      </div>
      <div className="ml-72 min-h-screen w-full bg-gray-100 p-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
