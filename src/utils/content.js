import ArrowSwap from "../components/icons/ArrowSwap";
import CardSlash from "../components/icons/CardSlash";
import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import MagicPen from "../components/icons/MagicPen";
import Microphone from "../components/icons/Microphone";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import SMSNotification from "../components/icons/SMSNotification";
import TwoUsers from "../components/icons/TwoUsers";
import Lock from "../components/icons/Lock";

const navigationLinks = [
  {
    id: 1,
    link: "Домой",
    href: "#",
  },
  {
    id: 2,
    link: "Наши цели",
    href: "#features",
  },
  {
    id: 3,
    link: "Портфолио",
    href: "#testimonials",
  },
  {
    id: 4,
    link: "Вопросы",
    href: "#questions",
  },
];

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/5391196035918531810.webp", import.meta.url),
    alt: "Sultan",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/5391196035918531812.webp", import.meta.url),
    alt: "Aruzhan",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/5391196035918531815 (2).webp", import.meta.url),
    alt: "Alua",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/5391196035918531817.webp", import.meta.url),
    alt: "Nurdos",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/5411594489169645058.webp", import.meta.url),
    alt: "Rakhymzhan",
  },
];

const logos = [
  {
    id: 1,
    src: new URL("../assets/logos/загрузка.webp", import.meta.url),
    alt: "BI group Logo",
  },
  {
    id: 2,
    src: new URL("../assets/logos/загрузка (2).webp", import.meta.url),
    alt: "NIS Logo",
  },
  {
    id: 3,
    src: new URL("../assets/logos/загрузка (1).webp", import.meta.url),
    alt: "RFMSH Logo",
  },
  {
    id: 4,
    src: new URL("../assets/logos/загрузка (3).webp", import.meta.url),
    alt: "BIL Logo",
  },
];

const frequentlyAskedQuestions = [
  {
    category: "Общее",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Note Icon",
        Icon: Note,
        question: "Чем занимается наша команда?",
        answer:
            " Strike робототехническая команда участвующая в FTC, \
            Strike сплоченная команда, которая никогда не сдатся на пути к победе.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: " Что такое FTC?",
        answer:
            "FTC — это международное соревнование по робототехнике для школьников (обычно 12–18 лет). \
           Участники проектируют, строят и программируют роботов, \
            которые выполняют определённые задачи на игровом поле. ",
          
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question: "Сколько человек в команде?",
        answer:
          "В команде 12 человек \
          Каждый из них играет важную роль. \
          Что сподствует хорошей командной работе и быстрого результата.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "Как мы распределяем обязанности между собой?",
        answer:
          " Каждый из нас играет ключевую роль \
           Билдеры строят робот, программисты пишут код, \
           дизайнеры и документационщики ведут социальные сети и инженерный журнал.",
          
      },
    ],
  },
  {
    id: 2,
    category: "Интересные факты",
    questions: [
      {
        id: 5,
        alt: "Dollar Circle Icon",
        Icon: DollarCircle,
        question: "Сколько всего мы потратили на постройку робота?",
        answer:
          "Команда Strike в общей сложности потратила 500.000 тенге \
            что является неотьемлемой части соревнований First",
      },
      {
        id: 6,
        alt: "Card Slash Icon",
        Icon: CardSlash,
        question: "Какую роль играет Strike?",
        answer:
          "Команда Strike внесла огромную роль в мире робототехнике \
          Каждый участник внес большой вклад в развитии будущего технологии \
          и желании заниматься STEM проектами следующим поколениям учеников ",
      },
      {
        id: 7,
        alt: "Arrow Swap Icon",
        Icon: ArrowSwap,
        question: "Какие у нас достижения?",
        answer:
          " Наша команда организовала глобальные конференции и митинги с другими командами по всему мири. \
          Мы устраивали собрании учеников и ходили по школам рассказывая детям о мире робототехники. \
          Данный вклад обеспечил желания и амбиции участникам по Казахстану также начать заниматься этим делом.",
      },
      {
        id: 8,
        alt: "Lock Icon",
        Icon: Lock,
        question: "Как мы тестируем робота перед соревнованием?",
        answer:
          "Мы собираясь командой устраивая собрание, тестируем робота.",
      },
    ],
  },
  {
    id: 3,
    category: "Ресурсы",
    questions: [
      {
        id: 9,
        alt: "Organization Icon",
        Icon: Organization,
        question: "Где можно найти ресурсы по робототехнике?",
        answer:
          "Ресурсы по подготовке к соревнованиям, можно найти у нас на Githube STRIKETEAM",
      },
      {
        id: 10,
        alt: "SMS Notification Icon",
        Icon: SMSNotification,
        question: "Какие у нас социальные сети?",
        answer:
          "Нас можно найтив Telegram,Instagram и в Tiktok по никнейму Strike_ftc",
      },
      {
        id: 11,
        alt: "Microphone Icon",
        Icon: Microphone,
        question:
          "Наши контакты?",
        answer:
          "По номеру телефона 87753691809 можно узнать поближе о мире FTC, с радостью вас обслужим",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: Search,
        question:
          "Какие курсы мы представляем?",
        answer:
          "Наша команда ради вас подготовила курсы по Java основам, 3D CAD моделем, конструировании робота и многое другое",
      },
    ],
  },
  {
    id: 4,
    category: "Советы",
    questions: [
      {
        id: 13,
        alt: "Organization Icon",
        Icon: Organization,
        question: "Какие советы мы можем предложить?",
        answer:
          "Мы советуем вам никогда не сдаваться на пути, и не падать духом",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Какими достижениями мы можем похвастаться?" ,
        answer:
          "Мы являемся топовой молодежной командой в Казахстане, и обязательно выиграем призовые места на этом соревновании",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question:
          "С кем мы соотрудничаем?",
        answer:
          "Нашими спонсорами являются такие компании и школы, как BI GROUP,NIS и т.д.Чему мы безумно благодарны" ,
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question:
          "Соотрудничает ли команда Strike с остальными командами?",
        answer:
          "Да! Мы каждый раз проводим созвоны и интеграции с такими командами как SANA|FTC,qtech.ftc и остальными, так и сильнми и с новыми командами.",
      },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    rating: 5,
    description:
      "Отвечает за визуальную концепцию продукта, UI/UX-дизайн и целостный стиль интерфейсов. Формирует пользовательский опыт и следит за тем, чтобы продукт был удобным и современным.",
    src: new URL("../assets/headshots/5391196035918531808.webp", import.meta.url),
    name: "Ismail Aidana",
    title: "Main designer",
  },
  {
    id: 3,
    rating: 4,
    description:
      "Занимается сборкой и реализацией функциональных частей продукта. Участвует в разработке логики,тестировании и внедрении ключевых решений. ",
    src: new URL("../assets/headshots/5391196035918531809.webp", import.meta.url),
    name: "Nurdilda Alikhan",
    title: "Builder",
  },
  {
    id: 5,
    rating: 4,
    description:
      "Работает над технической реализацией продукта, помогает в интеграциях и поддерживает стабильную работу системы на всех этапах разработки.",
    src: new URL("../assets/headshots/5391196035918531816.webp", import.meta.url),
    name: "Aitbekov Darkhan",
    title: "Builder",
  },
  {
    id: 7,
    rating: 4,
    description:
      "Создает дизайн-макеты, визуальные элементы и графику. Участвует в разработке брендинга и улучшении пользовательского интерфейса.",
    src: new URL("../assets/headshots/5391196035918531810.webp", import.meta.url),
    name: "Baltabay Sultan",
    title: "Designer",
  },
  {
    id: 9,
    rating: 5,
    description:
      "Координирует работу команды, следит за сроками и процессами. Принимает ключевые решения и обеспечивает эффективное взаимодействие между участниками проекта.",
    src: new URL("../assets/headshots/5391196035918531811.webp", import.meta.url),

    name: "Urkunbaeva Diana",
    title: "Captain",
  },
  {
    id: 11,
    rating: 5,
    description:
      "Отвечает за архитектуру проекта и ключевую часть кода. Принимает технические решения и контролирует качество разработки.",
    src: new URL("../assets/headshots/5391196035918531812.webp", import.meta.url),
    name: "Azimbai Aruzhan",
    title: "Main coder",
  },
  {
    id: 13,
    rating: 4,
    description:
      "Разрабатывает функционал продукта, пишет и оптимизирует код. Активно участвует в доработке и улучшении системы.",
    src: new URL("../assets/headshots/5391196035918531813.webp", import.meta.url),
    name: "Beibit Nursay",
    title: "Coder",
  },
  {
    id: 15,
    rating: 4,
    description:
      "Занимается продвижением проекта в социальных сетях, формированием контент-стратегии и развитием онлайн-присутствия бренда.",
    src: new URL("../assets/headshots/5391196035918531814.webp", import.meta.url),
    name: "Sultankulova Alinur",
    title: "SMM manager",
  },
  {
    id: 17,
    rating: 5,
    description:
      "Руководит SMM-направлением, отвечает за стратегию маркетинга, аналитику и рост аудитории проекта.",
    src: new URL("../assets/headshots/5391196035918531815 (2).webp", import.meta.url),
    name: "Nauryzbay Alua",
    title: "Main SMM manager",
  },
  {
    id: 19,
    rating: 5,
    description:
      "Участвует в разработке и тестировании функционала, помогает в интеграции новых возможностей и поддержке продукта.",
    src: new URL("../assets/headshots/5391196035918531817.webp", import.meta.url),
    name: "Yesbergen Nurdos",
    title: "Main builder",
  },
  {
    id: 21,
    rating: 4,
    description:
      "Курирует процесс сборки и реализации продукта, контролирует техническое исполнение и взаимодействие между разработкой и дизайном.",
    src: new URL("../assets/headshots/5391196035918531818.webp", import.meta.url),
    name: "Mussyrman Murat",
    title: "Builder",
  },
  {
    id: 23,
    rating: 5,
    description:
      "Отвечает за разработку и поддержку сайта, адаптивность, производительность и корректную работу веб-интерфейса.",
    src: new URL("../assets/headshots/5411594489169645058.webp", import.meta.url),
    name: "Altay Rakhymzhan",
    title: "Website developer,coder",
  },
  
];

const footerCols = [
  {
    id: 1,
    category: "Команда",
    links: ["FAQ", "Features", "Companies", "Testimonials"],
  },
  {
    id: 2,
    category: "Цены",
    links: ["Plans", "Billing", "Free Trial", "Refunds"],
  },
  {
    id: 3,
    category: "Связи",
    links: ["Careers", "Our Story", "Contact", "Policy"],
  },
  {
    id: 4,
    category: "Сообщетсва",
    links: ["Forum", "Stories", "Blog", "Support"],
  },
];

const features = {
  SmartOrganization: {
    alt: "О НАС",
    heading: "О НАС",
    description:
      "Наша команда – это группа молодых инженеров, программистов и креативных мыслителей, которые участвует в FIRST Tech Challenge. \
      Мы верим, что ключ к успеху – это командная работа, взаимопомощь и постоянное обучение. \
      Наша миссия – показать, что технологии могут быть увлекательными, а сотрудничество и креативность позволяют достигать самых амбициозных целей..",
  },
  ContextualReminders: {
    alt: "НАШИ ДОСТИЖНИЯ",
    heading: "НАШИ ДОСТИЖЕНИЯ",
    description:
      "Участвовали в соревновании FTC два раза и выигрывали призовые места. \
      Организовали международные митинги по всему миру, открыли бесплатные гайды для детей.\
      Также принимали участвия в школьных благотворительных фондах и устраивали туры по школам.",
  },
};

export {
  navigationLinks,
  reviews,
  logos,
  frequentlyAskedQuestions,
  testimonials,
  footerCols,
  features,
};
