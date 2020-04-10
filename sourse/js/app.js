
let app = new Vue({
  el: '#app',
  data: {
    imgSRc: 'img/@2x',
    btnLink: "#",
    servises: [
      {
        text: 'Дизайн - концепция',
        img: 1
      },
      {
        text: 'Креативный проект',
        img: 2
      },
      {
        text: 'Разработка бренда',
        img: 3
      },
      {
        text: 'Создание логотипа / символа / талисмана',
        img: 4
      },
      {
        text: 'Оформление и брендирование мероприятий',
        img: 5
      },
      {
        text: 'Дизайн и форматирование презентаций / сайтов / мобильных приложений',
        img: 6
      },
      {
        text: 'Фотография и бильд редакция',
        img: 7
      },
      {
        text: 'Верстка печатной продукции',
        img: 8
      },
    ],
    servises2: [
      {
        text: 'Концепция  мероприятий / событий',
        img: 1
      },
      {
        text: 'Стратегия мероприятий / событий',
        img: 2
      },
      {
        text: 'Контент презентаций организаторов / участников',
        img: 3
      },
      {
        text: 'Контент корпоративного сайта / мобильного приложения',
        img: 4
      },
      {
        text: 'Работа с текстом - редактура, коррекция, фактчеккинг',
        img: 5
      },
      {
        text: 'Написание речей ',
        img: 6
      },
      {
        text: 'Социальные сети',
        img: 7
      },

    ],

    servises3: [
      {
        text: 'управление маркетинговыми проектами / акциями',
        img: 1
      },
      {
        text: 'организация логистической поддержки',
        img: 2
      },
    ],
    clients: [

      { text: 'Подпись к лого', img: "client-1.svg" },
      { text: 'Подпись к лого', img: "client-2.svg" },
      { text: 'Подпись к лого', img: "client-3.svg" },
      { text: 'Подпись к лого', img: "client-4.svg" },
      { text: 'Подпись к лого', img: "client-5.png" },
      { text: 'Подпись к лого', img: "client-6.png" },

    ],

    documents: [
      {
        text: 'Карточка компании',
        fileSize: '3mb',
        filePath: "#",
      },
      {
        text: 'Подтверждение перехода на УСН',
        fileSize: '3mb',
        filePath: "#",
      },
      // {
      //   text: 'Заверения о текущем статусе компании',
      //   fileSize: '3mb',
      //   filePath: "#",
      // }
    ],
    contactsOffice: [
      {
        title: 'Офис «Союз»:',
        text: "г. Москва, ул Дзержинского, 25, офис 40",
      },
      {
        title: 'Офис «Кисловский»:',
        text: "г. Москва, ул Дзержинского, 25, офис 40",
      }
    ],
    contactsLine: [
      {
        title: 'Контактный телефон',
        text: '<a href="tel:+74953365544">+7 495 336 55 44</a>',
      },
      {
        title: 'Почтовый адрес',
        text: "356899, г. Москва, ул Дзержинского, 25, офис 40",
      },

      {
        title: 'Электронная почта',
        text: '<a href="mailto:sampl@sample.com">sampl@sample.com</a>',
      },

    ],
    hellos1: [

      {
        text: 'оригинальные мысли',
        img: 1
      },
      {
        text: 'логика изложения',
        img: 2
      },
      {
        text: 'грамотный язык',
        img: 3
      },

    ],

    hellos2: [

      {
        text: 'эстетическая привлекательность',
        img: 1
      },
      {
        text: 'удобство использования',
        img: 2
      },
      {
        text: 'современность подачи',
        img: 3
      },

    ],
    sStrengths: [

      {
        title: 'Стратегический подход',
        text: 'Работа с крупными международными проектами приучила нас быть системными и начинать любой проект с создания стратегии и постановки целей. Мы всегда делаем работу в срок и соблюдаем все дэдлайны',
      },

      {
        title: 'Знание экспертов рынка',
        text: 'Более, чем пятнадцатилетний опыт работы в индустрии спорта и журналистики позволяет нам привлекать лучших экспертов',
      },
      {
        title: 'Работа с профессионалами, а не с менеджерами',
        text: `
        <p>«Тринити Медиа» – это намеренно маленькое агентство. </p>
        <p>Мы делаем всю работу сами, потому что именно мы обладаем опытом и знаниями. </p>
        <p>Вам не придется мучительно лавировать между десятком менеджеров, которые с трудом понимают природу вашего бизнеса</p>`,
      },


    ],




  }

})




