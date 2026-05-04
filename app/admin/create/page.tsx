import { createClient } from "@/utils/supabase/server";
import CreateForm from "./CreateForm";
import { Category } from "@/types";

export default async function page() {
  const supabase = await createClient();

  const { data } = await supabase.from("Categories").select("*");

  return (
    <div>
      <CreateForm category={data || ([] as Category[])} />
    </div>
  );
}
