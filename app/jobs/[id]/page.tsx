import JobInfo from "@/app/_components/JobInfo";
import { createClient } from "@/utils/supabase/server";

export default async function page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("Jobs")
    .select("*, category:Categories(id,name)")
    .eq("id", id)
    .single();

  if (!data) {
    return <p className="p-10">Job topilmadi ❌</p>;
  }

  return (
    <div>
      <JobInfo job={data} />
    </div>
  );
}
