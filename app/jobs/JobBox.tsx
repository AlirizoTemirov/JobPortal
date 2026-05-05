import { Button } from "@/components/ui/button";
import { Job } from "@/types";

interface JobBoxProps {
  job: Job;
}

export default function JobBox({ job }: JobBoxProps) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-all">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">{job.title}</h1>
          <p className="text-[15px] text-gray-500 mt-1">{job.company}</p>
        </div>

        <div className="w-10 h-10 rounded-md bg-black font-bold text-white flex justify-center items-center">
          T
        </div>
      </div>

      <p className="text-[15px] text-gray-500 mt-5">{job.description}</p>

      <div className="flex gap-2 mt-5">
        <div className="px-2 py-1 text-[11px] rounded-md bg-blue-200 text-blue-600 w-fit">
          {job.category.name}
        </div>
        <div className="px-2 py-1 text-[11px] rounded-md bg-green-200 text-green-600 w-fit">
          {job.jobType}
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <p className="text-[16px] text-gray-500">📍 {job.location}</p>

        <p className="text-[16px] text-gray-500">💰 {job.salary}</p>
      </div>

      <div className="mt-5">
        <p className="text-[12px] text-gray-500">Requirements:</p>
        <div className="mt-2 flex gap-2">
          {job.requirements.map((req, index) => (
            <div
              key={index}
              className="px-2 py-1 text-[11px] rounded-md border w-fit"
            >
              {req}
            </div>
          ))}
        </div>
      </div>

      <Button variant={"default"} className="w-full py-5 cursor-pointer mt-8">
        View Deteils
      </Button>
    </div>
  );
}
