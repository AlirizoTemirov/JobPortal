import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainSections() {
  return (
    <div className="container flex flex-col items-center mx-auto text-center pt-80">
      <h1 className="font-bold text-6xl">Why Choose JobPortal?</h1>
      <p className="text-gray-500 max-w-165 mt-8">
        We've designed the most intuitive job search platform to help you find
        opportunities that align with your career goals.
      </p>

      <div className="mt-20 mb-40">
        <div className="flex gap-10">
          <div className="p-7 border rounded-2xl bg-white w-125 text-start hover:border-blue-900 hover:bg-gray-50 transition-all duration-500">
            <h1 className="text-5xl">🔍</h1>
            <h1 className="text-2xl font-bold mt-5">Powerful Search</h1>
            <p className="text-gray-500 mt-4">
              Advanced filtering by job title, category, and more. Find exactly
              what you&apos;re looking for in seconds.
            </p>
          </div>
          <div className="p-7 border rounded-2xl bg-white w-125 text-start hover:border-blue-900 hover:bg-gray-50 transition-all duration-500">
            <h1 className="text-5xl">⭐</h1>
            <h1 className="text-2xl font-bold mt-5">Curated Opportunities</h1>
            <p className="text-gray-500 mt-4">
              Carefully selected job postings from verified companies across
              industries and experience levels.
            </p>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="p-7 border rounded-2xl bg-white w-125 text-start hover:border-blue-900 hover:bg-gray-50 transition-all duration-500">
            <h1 className="text-5xl">✨</h1>
            <h1 className="text-2xl font-bold mt-5">User-Friendly Interface</h1>
            <p className="text-gray-500 mt-4">
              Intuitive design makes job hunting simple and enjoyable. Browse,
              filter, and explore with ease.
            </p>
          </div>
          <div className="p-7 border rounded-2xl bg-white w-125 text-start hover:border-blue-900 hover:bg-gray-50 transition-all duration-500">
            <h1 className="text-5xl">⚡</h1>
            <h1 className="text-2xl font-bold mt-5">Real-Time Updates</h1>
            <p className="text-gray-500 mt-4">
              Instant notifications for new job postings. Never miss an
              opportunity that matches your profile.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 w-full py-28">
        <h1 className="font-bold text-5xl text-white">
          Trusted by Job Seekers Worldwide
        </h1>
        <p className="text-gray-200 text-xl font-bold max-w-180 mt-5 mx-auto">
          Our platform has helped thousands of professionals find their ideal
          career opportunities.
        </p>

        <div className="flex gap-40 justify-center mt-20 text-start">
          <div>
            <h1 className="text-5xl font-bold text-white">500+</h1>
            <p className="text-xl text-gray-200 mt-1">Active Jobs</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white">200+</h1>
            <p className="text-xl text-gray-200 mt-1">Companies</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white">50K+</h1>
            <p className="text-xl text-gray-200 mt-1">Placements</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white">98%</h1>
            <p className="text-xl text-gray-200 mt-1">User Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r w-full from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ready to Advance <br /> Your Career?
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover hundreds of job opportunities from leading companies. Start
            your journey to your next role today.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href={"/jobs"}>
              <Button
                variant={"outline"}
                className="py-6 px-7 cursor-pointer text-black"
              >
                Explore Jobs
              </Button>
            </Link>

            <Link href={"/admin/jobs"}>
              <Button className="py-6 px-7 cursor-pointer">Post a Job</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
