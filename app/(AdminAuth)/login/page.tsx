"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAdminAuthStore } from "@/store/useAdminAuthStore";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function page() {
  const router = useRouter();
  const { adminAuthForm, changeForm, resetForm } = useAdminAuthStore();
  const supabase = createClient();
  const email = adminAuthForm.email;
  const password = adminAuthForm.password;

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Login or Password Error");
      resetForm();
      return;
    }
    toast.success("successfully");
    router.push("/admin/jobs");
    resetForm();
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 rounded-lg text-2xl bg-blue-950 flex justify-center items-center text-white font-bold">
              JP
            </div>
            <h1 className="font-bold text-3xl">JobPortal</h1>
          </div>
        </Link>
        <h1 className="text-4xl font-bold mt-7">Admin Dashboard</h1>
        <p className="text-lg text-gray-500 mt-2">
          Sign in to manage job postings
        </p>

        <div className="w-112.5 p-7 rounded-2xl bg-white border mt-6">
          <p className="font-bold">Email</p>
          <Input
            value={adminAuthForm.email}
            onChange={(e) => changeForm("email", e.target.value)}
            className="mt-1 py-4"
            placeholder="admin@jobportal.com"
          />

          <p className="font-bold mt-6">Password</p>
          <Input
            value={adminAuthForm.password}
            onChange={(e) => changeForm("password", e.target.value)}
            className="mt-1 py-4"
            placeholder="Enter your password"
          />

          <Button
            onClick={handleLogin}
            className="w-full py-5 text-lg cursor-pointer mt-5"
          >
            Sign In
          </Button>

          <div className="text-sm bg-gray-100 rounded-2xl p-5 mt-6">
            <p className="font-bold mb-2">Demo Credentials:</p>
            <p className="text-gray-500">Email: admin@gmail.com</p>
            <p className="text-gray-500">Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
