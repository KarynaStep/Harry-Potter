--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cards (
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    picture text,
    description text,
    is_pro_deck boolean,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.cards OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cards_id_seq OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;


--
-- Name: rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rooms (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    standard_deck boolean,
    pro_deck boolean,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.rooms OWNER TO postgres;

--
-- Name: rooms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rooms_id_seq OWNER TO postgres;

--
-- Name: rooms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name_user character varying(255) NOT NULL,
    id_card integer,
    name_room character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);


--
-- Name: rooms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cards (id, name, picture, description, is_pro_deck, created_at, updated_at) FROM stdin;
1	Аластор Грюм	1704009627888-17-Аластор Грюм.png		f	2023-12-31 10:00:27.903+02	2023-12-31 10:00:27.903+02
2	Албус Дамблдор	1704009674156-9-Албус Дамблдор.png		f	2023-12-31 10:01:14.166+02	2023-12-31 10:01:14.166+02
3	Арґус Філч	1704009691215-4-Арґус Філч.png		f	2023-12-31 10:01:31.226+02	2023-12-31 10:01:31.226+02
4	Белатриса Лестранж	1704009710510-74-Белатриса Лестранж.png		f	2023-12-31 10:01:50.515+02	2023-12-31 10:01:50.515+02
5	Вернон Дурслі	1704009732330-67-Вернон Дурслі.png		f	2023-12-31 10:02:12.335+02	2023-12-31 10:02:12.335+02
6	Гаррі Поттер	1704009771695-15-Гарри.png		f	2023-12-31 10:02:51.702+02	2023-12-31 10:02:51.702+02
7	Герміона Ґрейнджер	1704009786150-20-Герміона Ґрейнджер.png		f	2023-12-31 10:03:06.158+02	2023-12-31 10:03:06.158+02
8	Ґільдерой Локарт	1704009803449-8-Ґільдерой Локарт.png		f	2023-12-31 10:03:23.453+02	2023-12-31 10:03:23.453+02
9	Горацій Слизоріг	1704009818757-75-Горацій Слизоріг.png		f	2023-12-31 10:03:38.763+02	2023-12-31 10:03:38.763+02
10	Джеймс Поттер	1704009839212-55-Джеймс Поттер.png		f	2023-12-31 10:03:59.216+02	2023-12-31 10:03:59.216+02
11	Джіні Візлі	1704009884827-62-Джіні Візлі.png		f	2023-12-31 10:04:44.834+02	2023-12-31 10:04:44.834+02
12	Джордж Візлі	1704009901668-29-Джордж Візлі.png		f	2023-12-31 10:05:01.674+02	2023-12-31 10:05:01.674+02
13	Добі	1704009921133-98-Добі.png		f	2023-12-31 10:05:21.136+02	2023-12-31 10:05:21.136+02
14	Долорес Амбридж	1704009933556-68-Долорес Амбридж.png		f	2023-12-31 10:05:33.562+02	2023-12-31 10:05:33.562+02
15	Драко Мелфой	1704009949393-10-Драко Мелфой.png		f	2023-12-31 10:05:49.398+02	2023-12-31 10:05:49.398+02
16	Дурслі	1704009964828-52-Дурслі.png		f	2023-12-31 10:06:04.831+02	2023-12-31 10:06:04.831+02
17	Квіріній Квірел	1704009979235-75-Квіріній Квірел.png		f	2023-12-31 10:06:19.238+02	2023-12-31 10:06:19.238+02
18	Лілі Поттер	1704009997267-58-Лілі Поттер.png		f	2023-12-31 10:06:37.275+02	2023-12-31 10:06:37.275+02
19	Лорд Волдеморт	1704010042794-68-Лорд Волдеморт.png		f	2023-12-31 10:07:22.798+02	2023-12-31 10:07:22.798+02
20	Луна	1704010081508-10-Луна.png		f	2023-12-31 10:08:01.514+02	2023-12-31 10:08:01.514+02
21	Мінерва Макґонеґел	1704010097442-82-Мінерва Макґонеґел.png		f	2023-12-31 10:08:17.445+02	2023-12-31 10:08:17.445+02
22	Невіл Лонґботом	1704010116618-48-Невіл Лонґботом.png		f	2023-12-31 10:08:36.623+02	2023-12-31 10:08:36.623+02
23	Петунія Дурслі	1704010133543-2-Петунія Дурслі.png		f	2023-12-31 10:08:53.547+02	2023-12-31 10:08:53.547+02
24	Пітер Петіґру	1704010148623-75-Пітер Петіґру.png		f	2023-12-31 10:09:08.635+02	2023-12-31 10:09:08.635+02
25	Ремус Люпин	1704010163701-98-Ремус Люпин.png		f	2023-12-31 10:09:23.707+02	2023-12-31 10:09:23.707+02
26	Рональд Візлі	1704010177611-24-Рональд Візлі.png		f	2023-12-31 10:09:37.614+02	2023-12-31 10:09:37.614+02
27	Рубеус Геґрід	1704010192315-73-Рубеус Геґрід.png		f	2023-12-31 10:09:52.32+02	2023-12-31 10:09:52.32+02
28	Северус Снєгг	1704010241296-38-северус.png		f	2023-12-31 10:10:41.299+02	2023-12-31 10:10:41.299+02
29	Седрик Діґорі	1704010255684-17-Седрик Діґорі.png		f	2023-12-31 10:10:55.688+02	2023-12-31 10:10:55.688+02
30	Сивіла Трелоні	1704010276311-1-Сивіла Трелоні.png		f	2023-12-31 10:11:16.318+02	2023-12-31 10:11:16.318+02
31	Сіріус Блек	1704010336810-15-Сіріус Блек.png		f	2023-12-31 10:12:16.815+02	2023-12-31 10:12:16.815+02
32	Флер Делякур	1704010351493-61-Флер Делякур.png		f	2023-12-31 10:12:31.498+02	2023-12-31 10:12:31.498+02
33	Фред Візлі	1704010365043-28-Фред Візлі.png		f	2023-12-31 10:12:45.047+02	2023-12-31 10:12:45.047+02
34	Чо Чанґ	1704010382025-49-Чо Чанґ.png		f	2023-12-31 10:13:02.031+02	2023-12-31 10:13:02.031+02
35	Аберфорт Дамблдор	1704010455498-62-Аберфорт Дамблдор.png		t	2023-12-31 10:14:15.505+02	2023-12-31 10:14:15.505+02
36	Артур Візлі	1704010468312-81-Артур Візлі.png		t	2023-12-31 10:14:28.316+02	2023-12-31 10:14:28.316+02
37	Білл Візлі	1704010479099-37-Білл Візлі.png		t	2023-12-31 10:14:39.103+02	2023-12-31 10:14:39.103+02
38	Ґедвіга	1704010491686-97-Ґедвіга.png		t	2023-12-31 10:14:51.69+02	2023-12-31 10:14:51.69+02
39	Геллерт Грин-де-Вальд	1704010515208-47-Геллерт Грин-де-Вальд.png		t	2023-12-31 10:15:15.213+02	2023-12-31 10:15:15.213+02
40	Дементори	1704010528073-94-Дементори.png		t	2023-12-31 10:15:28.081+02	2023-12-31 10:15:28.081+02
41	Кентаври	1704010541022-5-Кентаври.png		t	2023-12-31 10:15:41.028+02	2023-12-31 10:15:41.028+02
42	Корнеліус Фадж	1704010553754-72-Корнеліус Фадж.png		t	2023-12-31 10:15:53.759+02	2023-12-31 10:15:53.759+02
43	Кривавий Барон	1704010567994-82-Кривавий Барон.png		t	2023-12-31 10:16:07.998+02	2023-12-31 10:16:07.998+02
44	Криволапик	1704010578436-67-Криволапик.png		t	2023-12-31 10:16:18.442+02	2023-12-31 10:16:18.442+02
45	Луціус Мелфой	1704010591883-63-Луціус Мелфой.png		t	2023-12-31 10:16:31.888+02	2023-12-31 10:16:31.888+02
46	Молі Візлі	1704010605265-99-Молі Візлі.png		t	2023-12-31 10:16:45.267+02	2023-12-31 10:16:45.267+02
47	Нагайна	1704010618913-77-Нагайна.png		t	2023-12-31 10:16:58.923+02	2023-12-31 10:16:58.923+02
48	Нарциса Мелфой	1704010631806-92-Нарциса Мелфой.png		t	2023-12-31 10:17:11.81+02	2023-12-31 10:17:11.81+02
49	Німфадора Тонкс	1704010647204-74-Німфадора Тонкс.png		t	2023-12-31 10:17:27.209+02	2023-12-31 10:17:27.209+02
50	Персі Візлі	1704010660423-19-Персі Візлі.png		t	2023-12-31 10:17:40.428+02	2023-12-31 10:17:40.428+02
51	Півз	1704010673019-83-Півз.png		t	2023-12-31 10:17:53.022+02	2023-12-31 10:17:53.022+02
52	Плаксива Міртл	1704010686706-89-Плаксива Міртл.png		t	2023-12-31 10:18:06.713+02	2023-12-31 10:18:06.713+02
53	Помона Стебль	1704010702626-86-Помона Стебль.png		t	2023-12-31 10:18:22.629+02	2023-12-31 10:18:22.629+02
54	Розподільний капелюх	1704010726420-69-розподільний капелюх.png		t	2023-12-31 10:18:46.424+02	2023-12-31 10:18:46.424+02
55	Сер Ніколас де Дельфінгтон	1704010740438-44-Сер Ніколас де Дельфінгтон.png		t	2023-12-31 10:19:00.448+02	2023-12-31 10:19:00.448+02
56	Сіра Дама_Оленою Когтевран	1704010753018-95-Сіра Дама_Оленою Когтевран.png		t	2023-12-31 10:19:13.023+02	2023-12-31 10:19:13.023+02
57	Чарлі Візлі	1704010764550-53-Чарлі Візлі.png		t	2023-12-31 10:19:24.556+02	2023-12-31 10:19:24.556+02
\.


--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rooms (id, name, standard_deck, pro_deck, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name_user, id_card, name_room, created_at, updated_at) FROM stdin;
\.


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cards_id_seq', 57, true);


--
-- Name: rooms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rooms_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- Name: rooms rooms_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_name_key UNIQUE (name);


--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_id_card_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_card_fkey FOREIGN KEY (id_card) REFERENCES public.cards(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users users_name_room_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_room_fkey FOREIGN KEY (name_room) REFERENCES public.rooms(name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

