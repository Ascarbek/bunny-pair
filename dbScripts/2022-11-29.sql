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

CREATE UNIQUE INDEX router_i2
    ON public.router USING btree
    (chain_id ASC NULLS LAST, address ASC NULLS LAST)
;

CREATE TABLE public.token
(
    id serial,
    chain_id integer,
    name character varying(200),
    symbol character varying(200),
    decimals integer,
    address character varying(200),
    logo character varying(200),
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.token
    OWNER to postgres;

CREATE INDEX token_i1
    ON public.token USING btree
    (chain_id ASC NULLS LAST)
;

CREATE UNIQUE INDEX token_i2
    ON public.token USING btree
    (chain_id ASC NULLS LAST, address ASC NULLS LAST)
;