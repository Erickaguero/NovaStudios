-- Fase 3: imágenes editables del sitio (URLs en site_content + bucket de subida).
-- (Ya aplicada en el proyecto remoto vía MCP.)

insert into public.site_content (section, key, value) values
  ('hero', 'imagen', '/assets/img/nova/cta-side.jpg'),
  ('quienes_somos', 'imagen', '/assets/img/nova/edificio-01.jpg')
on conflict (section, key) do nothing;

-- Bucket público para las imágenes generales del sitio.
insert into storage.buckets (id, name, public)
values ('sitio', 'sitio', true)
on conflict (id) do nothing;

create policy "imagenes sitio lectura publica"
  on storage.objects for select
  using (bucket_id = 'sitio');

create policy "imagenes sitio subida autenticada"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'sitio');

create policy "imagenes sitio actualizacion autenticada"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'sitio')
  with check (bucket_id = 'sitio');

create policy "imagenes sitio borrado autenticado"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'sitio');
