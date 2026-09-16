import { getSectionContent } from "@/lib/content";

export type SocialLinks = {
  instagram: string;
  facebook: string;
  youtube: string;
  /** Enlace wa.me listo para abrir el chat con el mensaje inicial. */
  whatsapp: string;
  /** Número tal como se muestra al visitante, p. ej. "+1 (862) 668-1095". */
  whatsappNumero: string;
};

// Convierte "+1 (862) 668-1095" en "18626681095" (formato que exige wa.me).
export function whatsappDigits(numero: string): string {
  return (numero || "").replace(/\D/g, "");
}

export function whatsappUrl(numero: string, mensaje: string): string {
  const digits = whatsappDigits(numero);
  if (!digits) return "";
  const texto = (mensaje || "").trim();
  return `https://wa.me/${digits}${texto ? `?text=${encodeURIComponent(texto)}` : ""}`;
}

// Lee los enlaces de la sección "redes" (editable desde el panel) y devuelve
// las direcciones listas para usar en los componentes.
export async function getSocialLinks(): Promise<SocialLinks> {
  const r = await getSectionContent("redes");
  return {
    instagram: (r.instagram_url || "").trim(),
    facebook: (r.facebook_url || "").trim(),
    youtube: (r.youtube_url || "").trim(),
    whatsapp: whatsappUrl(r.whatsapp_numero, r.whatsapp_mensaje),
    whatsappNumero: (r.whatsapp_numero || "").trim(),
  };
}
