import { createClient } from "@supabase/supabase-js";
import { contentFallbacks } from "@/data/content-fallbacks";

// Lee los textos de una sección desde Supabase y los mezcla con los valores
// por defecto. Si Supabase no está configurado o la consulta falla, el sitio
// se renderiza con los textos de content-fallbacks.ts.
export async function getSectionContent(
  section: string
): Promise<Record<string, string>> {
  const fallback = contentFallbacks[section] ?? {};

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return fallback;

  try {
    const supabase = createClient(url, anonKey, {
      auth: { persistSession: false },
    });
    const { data, error } = await supabase
      .from("site_content")
      .select("key, value")
      .eq("section", section);

    if (error || !data) return fallback;

    const fromDb: Record<string, string> = {};
    for (const row of data) {
      if (row.value != null && row.value !== "") fromDb[row.key] = row.value;
    }
    return { ...fallback, ...fromDb };
  } catch {
    return fallback;
  }
}
