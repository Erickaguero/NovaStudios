-- Fase 1: tabla de contenido editable del sitio.
-- Ejecutar en Supabase: Dashboard → SQL Editor → pegar y correr.

create table if not exists public.site_content (
  id bigint generated always as identity primary key,
  section text not null,
  key text not null,
  value text not null default '',
  updated_at timestamptz not null default now(),
  unique (section, key)
);

-- Seguridad: cualquiera puede LEER (el sitio público lo necesita),
-- pero solo un usuario autenticado (el cliente / tú) puede escribir.
alter table public.site_content enable row level security;

create policy "lectura publica"
  on public.site_content for select
  using (true);

create policy "escritura autenticada"
  on public.site_content for insert
  to authenticated
  with check (true);

create policy "actualizacion autenticada"
  on public.site_content for update
  to authenticated
  using (true)
  with check (true);

-- Mantener updated_at al día automáticamente.
create or replace function public.set_updated_at()
returns trigger language plpgsql
security invoker set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Nadie necesita llamar esta función vía API; solo la usa el trigger.
revoke execute on function public.set_updated_at() from anon, authenticated, public;

drop trigger if exists site_content_updated_at on public.site_content;
create trigger site_content_updated_at
  before update on public.site_content
  for each row execute function public.set_updated_at();

-- Contenido inicial (los textos actuales del sitio).
insert into public.site_content (section, key, value) values
  ('hero', 'badge', 'Agencia de Crecimiento Creativo'),
  ('hero', 'titulo_1', 'Tu marca tiene'),
  ('hero', 'titulo_destacado', 'potencial'),
  ('hero', 'titulo_2', 'Nosotros lo convertimos en crecimiento.'),
  ('hero', 'parrafo', 'Estrategia, narrativa y producción trabajando como un solo sistema para construir marcas poderosas, historias significativas y resultados medibles.'),
  ('hero', 'boton_primario', 'AGENDA UNA CONSULTA'),
  ('hero', 'boton_secundario', 'NUESTROS SERVICIOS'),
  ('quienes_somos', 'titulo', 'Quiénes Somos'),
  ('quienes_somos', 'parrafo', 'Nova Studios es una agencia de crecimiento creativo que combina estrategia, narrativa y producción para crear experiencias de marca significativas y crecimiento sostenible. A diferencia de las agencias enfocadas solo en ejecución, integramos la producción creativa con el pensamiento estratégico empresarial.'),
  ('quienes_somos', 'punto_1', 'Estrategia — dirección, posicionamiento y propósito'),
  ('quienes_somos', 'punto_2', 'Narrativa — historias que conectan, no ruido'),
  ('quienes_somos', 'punto_3', 'Producción — calidad premium en cada detalle'),
  ('quienes_somos', 'boton', 'CONOCE MÁS DE NOSOTROS'),
  ('por_que_nova', 'titulo', '¿Por Qué Nova?'),
  ('por_que_nova', 'parrafo', 'Porque no somos un proveedor de producción: somos un socio estratégico. A diferencia de las agencias enfocadas solo en ejecución, integramos la creatividad con el pensamiento de negocio. Cinco principios lo hacen posible:'),
  ('por_que_nova', 'card_1_titulo', 'La Excelencia Es Nuestro Estándar'),
  ('por_que_nova', 'card_1_texto', 'La calidad está en los detalles: cada entrega refleja el nivel premium que tu marca merece.'),
  ('por_que_nova', 'card_2_titulo', 'Estrategia Antes que Ejecución'),
  ('por_que_nova', 'card_2_texto', 'Todo gran trabajo empieza con entendimiento. Primero pensamos, después producimos.'),
  ('por_que_nova', 'card_3_titulo', 'Personas Antes que Proyectos'),
  ('por_que_nova', 'card_3_texto', 'Construimos relaciones basadas en confianza, comunicación clara y cuidado genuino.'),
  ('por_que_nova', 'card_4_titulo', 'Crecimiento a Través de Alianzas'),
  ('por_que_nova', 'card_4_texto', 'Nuestros clientes son socios, no transacciones. Crecemos junto a las marcas que acompañamos.'),
  ('por_que_nova', 'card_5_titulo', 'Los Sistemas Crean Excelencia'),
  ('por_que_nova', 'card_5_texto', 'Procesos claros que permiten calidad consistente y escalar con propósito.'),
  ('por_que_nova', 'cta_titulo', '¿Listo para crecer con propósito?'),
  ('por_que_nova', 'cta_texto', 'Construyamos una estrategia para tu marca.'),
  ('por_que_nova', 'cta_boton', 'HABLEMOS')
on conflict (section, key) do nothing;
