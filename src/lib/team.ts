import { createClient } from "@supabase/supabase-js";

export type TeamMember = {
  nombre: string;
  rol: string;
  imagen_url: string;
};

// Fundadores: se muestran si Supabase no está configurado o la consulta falla.
const equipoFallback: TeamMember[] = [
  {
    nombre: "Gamaliel Noriega",
    rol: "Fundador y Director Creativo",
    imagen_url: "/assets/img/nova/team-gamaliel.jpg",
  },
  {
    nombre: "Stephanie Salas",
    rol: "Co-Fundadora y Directora de Operaciones",
    imagen_url: "/assets/img/nova/team-stephanie.jpg",
  },
];

export async function getTeamMembers(): Promise<TeamMember[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return equipoFallback;

  try {
    const supabase = createClient(url, anonKey, {
      auth: { persistSession: false },
    });
    const { data, error } = await supabase
      .from("team_members")
      .select("nombre, rol, imagen_url")
      .order("orden", { ascending: true });

    if (error || !data || data.length === 0) return equipoFallback;
    return data;
  } catch {
    return equipoFallback;
  }
}
