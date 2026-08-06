-- Fase 2: colaboradores del equipo, editables desde el panel de mantenimiento.
-- (Ya aplicada en el proyecto remoto vía MCP.)

create table if not exists public.team_members (
  id bigint generated always as identity primary key,
  nombre text not null,
  rol text not null default '',
  imagen_url text not null default '',
  orden int not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.team_members enable row level security;

create policy "equipo lectura publica"
  on public.team_members for select
  using (true);

create policy "equipo insercion autenticada"
  on public.team_members for insert
  to authenticated
  with check (true);

create policy "equipo actualizacion autenticada"
  on public.team_members for update
  to authenticated
  using (true)
  with check (true);

create policy "equipo borrado autenticado"
  on public.team_members for delete
  to authenticated
  using (true);

drop trigger if exists team_members_updated_at on public.team_members;
create trigger team_members_updated_at
  before update on public.team_members
  for each row execute function public.set_updated_at();

-- Fundadores actuales como contenido inicial (usan las fotos ya publicadas del sitio).
insert into public.team_members (nombre, rol, imagen_url, orden) values
  ('Gamaliel Noriega', 'Fundador y Director Creativo', '/assets/img/nova/team-gamaliel.jpg', 1),
  ('Stephanie Salas', 'Co-Fundadora y Directora de Operaciones', '/assets/img/nova/team-stephanie.jpg', 2);

-- Bucket público para las fotos del equipo.
insert into storage.buckets (id, name, public)
values ('equipo', 'equipo', true)
on conflict (id) do nothing;

create policy "fotos equipo lectura publica"
  on storage.objects for select
  using (bucket_id = 'equipo');

create policy "fotos equipo subida autenticada"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'equipo');

create policy "fotos equipo actualizacion autenticada"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'equipo')
  with check (bucket_id = 'equipo');

create policy "fotos equipo borrado autenticado"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'equipo');
