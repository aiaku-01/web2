import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("test")
    .select("*");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Supabase Connected 🚀
      </h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </main>
  );
}
