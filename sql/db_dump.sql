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
1	Білл Візлі	Білл Візлі.jpg		f	2024-01-26 15:22:13.891+02	2024-01-26 15:22:13.891+02
2	Ґедвіга	Ґедвіга.jpg		f	2024-01-26 15:22:42.928+02	2024-01-26 15:22:42.928+02
3	Дементори	Дементори.jpg		f	2024-01-26 15:26:23.673+02	2024-01-26 15:26:23.673+02
4	Джордж Візлі	Джордж Візлі.jpg		f	2024-01-26 15:26:55.004+02	2024-01-26 15:26:55.004+02
5	Кентаври	Кентаври.png		f	2024-01-26 15:27:13.021+02	2024-01-26 15:27:13.021+02
6	Кривавий Барон	Кривавий Барон.png		f	2024-01-26 15:27:52.357+02	2024-01-26 15:27:52.357+02
7	Лорд Волдеморт	Лорд Волдеморт.jpg		f	2024-01-26 15:28:12.021+02	2024-01-26 15:28:12.021+02
8	Рональд Візлі	Рональд Візлі.jpg		f	2024-01-26 15:28:29.215+02	2024-01-26 15:28:29.215+02
9	Сер Ніколас де Дельфінгтон	Сер Ніколас де Дельфінгтон.png		f	2024-01-26 15:28:54.185+02	2024-01-26 15:28:54.185+02
10	Сіра Дама	Сіра Дама.png		f	2024-01-26 15:29:21.864+02	2024-01-26 15:29:21.864+02
11	Фред Візлі	Фред Візлі.jpg		f	2024-01-26 15:30:02.263+02	2024-01-26 15:30:02.263+02
12	Аберфорт Дамблдор	Аберфорт Дамблдор.jpg		f	2024-01-26 15:30:51.054+02	2024-01-26 15:30:51.054+02
13	Аластор Грюм	Аластор Грюм.jpg		f	2024-01-26 15:31:08.334+02	2024-01-26 15:31:08.334+02
14	Албус Дамблдор	Албус Дамблдор.jpg		f	2024-01-26 15:31:23.076+02	2024-01-26 15:31:23.076+02
15	Арґус Філч	Арґус Філч.jpg		f	2024-01-26 15:31:38.02+02	2024-01-26 15:31:38.02+02
16	Артур Візлі	Артур Візлі.jpg		f	2024-01-26 15:31:54.231+02	2024-01-26 15:31:54.231+02
17	Белатриса Лестранж	Белатриса Лестранж.jpg		f	2024-01-26 15:32:13.123+02	2024-01-26 15:32:13.123+02
18	Вернон Дурслі	Вернон Дурслі.jpg		f	2024-01-26 15:32:41.652+02	2024-01-26 15:32:41.652+02
19	Гаррі Поттер	Гаррі Поттер.jpg		f	2024-01-26 15:32:57.996+02	2024-01-26 15:32:57.996+02
20	Геллерт Грин-де-Вальд	Геллерт Грин-де-Вальд.jpg		f	2024-01-26 15:33:12.526+02	2024-01-26 15:33:12.526+02
21	Герміона Ґрейнджер	Герміона Ґрейнджер.jpg		f	2024-01-26 15:33:27.23+02	2024-01-26 15:33:27.23+02
22	Ґільдерой Локарт	Ґільдерой Локарт.jpg		f	2024-01-26 15:33:44.958+02	2024-01-26 15:33:44.958+02
23	Горацій Слизоріг	Горацій Слизоріг.jpg		f	2024-01-26 15:34:04.022+02	2024-01-26 15:34:04.022+02
24	Джеймс Поттер	Джеймс Поттер.jpg		f	2024-01-26 15:34:21.51+02	2024-01-26 15:34:21.51+02
25	Джіні Візлі	Джіні Візлі.jpg		f	2024-01-26 15:34:36.733+02	2024-01-26 15:34:36.733+02
26	Добі	Добі.jpg		f	2024-01-26 15:34:52.601+02	2024-01-26 15:34:52.601+02
27	Долорес Амбридж	Долорес Амбридж.jpg		f	2024-01-26 15:35:12.213+02	2024-01-26 15:35:12.213+02
28	Драко Мелфой	Драко Мелфой.jpg		f	2024-01-26 15:35:36.4+02	2024-01-26 15:35:36.4+02
29	Дадлі Дурслі	Дадлі Дурслі.jpg		f	2024-01-26 15:37:51.535+02	2024-01-26 15:37:51.535+02
30	Квіріній Квірел	Квіріній Квірел.jpg		f	2024-01-26 15:39:46.152+02	2024-01-26 15:39:46.152+02
31	Корнеліус Фадж	Корнеліус Фадж.jpg		f	2024-01-26 15:40:06.583+02	2024-01-26 15:40:06.583+02
32	Криволапик	Криволапик.jpg		f	2024-01-26 15:40:33.242+02	2024-01-26 15:40:33.242+02
33	Лілі Поттер	Лілі Поттер.jpg		f	2024-01-26 15:40:56.413+02	2024-01-26 15:40:56.413+02
34	Луна	Луна.jpg		f	2024-01-26 15:41:21.537+02	2024-01-26 15:41:21.537+02
35	Луціус Мелфой	Луціус Мелфой.jpg		f	2024-01-26 15:41:38.845+02	2024-01-26 15:41:38.845+02
36	Мінерва Макґонеґел	Мінерва Макґонеґел.jpg		f	2024-01-26 15:42:08.975+02	2024-01-26 15:42:08.975+02
37	Молі Візлі	Молі Візлі.jpg		f	2024-01-26 15:42:24.699+02	2024-01-26 15:42:24.699+02
38	Нагайна	Нагайна.jpg		f	2024-01-26 15:42:49.091+02	2024-01-26 15:42:49.091+02
39	Нарциса Мелфой	Нарциса Мелфой.jpg		f	2024-01-26 15:43:11.971+02	2024-01-26 15:43:11.971+02
40	Невіл Лонґботом	Невіл Лонґботом.jpg		f	2024-01-26 15:43:27.409+02	2024-01-26 15:43:27.409+02
41	Німфадора Тонкс	Німфадора Тонкс.jpg		f	2024-01-26 15:43:50.52+02	2024-01-26 15:43:50.52+02
42	Персі Візлі	Персі Візлі.jpg		f	2024-01-26 15:44:07.328+02	2024-01-26 15:44:07.328+02
43	Петунія Дурслі	Петунія Дурслі.jpg		f	2024-01-26 15:44:24.868+02	2024-01-26 15:44:24.868+02
44	Пітер Петіґру	Пітер Петіґру.jpg		f	2024-01-26 15:44:40.955+02	2024-01-26 15:44:40.955+02
45	Плаксива Міртл	Плаксива Міртл.jpg		f	2024-01-26 15:44:55.268+02	2024-01-26 15:44:55.268+02
46	Помона Стебль	Помона Стебль.jpg		f	2024-01-26 15:45:12.481+02	2024-01-26 15:45:12.481+02
47	Ремус Люпин	Ремус Люпин.jpg		f	2024-01-26 15:45:31.024+02	2024-01-26 15:45:31.024+02
48	Розподільний капелюх	Розподільний капелюх.jpg		f	2024-01-26 15:45:50.605+02	2024-01-26 15:45:50.605+02
49	Рубеус Геґрід	Рубеус Геґрід.jpg		f	2024-01-26 15:46:20.654+02	2024-01-26 15:46:20.654+02
50	Северус Снейп	Северус Снейп.jpg		f	2024-01-26 15:46:40.606+02	2024-01-26 15:46:40.606+02
51	Седрик Діґорі	Седрик Діґорі.jpg		f	2024-01-26 15:47:11.928+02	2024-01-26 15:47:11.928+02
52	Сивіла Трелоні	Сивіла Трелоні.jpg		f	2024-01-26 15:47:38.731+02	2024-01-26 15:47:38.731+02
53	Сіріус Блек	Сіріус Блек.jpg		f	2024-01-26 15:47:54.319+02	2024-01-26 15:47:54.319+02
54	Флер Делякур	Флер Делякур.jpg		f	2024-01-26 15:48:13.052+02	2024-01-26 15:48:13.052+02
55	Чарлі Візлі	Чарлі Візлі.jpg		f	2024-01-26 15:48:30.186+02	2024-01-26 15:48:30.186+02
56	Чо Чанґ	Чо Чанґ.jpg		f	2024-01-26 15:48:51.118+02	2024-01-26 15:48:51.118+02
57	Араґоґ	Араґоґ.jpg		t	2024-01-26 15:52:05.575+02	2024-01-26 15:52:05.575+02
59	Барті Кравч молодший	Барті Кравч молодший.jpg		t	2024-01-26 15:57:27.635+02	2024-01-26 15:57:27.635+02
60	Василіск	Василіск.jpg		t	2024-01-26 15:57:41.8+02	2024-01-26 15:57:41.8+02
61	Віктор Крум	Віктор Крум.jpg		t	2024-01-26 15:57:54.846+02	2024-01-26 15:57:54.846+02
62	Вінкі	Вінкі.jpeg		t	2024-01-26 15:58:07.491+02	2024-01-26 15:58:07.491+02
63	Габріель Делакур	Габріель Делакур.jpg		t	2024-01-26 15:58:25.931+02	2024-01-26 15:59:16.216+02
64	Гобліни	Гобліни.jpg		t	2024-01-26 16:00:30.118+02	2024-01-26 16:00:30.118+02
65	Гримуча верба	Гримуча верба.jpg		t	2024-01-26 16:00:43.358+02	2024-01-26 16:00:43.358+02
66	Грохх	Грохх.jpg		t	2024-01-26 16:01:21.712+02	2024-01-26 16:01:21.712+02
67	Денніс Кріві	Денніс Кріві.jpg		t	2024-01-26 16:01:36.064+02	2024-01-26 16:01:36.064+02
68	Дракони	Дракони.jpg		t	2024-01-26 16:01:48.724+02	2024-01-26 16:01:48.724+02
69	Єдинороги	Єдинороги.jpg		t	2024-01-26 16:02:35.413+02	2024-01-26 16:02:35.413+02
70	Ігор Каркароф	Ігор Каркароф.jpg		t	2024-01-26 16:04:20.131+02	2024-01-26 16:04:20.131+02
71	Клювокрил	Клювокрил.jpg		t	2024-01-26 16:05:33.34+02	2024-01-26 16:05:33.34+02
72	Колін Кріві	Колін Кріві.jpg		t	2024-01-26 16:05:52.137+02	2024-01-26 16:05:52.137+02
73	Крічер	Крічер.jpeg		t	2024-01-26 16:06:06.893+02	2024-01-26 16:06:06.893+02
74	Ксенофілій Лавгуд	Ксенофілій Лавгуд.jpeg		t	2024-01-26 16:06:37.624+02	2024-01-26 16:06:37.624+02
75	Левконія	Левконія.jpg		t	2024-01-26 16:06:54.548+02	2024-01-26 16:06:54.548+02
76	Літаючий мотоцикл	Літаючий мотоцикл Хагріда.jpg		t	2024-01-26 16:07:16.378+02	2024-01-26 16:07:16.378+02
77	Марволо Мракс	Марволо Мракс.jpg		t	2024-01-26 16:07:30.792+02	2024-01-26 16:07:30.792+02
78	Медальйон Салазара Слизерина	Медальйон Салазара Слизерина.jpg		t	2024-01-26 16:07:44.791+02	2024-01-26 16:07:44.791+02
79	Меропа Мракс	Меропа Мракс.jpg		t	2024-01-26 16:07:59.913+02	2024-01-26 16:07:59.913+02
80	Меч Ґодрика Ґрифіндора	Меч Ґодрика Ґрифіндора.jpg		t	2024-01-26 16:08:12.442+02	2024-01-26 16:08:12.442+02
81	Місіс Норіс	Місіс Норіс.jpg		t	2024-01-26 16:08:24.965+02	2024-01-26 16:08:24.965+02
82	Морфін Мракс	Морфін Мракс.jpg		t	2024-01-26 16:08:38.414+02	2024-01-26 16:08:38.414+02
83	Німбус 2000	Німбус 2000.png		t	2024-01-26 16:08:53.412+02	2024-01-26 16:08:53.412+02
84	Олімпія Максім	Олімпія Максім.jpg		t	2024-01-26 16:09:05.712+02	2024-01-26 16:09:05.712+02
85	Пенсі Паркінсон	Пенсі Паркінсон.jpg		t	2024-01-26 16:09:22.795+02	2024-01-26 16:09:22.795+02
86	Перстень Ярволода Ґонта	Перстень Ярволода Ґонта.jpg		t	2024-01-26 16:10:07.849+02	2024-01-26 16:10:07.849+02
87	Півз	Півз.png		t	2024-01-26 16:10:24.458+02	2024-01-26 16:10:24.458+02
88	Пушишки	Пушишки.jpg		t	2024-01-26 16:10:42.215+02	2024-01-26 16:10:42.215+02
89	Реґулус Блек	Реґулус Блек.jpg		t	2024-01-26 16:10:54.995+02	2024-01-26 16:10:54.995+02
90	Русалки	Русалки.jpg		t	2024-01-26 16:11:07.662+02	2024-01-26 16:11:07.662+02
91	Руфус Скрiмджер	Руфус Скрiмджер.jpg		t	2024-01-26 16:11:34.281+02	2024-01-26 16:11:34.281+02
92	Садові гноми	Садові гноми.jpg		t	2024-01-26 16:11:47.43+02	2024-01-26 16:11:47.43+02
93	Смертельні Реліквії	Смертельні Реліквії.png		t	2024-01-26 16:12:00.412+02	2024-01-26 16:12:00.412+02
94	Снітч	Снітч.png		t	2024-01-26 16:12:13.135+02	2024-01-26 16:12:13.135+02
95	Упир	Упир.jpg		t	2024-01-26 16:12:32.118+02	2024-01-26 16:12:32.118+02
96	Філософський камінь	Філософський камінь.png		t	2024-01-26 16:12:46.1+02	2024-01-26 16:12:46.1+02
97	Фістрали	Фістрали.jpg		t	2024-01-26 16:13:00.61+02	2024-01-26 16:13:00.61+02
98	Флоберв'яки	Флоберв'яки.jpg		t	2024-01-26 16:13:13.562+02	2024-01-26 16:13:13.562+02
99	Форд Англія	Форд Англія.jpg		t	2024-01-26 16:13:28.351+02	2024-01-26 16:13:28.351+02
100	Чаша Пенелопи Пуффендуй	Чаша Пенелопи Пуффендуй.png		t	2024-01-26 16:13:46.139+02	2024-01-26 16:13:46.139+02
101	Щоденник Тома Редла	Щоденник Тома Редла.jpg		t	2024-01-26 16:14:00.617+02	2024-01-26 16:14:00.617+02
58	Бартеміус "Барті" Крауч (старший)	1706282234289-73-Барті Крауч старший.jpg		t	2024-01-26 15:52:23.553+02	2024-01-26 17:17:14.652+02
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

SELECT pg_catalog.setval('public.cards_id_seq', 71, true);


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

