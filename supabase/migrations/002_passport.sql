create schema if not exists wortreise_private;
revoke all on schema wortreise_private from public, anon, authenticated;
create table wortreise_private.passports (key_hash bytea primary key, progress jsonb not null, rev integer not null);
alter table wortreise_private.passports enable row level security;
create function public.wortreise_passport(code text, snapshot jsonb default null, expected integer default null)
returns jsonb language plpgsql security definer set search_path='' as $$
declare h bytea; p wortreise_private.passports;
begin
 if code is null or code !~ '^[0-9a-f]{32}$' then raise exception 'invalid_code'; end if;
 h:=pg_catalog.sha256(pg_catalog.convert_to(code,'UTF8'));
 if snapshot is null then
 select * into p from wortreise_private.passports where key_hash=h;
 elsif jsonb_typeof(snapshot)<>'object' or octet_length(snapshot::text)>65536 then raise exception 'invalid_snapshot';
 elsif expected=0 then
 insert into wortreise_private.passports values(h,snapshot,1) on conflict do nothing returning * into p;
 else
 update wortreise_private.passports set progress=snapshot,rev=rev+1 where key_hash=h and rev=expected returning * into p;
 end if;
 if p.rev is null then return null; end if;
 return jsonb_build_object('revision',p.rev,'progress',p.progress);
end $$;
revoke all on function public.wortreise_passport(text,jsonb,integer) from public;
grant execute on function public.wortreise_passport(text,jsonb,integer) to anon,authenticated;
