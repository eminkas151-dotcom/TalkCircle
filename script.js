const SETTINGS = {
  bookingEmail: "your-email@example.com"
};

const translations = {
  en: {
    navClubs: "Clubs", navHow: "How it works", navAbout: "About",
    eyebrow: "Online speaking practice", heroTitle: "Speak more. Learn naturally.",
    heroText: "Friendly conversation clubs in English, French and Spanish. Only 3–4 participants, so everyone gets time to speak.",
    viewClubs: "View clubs", trialButton: "Book a trial",
    englishClub: "English Club", frenchClub: "French Club", spanishClub: "Spanish Club",
    people: "people per group", minutes: "minutes per session", online: "online",
    chooseClub: "Choose your club", smallGroups: "Small groups, real conversation",
    clubIntro: "Each meeting has a clear topic, useful vocabulary and gentle corrections.",
    englishConversation: "English Conversation", englishDesc: "Current affairs, travel, culture, study and everyday life.",
    frenchConversation: "French Conversation", frenchDesc: "Build confidence with practical topics and natural expressions.",
    spanishConversation: "Spanish Conversation", spanishDesc: "Speak about travel, food, films, people and real situations.",
    maxFour: "Maximum 4 participants", weeklyTopics: "New topic every week",
    feedback: "Personal feedback after class", perSession: "per session", popular: "Popular",
    simpleProcess: "Simple process", howTitle: "How it works",
    step1Title: "Choose a language", step1Text: "Select your level and preferred club.",
    step2Title: "Reserve a place", step2Text: "Send the short registration form.",
    step3Title: "Join online", step3Text: "Receive a Google Meet or Zoom link by email.",
    step4Title: "Speak and improve", step4Text: "Practice for 60 minutes and receive feedback.",
    meetHost: "Meet your host", aboutTitle: "A multilingual, friendly conversation leader",
    aboutText1: "Sessions are led by a multilingual speaker with native-level English, strong French and Spanish, published books and digital skills.",
    aboutText2: "The goal is not a stressful lesson. It is a comfortable space where people speak, make mistakes and become more confident.",
    included: "Every session includes", topicGuide: "A prepared discussion topic",
    vocabulary: "Useful vocabulary and expressions", correction: "Gentle pronunciation and grammar correction",
    summary: "A short summary after the meeting", readyTitle: "Ready to start speaking?",
    readyText: "Book a trial conversation and we will help you choose the right level.",
    footerText: "Small online conversation clubs in English, French and Spanish.",
    bookingEyebrow: "Registration", bookingTitle: "Book your place", nameLabel: "Name",
    emailLabel: "Email", clubLabel: "Club", levelLabel: "Current level",
    notSure: "Not sure", timeLabel: "Preferred day/time", messageLabel: "Message (optional)",
    sendRequest: "Send booking request", formNote: "Your email app will open with the request prepared."
  },
  ru: {
    navClubs: "Клубы", navHow: "Как это работает", navAbout: "О нас",
    eyebrow: "Разговорная практика онлайн", heroTitle: "Говорите больше. Учитесь естественно.",
    heroText: "Дружелюбные разговорные клубы на английском, французском и испанском. В группе всего 3–4 человека, поэтому говорит каждый.",
    viewClubs: "Посмотреть клубы", trialButton: "Записаться на пробное",
    englishClub: "Английский клуб", frenchClub: "Французский клуб", spanishClub: "Испанский клуб",
    people: "человека в группе", minutes: "минут одно занятие", online: "онлайн",
    chooseClub: "Выберите клуб", smallGroups: "Маленькие группы, живое общение",
    clubIntro: "У каждой встречи есть тема, полезная лексика и мягкое исправление ошибок.",
    englishConversation: "Разговорный английский", englishDesc: "Новости, путешествия, культура, учёба и повседневная жизнь.",
    frenchConversation: "Разговорный французский", frenchDesc: "Практические темы, естественные выражения и уверенная речь.",
    spanishConversation: "Разговорный испанский", spanishDesc: "Путешествия, еда, фильмы, люди и реальные ситуации.",
    maxFour: "Не более 4 участников", weeklyTopics: "Новая тема каждую неделю",
    feedback: "Личная обратная связь после занятия", perSession: "за занятие", popular: "Популярно",
    simpleProcess: "Всё просто", howTitle: "Как это работает",
    step1Title: "Выберите язык", step1Text: "Укажите уровень и подходящий клуб.",
    step2Title: "Забронируйте место", step2Text: "Отправьте короткую форму записи.",
    step3Title: "Подключитесь онлайн", step3Text: "Получите ссылку Google Meet или Zoom по электронной почте.",
    step4Title: "Говорите и улучшайте", step4Text: "Практикуйтесь 60 минут и получите обратную связь.",
    meetHost: "Ведущая клуба", aboutTitle: "Дружелюбный многоязычный ведущий",
    aboutText1: "Встречи ведёт многоязычный спикер с родным английским, сильным французским и испанским, опубликованными книгами и цифровыми навыками.",
    aboutText2: "Это не стрессовый урок, а комфортное пространство, где можно говорить, ошибаться и становиться увереннее.",
    included: "В каждую встречу входит", topicGuide: "Подготовленная тема для обсуждения",
    vocabulary: "Полезные слова и выражения", correction: "Мягкое исправление произношения и грамматики",
    summary: "Короткое резюме после встречи", readyTitle: "Готовы начать говорить?",
    readyText: "Запишитесь на пробную беседу, и мы поможем определить подходящий уровень.",
    footerText: "Небольшие онлайн-клубы английского, французского и испанского.",
    bookingEyebrow: "Запись", bookingTitle: "Забронировать место", nameLabel: "Имя",
    emailLabel: "Электронная почта", clubLabel: "Клуб", levelLabel: "Текущий уровень",
    notSure: "Не уверен(а)", timeLabel: "Предпочтительный день и время", messageLabel: "Сообщение (необязательно)",
    sendRequest: "Отправить заявку", formNote: "Откроется ваша почтовая программа с готовой заявкой."
  }
};

let currentLanguage = "en";
const dialog = document.getElementById("bookingDialog");
const clubSelect = document.getElementById("club");

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  document.getElementById("languageToggle").textContent = language === "en" ? "RU" : "EN";
}

document.getElementById("languageToggle").addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "ru" : "en");
});

document.querySelectorAll("[data-open-booking]").forEach((button) => {
  button.addEventListener("click", () => {
    clubSelect.value = button.dataset.club;
    dialog.showModal();
  });
});

document.getElementById("closeDialog").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (SETTINGS.bookingEmail === "your-email@example.com") {
    alert(currentLanguage === "en"
      ? "Please replace your-email@example.com in script.js with your real email address."
      : "Замените your-email@example.com в файле script.js на настоящий адрес электронной почты.");
    return;
  }

  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`TalkCircle booking: ${data.get("club")}`);
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Club: ${data.get("club")}
Level: ${data.get("level")}
Preferred time: ${data.get("preferredTime")}

Message:
${data.get("message") || "-"}`
  );

  window.location.href = `mailto:${SETTINGS.bookingEmail}?subject=${subject}&body=${body}`;
  dialog.close();
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage("en");
