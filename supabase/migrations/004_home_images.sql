-- Fase 4: todas las imágenes restantes de la página de inicio + textos de los
-- posts de "Proyectos Destacados". (Ya aplicada en el proyecto remoto vía MCP.)

insert into public.site_content (section, key, value) values
  ('hero', 'imagen_tarjeta_1', '/assets/img/nova/av-clapper.svg'),
  ('hero', 'imagen_tarjeta_2', '/assets/img/nova/av-waveform.svg'),
  ('proyectos', 'post_1_imagen', '/assets/img/nova/post-01.jpg'),
  ('proyectos', 'post_1_titulo', 'Estrategia'),
  ('proyectos', 'post_1_subtitulo', 'Dirección y Posicionamiento'),
  ('proyectos', 'post_2_imagen', '/assets/img/nova/post-11.jpg'),
  ('proyectos', 'post_2_titulo', 'Contenido'),
  ('proyectos', 'post_2_subtitulo', 'Sistemas, No Ruido'),
  ('proyectos', 'post_3_imagen', '/assets/img/nova/post-07.jpg'),
  ('proyectos', 'post_3_titulo', 'Identidad'),
  ('proyectos', 'post_3_subtitulo', 'Innovación y Estrategia'),
  ('proyectos', 'post_4_imagen', '/assets/img/nova/post-17.jpg'),
  ('proyectos', 'post_4_titulo', 'Crecimiento'),
  ('proyectos', 'post_4_subtitulo', 'Publicar Mejor, No Más'),
  ('proyectos', 'post_5_imagen', '/assets/img/nova/post-04.jpg'),
  ('proyectos', 'post_5_titulo', 'Creatividad'),
  ('proyectos', 'post_5_subtitulo', 'Ideas Que Conectan'),
  ('proyectos', 'post_6_imagen', '/assets/img/nova/post-09.jpg'),
  ('proyectos', 'post_6_titulo', 'Comunidad'),
  ('proyectos', 'post_6_subtitulo', 'Conexión Real'),
  ('proyectos', 'post_7_imagen', '/assets/img/nova/post-13.jpg'),
  ('proyectos', 'post_7_titulo', 'Diseño'),
  ('proyectos', 'post_7_subtitulo', 'Voz Visual'),
  ('proyectos', 'post_8_imagen', '/assets/img/nova/post-15.jpg'),
  ('proyectos', 'post_8_titulo', 'Estudio'),
  ('proyectos', 'post_8_subtitulo', 'Detrás de Cámaras'),
  ('resultados', 'imagen', '/assets/img/nova/edificio-02.jpg'),
  ('testimonios', 'imagen', '/assets/img/nova/av-lens.svg'),
  ('faq', 'imagen', '/assets/img/nova/av-strategy.svg')
on conflict (section, key) do nothing;
