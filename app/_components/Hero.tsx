"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFilterStore } from "@/store/useFilterStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { changeForm, filterForm, resetForm } = useFilterStore();
  const router = useRouter();

  const heandlSubmit = () => {
    router.push("/jobs");
    filterForm.search = filterForm.search2;
    filterForm.search2 = "";
  };

  return (
    <div className="w-fit container mx-auto text-center pt-15">
      <p className="text-red-700 font-bold">Career Opportunities</p>
      <h1 className="font-bold text-6xl mt-7">
        Find Your Perfect <span className="text-blue-900">Career</span>
      </h1>
      <p className="text-xl text-gray-500 max-w-175 mt-8">
        Discover career opportunities from top companies. Search, filter, and
        apply to roles that match your skills and aspirations.
      </p>

      <div className="flex items-center gap-2 mt-14">
        <Input
          value={filterForm.search2}
          onChange={(e) => changeForm("search2", e.target.value)}
          className="py-6"
          placeholder="Search by job title, company or keyword..."
        />
        <Button onClick={heandlSubmit} className="py-5 px-9 cursor-pointer">
          Search
        </Button>
      </div>

      <div className="flex justify-center gap-3 mt-15">
        <Link href={"/jobs"}>
          <Button className="py-5 px-9 cursor-pointer">Browse All Jobs</Button>
        </Link>
        <Link href={"/admin/jobs"}>
          <Button variant={"outline"} className="py-5 px-9 cursor-pointer">
            Post a Job
          </Button>
        </Link>
      </div>

      <div className="flex gap-20 justify-center mt-12">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">500+</h1>
          <p className="text-sm text-gray-500 mt-1">Active Jobs</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-900">200+</h1>
          <p className="text-sm text-gray-500 mt-1">Companies</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-900">50K+</h1>
          <p className="text-sm text-gray-500 mt-1">Placements</p>
        </div>
      </div>
    </div>
  );
}
