import { createClient } from "@/utils/supabase/client";
import JobbbTable from "./JobbbTable";
import { Job } from "@/types";

export default async function page() {
  const supabase = await createClient();

  const { data } = await supabase.from("Jobs").select("*");

  return (
    <div>
      <JobbbTable jobs={data || ([] as Job[])} />
    </div>
  );
}
