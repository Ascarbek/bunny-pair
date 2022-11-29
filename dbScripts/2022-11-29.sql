CREATE TABLE public.router
(
    id serial,
    chain_id integer,
    name character varying(200),
    address character varying(200),
    base character varying(200),
    logo character varying(200),
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.router
    OWNER to postgres;


CREATE INDEX router_i1
    ON public.router USING btree
    (chain_id ASC NULLS LAST)
;