import { createClient } from "@supabase/supabase-js";

export type PortfolioProject = {
  titulo: string;
  descripcion: string;
  imagen_url: string;
  youtube_url: string;
};

// Proyectos de ejemplo: se muestran si Supabase no está configurado, la
// consulta falla o todavía no se ha creado ningún proyecto desde el panel.
const proyectosFallback: PortfolioProject[] = [
  {
    titulo: "Nombre del proyecto",
    descripcion:
      "Describe aquí el proyecto: el cliente, el reto que tenía su marca y lo que Nova produjo para resolverlo. Este texto se edita desde el panel de mantenimiento.",
    imagen_url: "/assets/img/nova/post-01.jpg",
    youtube_url: "",
  },
  {
    titulo: "Campaña de contenido",
    descripcion:
      "Un ejemplo de proyecto audiovisual. Si agregas un enlace de YouTube desde el panel, el video se muestra aquí en lugar de la imagen.",
    imagen_url: "/assets/img/nova/post-02.jpg",
    youtube_url: "",
  },
  {
    titulo: "Identidad de marca",
    descripcion:
      "Cada proyecto puede llevar su propia imagen, una descripción y, si quieres, un video de YouTube. Agrega, edita o elimina proyectos desde la pestaña Portafolio del panel.",
    imagen_url: "/assets/img/nova/post-03.jpg",
    youtube_url: "",
  },
];

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return proyectosFallback;

  try {
    const supabase = createClient(url, anonKey, {
      auth: { persistSession: false },
    });
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("titulo, descripcion, imagen_url, youtube_url")
      .order("orden", { ascending: true });

    if (error || !data || data.length === 0) return proyectosFallback;
    return data;
  } catch {
    return proyectosFallback;
  }
}

// Extrae el ID de un enlace de YouTube en cualquiera de sus formatos
// habituales (watch?v=, youtu.be/, shorts/, embed/, live/). Devuelve ""
// si el texto no parece un enlace de YouTube.
export function youtubeId(url: string): string {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : "";
}
