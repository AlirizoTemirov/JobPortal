import { createClient } from "@/utils/supabase/server";
import JobsUI from "./JobsUI";
import { Category, Job } from "@/types";

export default async function page() {
  const supabase = await createClient();

  const { data: JobsData } = await supabase
    .from("Jobs")
    .select("*,category:Categories(id,name)");
  const { data: CategoriesData } = await supabase
    .from("Categories")
    .select("*");

  return (
    <div>
      <JobsUI
        jobs={JobsData as Job[]}
        categories={CategoriesData as Category[]}
      />
    </div>
  );
}
