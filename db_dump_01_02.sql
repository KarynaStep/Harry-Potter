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
1	Аберфорт Дамблдор	Аберфорт Дамблдор.jpg		f	2024-02-01 20:24:03.126+02	2024-02-01 20:24:03.126+02
2	Аластор Грюм	Аластор Грюм.jpg		f	2024-02-01 20:24:17.684+02	2024-02-01 20:24:17.684+02
3	Албус Дамблдор	Албус Дамблдор.jpg		f	2024-02-01 20:24:33.081+02	2024-02-01 20:24:33.081+02
4	Арґус Філч	Арґус Філч.jpg		f	2024-02-01 20:24:46.813+02	2024-02-01 20:24:46.813+02
5	Артур Візлі	Артур Візлі.jpg		f	2024-02-01 20:25:00.035+02	2024-02-01 20:25:00.035+02
6	Белатриса Лестранж	Белатриса Лестранж.jpg		f	2024-02-01 20:25:12.499+02	2024-02-01 20:25:12.499+02
7	Білл Візлі	Білл Візлі.jpg		f	2024-02-01 20:25:24.663+02	2024-02-01 20:25:24.663+02
8	Вернон Дурслі	Вернон Дурслі.jpg		f	2024-02-01 20:25:36.39+02	2024-02-01 20:25:36.39+02
9	Гаррі Поттер	Гаррі Поттер.jpg		f	2024-02-01 20:25:47.643+02	2024-02-01 20:25:47.643+02
10	Ґедвіга	Ґедвіга.jpg		f	2024-02-01 20:25:59.458+02	2024-02-01 20:25:59.458+02
11	Геллерт Грин-де-Вальд	Геллерт Грин-де-Вальд.jpg		f	2024-02-01 20:26:11.778+02	2024-02-01 20:26:11.778+02
12	Герміона Ґрейнджер	Герміона Ґрейнджер.jpg		f	2024-02-01 20:26:24.26+02	2024-02-01 20:26:24.26+02
13	Ґільдерой Локарт	Ґільдерой Локарт.jpg		f	2024-02-01 20:26:39.354+02	2024-02-01 20:26:39.354+02
14	Горацій Слизоріг	Горацій Слизоріг.jpg		f	2024-02-01 20:26:51.945+02	2024-02-01 20:26:51.945+02
15	Дадлі Дурслі	Дадлі Дурслі.jpg		f	2024-02-01 20:27:06.52+02	2024-02-01 20:27:06.52+02
16	Дементори	Дементори.jpg		f	2024-02-01 20:27:20.488+02	2024-02-01 20:27:20.488+02
17	Джеймс Поттер	Джеймс Поттер.jpg		f	2024-02-01 20:27:33.696+02	2024-02-01 20:27:33.696+02
18	Джіні Візлі	Джіні Візлі.jpg		f	2024-02-01 20:28:03.844+02	2024-02-01 20:28:03.844+02
19	Джордж Візлі	Джордж Візлі.jpg		f	2024-02-01 20:28:19.45+02	2024-02-01 20:28:19.45+02
20	Добі	Добі.jpg		f	2024-02-01 20:28:33.426+02	2024-02-01 20:28:33.426+02
21	Долорес Амбридж	Долорес Амбридж.jpg		f	2024-02-01 20:28:46.927+02	2024-02-01 20:28:46.927+02
22	Драко Мелфой	Драко Мелфой.jpg		f	2024-02-01 20:29:04.397+02	2024-02-01 20:29:04.397+02
23	Квіріній Квірел	Квіріній Квірел.jpg		f	2024-02-01 20:29:17.645+02	2024-02-01 20:29:17.645+02
24	Кентаври	Кентаври.png		f	2024-02-01 20:29:31.937+02	2024-02-01 20:29:31.937+02
25	Корнеліус Фадж	Корнеліус Фадж.jpg		f	2024-02-01 20:29:43.99+02	2024-02-01 20:29:43.99+02
26	Кривавий Барон	Кривавий Барон.png		f	2024-02-01 20:30:00.076+02	2024-02-01 20:30:00.076+02
27	Криволапик	Криволапик.jpg		f	2024-02-01 20:30:13.355+02	2024-02-01 20:30:13.355+02
28	Лілі Поттер	Лілі Поттер.jpg		f	2024-02-01 20:30:26.531+02	2024-02-01 20:30:26.531+02
29	Лорд Волдеморт	Лорд Волдеморт.jpg		f	2024-02-01 20:30:44.609+02	2024-02-01 20:30:44.609+02
30	Луна	Луна.jpg		f	2024-02-01 20:30:59.947+02	2024-02-01 20:30:59.947+02
31	Луціус Мелфой	Луціус Мелфой.jpg		f	2024-02-01 20:31:14.009+02	2024-02-01 20:31:14.009+02
32	Мінерва Макґонеґел	Мінерва Макґонеґел.jpg		f	2024-02-01 20:31:27.449+02	2024-02-01 20:31:27.449+02
33	Молі Візлі	Молі Візлі.jpg		f	2024-02-01 20:31:41.376+02	2024-02-01 20:31:41.376+02
34	Нагайна	Нагайна.jpg		f	2024-02-01 20:31:56.397+02	2024-02-01 20:31:56.397+02
35	Нарциса Мелфой	Нарциса Мелфой.jpg		f	2024-02-01 20:32:09.22+02	2024-02-01 20:32:09.22+02
36	Невіл Лонґботом	Невіл Лонґботом.jpg		f	2024-02-01 20:32:24.321+02	2024-02-01 20:32:24.321+02
37	Німфадора Тонкс	Німфадора Тонкс.jpg		f	2024-02-01 20:32:39.503+02	2024-02-01 20:32:39.503+02
38	Персі Візлі	Персі Візлі.jpg		f	2024-02-01 20:32:54.089+02	2024-02-01 20:32:54.089+02
39	Петунія Дурслі	Петунія Дурслі.jpg		f	2024-02-01 20:33:09.1+02	2024-02-01 20:33:09.1+02
40	Пітер Петіґру	Пітер Петіґру.jpg		f	2024-02-01 20:33:22.545+02	2024-02-01 20:33:22.545+02
41	Плаксива Міртл	Плаксива Міртл.jpg		f	2024-02-01 20:33:36.164+02	2024-02-01 20:33:36.164+02
42	Помона Стебль	Помона Стебль.jpg		f	2024-02-01 20:33:51.79+02	2024-02-01 20:33:51.79+02
43	Ремус Люпин	Ремус Люпин.jpg		f	2024-02-01 20:34:08.958+02	2024-02-01 20:34:08.958+02
44	Розподільний капелюх	Розподільний капелюх.jpg		f	2024-02-01 20:34:22.907+02	2024-02-01 20:34:22.907+02
45	Рональд Візлі	Рональд Візлі.jpg		f	2024-02-01 20:34:36.99+02	2024-02-01 20:34:36.99+02
46	Рубеус Геґрід	Рубеус Геґрід.jpg		f	2024-02-01 20:34:51.473+02	2024-02-01 20:34:51.473+02
47	Северус Снейп	Северус Снейп.jpg		f	2024-02-01 20:35:04.667+02	2024-02-01 20:35:04.667+02
48	Седрик Діґорі	Седрик Діґорі.jpg		f	2024-02-01 20:35:19.023+02	2024-02-01 20:35:19.023+02
49	Сер Ніколас де Дельфінгтон	Сер Ніколас де Дельфінгтон.png		f	2024-02-01 20:35:36.059+02	2024-02-01 20:35:36.059+02
50	Сивіла Трелоні	Сивіла Трелоні.jpg		f	2024-02-01 20:35:55.762+02	2024-02-01 20:35:55.762+02
51	Сіра Дама	Сіра Дама.png		f	2024-02-01 20:36:12.227+02	2024-02-01 20:36:12.227+02
52	Сіріус Блек	Сіріус Блек.jpg		f	2024-02-01 20:36:29.94+02	2024-02-01 20:36:29.94+02
53	Флер Делякур	Флер Делякур.jpg		f	2024-02-01 20:36:43.458+02	2024-02-01 20:36:43.458+02
54	Фред Візлі	Фред Візлі.jpg		f	2024-02-01 20:36:56.573+02	2024-02-01 20:36:56.573+02
55	Чарлі Візлі	Чарлі Візлі.jpg		f	2024-02-01 20:37:14.465+02	2024-02-01 20:37:14.465+02
56	Чо Чанґ	Чо Чанґ.jpg		f	2024-02-01 20:37:28.715+02	2024-02-01 20:37:28.715+02
57	Вінсент Креб	Вінсент Креб.jpg		f	2024-02-01 20:38:09.113+02	2024-02-01 20:38:09.113+02
58	Грегорі Гойл	Грегорі Гойл.jpg		f	2024-02-01 20:38:22.975+02	2024-02-01 20:38:22.975+02
59	Араґоґ	Араґоґ.jpg		t	2024-02-01 20:39:10.068+02	2024-02-01 20:39:10.068+02
60	Барті Кравч (молодший)	Барті Кравч молодший.jpg		t	2024-02-01 20:39:27.96+02	2024-02-01 20:39:27.96+02
61	Барті Крауч (старший)	Барті Крауч старший.jpg		t	2024-02-01 20:39:45.598+02	2024-02-01 20:39:45.598+02
62	Василіск	Василіск.jpg		t	2024-02-01 20:39:56.512+02	2024-02-01 20:39:56.512+02
63	Віктор Крум	Віктор Крум.jpg		t	2024-02-01 20:40:08.284+02	2024-02-01 20:40:08.284+02
64	Вінкі	Вінкі.jpeg		t	2024-02-01 20:40:22.783+02	2024-02-01 20:40:22.783+02
65	Габріель Делакур	Габріель Делакур.jpg		t	2024-02-01 20:40:38.212+02	2024-02-01 20:40:38.212+02
66	Гобліни	Гобліни.jpg		t	2024-02-01 20:40:51.888+02	2024-02-01 20:40:51.888+02
67	Гримуча верба	Гримуча верба.jpg		t	2024-02-01 20:41:04.911+02	2024-02-01 20:41:04.911+02
68	Грохх	Грохх.jpg		t	2024-02-01 20:41:18.567+02	2024-02-01 20:41:18.567+02
69	Денніс Кріві	Денніс Кріві.jpg		t	2024-02-01 20:41:30.48+02	2024-02-01 20:41:30.48+02
70	Дракони	Дракони.jpg		t	2024-02-01 20:41:42.136+02	2024-02-01 20:41:42.136+02
71	Єдинороги	Єдинороги.jpg		t	2024-02-01 20:42:00.17+02	2024-02-01 20:42:00.17+02
72	Ігор Каркароф	Ігор Каркароф.jpg		t	2024-02-01 20:42:12.162+02	2024-02-01 20:42:12.162+02
73	Клювокрил	Клювокрил.jpg		t	2024-02-01 20:42:27.766+02	2024-02-01 20:42:27.766+02
74	Колін Кріві	Колін Кріві.jpg		t	2024-02-01 20:42:40.603+02	2024-02-01 20:42:40.603+02
75	Крічер	Крічер.jpeg		t	2024-02-01 20:42:57.04+02	2024-02-01 20:42:57.04+02
76	Ксенофілій Лавгуд	Ксенофілій Лавгуд.jpeg		t	2024-02-01 20:43:08.256+02	2024-02-01 20:43:08.256+02
77	Левконія	Левконія.jpg		t	2024-02-01 20:43:20.845+02	2024-02-01 20:43:20.845+02
78	Літаючий мотоцикл	Літаючий мотоцикл Хагріда.jpg		t	2024-02-01 20:43:37.244+02	2024-02-01 20:43:37.244+02
79	Марволо Мракс	Марволо Мракс.jpg		t	2024-02-01 20:43:50.804+02	2024-02-01 20:43:50.804+02
80	Медальйон Салазара Слизерина	Медальйон Салазара Слизерина.jpg		t	2024-02-01 20:44:04.307+02	2024-02-01 20:44:04.307+02
81	Меропа Мракс	Меропа Мракс.jpg		t	2024-02-01 20:44:17.923+02	2024-02-01 20:44:17.923+02
82	Меч Ґодрика Ґрифіндора	Меч Ґодрика Ґрифіндора.jpg		t	2024-02-01 20:44:47.924+02	2024-02-01 20:44:47.924+02
83	Місіс Норіс	Місіс Норіс.jpg		t	2024-02-01 20:45:05.641+02	2024-02-01 20:45:05.641+02
84	Морфін Мракс	Морфін Мракс.jpg		t	2024-02-01 20:45:17.955+02	2024-02-01 20:45:17.955+02
85	Німбус 2000	Німбус 2000.png		t	2024-02-01 20:45:30.69+02	2024-02-01 20:45:30.69+02
86	Олімпія Максім	Олімпія Максім.jpg		t	2024-02-01 20:45:45.438+02	2024-02-01 20:45:45.438+02
87	Пенсі Паркінсон	Пенсі Паркінсон.jpg		t	2024-02-01 20:46:00.757+02	2024-02-01 20:46:00.757+02
88	Перстень Ярволода Ґонта	Перстень Ярволода Ґонта.jpg		t	2024-02-01 20:46:13.395+02	2024-02-01 20:46:13.395+02
89	Півз	Півз.png		t	2024-02-01 20:46:25.503+02	2024-02-01 20:46:25.503+02
90	Пушишки	Пушишки.jpg		t	2024-02-01 20:46:40.156+02	2024-02-01 20:46:40.156+02
91	Реґулус Блек	Реґулус Блек.jpg		t	2024-02-01 20:46:53.225+02	2024-02-01 20:46:53.225+02
92	Русалки	Русалки.jpg		t	2024-02-01 20:47:05.757+02	2024-02-01 20:47:05.757+02
93	Руфус Скрiмджер	Руфус Скрiмджер.jpg		t	2024-02-01 20:47:18.705+02	2024-02-01 20:47:18.705+02
94	Садові гноми	Садові гноми.jpg		t	2024-02-01 20:47:36.974+02	2024-02-01 20:47:36.974+02
95	Смертельні Реліквії	Смертельні Реліквії.png		t	2024-02-01 20:47:49.205+02	2024-02-01 20:47:49.205+02
96	Снітч	Снітч.png		t	2024-02-01 20:48:03.845+02	2024-02-01 20:48:03.845+02
97	Упир	Упир.jpg		t	2024-02-01 20:48:15.572+02	2024-02-01 20:48:15.572+02
98	Філософський камінь	Філософський камінь.png		t	2024-02-01 21:02:59.298+02	2024-02-01 21:02:59.298+02
99	Фістрали	Фістрали.jpg		t	2024-02-01 21:03:13.112+02	2024-02-01 21:03:13.112+02
100	Флоберв'яки	Флоберв'яки.jpg		t	2024-02-01 21:03:26.842+02	2024-02-01 21:03:26.842+02
101	Форд Англія	Форд Англія.jpg		t	2024-02-01 21:03:40.428+02	2024-02-01 21:03:40.428+02
102	Чаша Пенелопи Пуффендуй	Чаша Пенелопи Пуффендуй.png		t	2024-02-01 21:03:56.696+02	2024-02-01 21:03:56.696+02
103	Щоденник Тома Редла	Щоденник Тома Редла.jpg		t	2024-02-01 21:04:12.319+02	2024-02-01 21:04:12.319+02
104	Бладжер	Бладжер.png		t	2024-02-01 21:04:34.168+02	2024-02-01 21:04:34.168+02
105	Дін Томас	Дін Томас.jpg		t	2024-02-01 21:04:48.14+02	2024-02-01 21:04:48.14+02
106	Захарія Сміт	Захарія Сміт.jpg		t	2024-02-01 21:05:00.83+02	2024-02-01 21:05:00.83+02
107	Квоффл	Квоффл.png		t	2024-02-01 21:05:13.771+02	2024-02-01 21:05:13.771+02
108	Лі Джордан	Лі Джордан.jpg		t	2024-02-01 21:05:25.356+02	2024-02-01 21:05:25.356+02
109	Наземнікус Флетчер	Наземнікус Флетчер.jpg		t	2024-02-01 21:05:40.504+02	2024-02-01 21:05:40.504+02
110	Падма Патіл	Падма Патіл.jpg		t	2024-02-01 21:05:54.278+02	2024-02-01 21:05:54.278+02
111	Парваті Патіл	Парваті Патіл.jpg		t	2024-02-01 21:06:11.967+02	2024-02-01 21:06:11.967+02
112	Ханна Аббот	Ханна Аббот.jpg		t	2024-02-01 21:06:25.948+02	2024-02-01 21:06:25.948+02
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

SELECT pg_catalog.setval('public.cards_id_seq', 112, true);


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

