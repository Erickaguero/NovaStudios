-- Fase 5: enlaces a redes sociales y WhatsApp editables desde el panel.
-- Ejecutar en Supabase: Dashboard → SQL Editor → pegar y correr.
--
-- No crea tablas nuevas: solo guarda los valores iniciales en site_content
-- (sección "redes"). Si no se ejecuta, el sitio muestra estos mismos valores
-- desde src/data/content-fallbacks.ts, y el panel los guarda al editarlos.

insert into public.site_content (section, key, value) values
  ('redes', 'instagram_url', 'https://www.instagram.com/novastudios_agency'),
  ('redes', 'facebook_url', 'https://www.facebook.com/share/1BX1sZT4wr/?mibextid=wwXIfr'),
  ('redes', 'youtube_url', 'https://youtube.com/@novastudioscr?si=bQ41JkYZ_3djZhVz'),
  ('redes', 'whatsapp_numero', '+1 (862) 668-1095'),
  ('redes', 'whatsapp_mensaje', 'Hola Nova Studios, me interesa conocer más sobre sus servicios.')
on conflict (section, key) do nothing;
