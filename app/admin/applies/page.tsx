import { createClient } from "@/utils/supabase/server";
import ApplicationsTable from "./ApplicationsTable";
import { Applications } from "@/types";

export default async function page() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("Applications")
    .select("*, job:Jobs(id,title)");

  return (
    <div>
      <ApplicationsTable Appliec={data || ([] as Applications[])} />
    </div>
  );
}
