
const SETTINGS = {
  bookingEmail: "your-email@example.com"
};

const translations = {
  en: {
    navClubs: "Clubs", navWhy: "Why small groups", navAbout: "About Emilia",
    trialButton: "Book a trial",
    eyebrow: "Small online conversation clubs",
    heroTitle: "Speak more. Feel more confident.",
    heroText: "English, French and Spanish conversation practice in small groups of only 3–4 people.",
    viewClubs: "View clubs",
    factPeople: "people per group", factTime: "live session", factLanguages: "languages",
    hostLabel: "Conversation host", hostText: "Native English speaker with strong French and Spanish.",
    clubsEyebrow: "Choose your language", clubsTitle: "Three simple conversation clubs",
    clubsText: "Each meeting has one clear topic, useful vocabulary and gentle corrections.",
    englishTitle: "English Conversation", englishText: "Travel, culture, study, films, current topics and everyday life.",
    frenchTitle: "French Conversation", frenchText: "Natural phrases, practical topics, travel and culture.",
    spanishTitle: "Spanish Conversation", spanishText: "Travel, food, films, people and real-life situations.",
    maxFour: "Maximum 4 participants", everyoneSpeaks: "Everyone gets time to speak",
    feedback: "Short personal feedback", perSession: "per session", bookPlace: "Book a place",
    whyEyebrow: "Why it works", whyTitle: "Small groups make speaking easier",
    benefit1Title: "More speaking time", benefit1Text: "You are not lost in a large class. Everyone participates.",
    benefit2Title: "Comfortable atmosphere", benefit2Text: "Mistakes are normal, and corrections are gentle.",
    benefit3Title: "Useful topics", benefit3Text: "The conversation is based on real life, not only textbook exercises.",
    aboutEyebrow: "About Emilia", aboutTitle: "A multilingual host with a creative background",
    aboutText1: "English is Emilia's native language. She also speaks French and Spanish at a high level, as well as Russian and German.",
    aboutText2: "She has published children's books and has strong digital skills. Her goal is to create a friendly place where people speak naturally and become more confident.",
    badgeNative: "Native English", badgeFrench: "French", badgeSpanish: "Spanish",
    badgeBooks: "3 published books", badgeDigital: "Digital skills",
    ctaEyebrow: "Start simply", ctaTitle: "Book one trial conversation.",
    ctaText: "We will help you choose the right language, level and group.",
    footerText: "Small online conversation clubs in English, French and Spanish.",
    formEyebrow: "Booking request", formTitle: "Find the right group",
    nameLabel: "Name", emailLabel: "Email", clubLabel: "Club", levelLabel: "Current level",
    notSure: "Not sure", timeLabel: "Preferred day/time", messageLabel: "Message (optional)",
    sendRequest: "Send booking request", formNote: "Your email app will open with the request prepared."
  },
  ru: {
    navClubs: "Клубы", navWhy: "Почему малые группы", navAbout: "Об Эмилии",
    trialButton: "Записаться на пробное",
    eyebrow: "Небольшие разговорные клубы онлайн",
    heroTitle: "Говорите больше. Чувствуйте себя увереннее.",
    heroText: "Разговорная практика английского, французского и испанского в группах всего по 3–4 человека.",
    viewClubs: "Посмотреть клубы",
    factPeople: "человека в группе", factTime: "одно занятие", factLanguages: "языка",
    hostLabel: "Ведущая клуба", hostText: "Родной английский, сильный французский и испанский.",
    clubsEyebrow: "Выберите язык", clubsTitle: "Три простых разговорных клуба",
    clubsText: "У каждой встречи одна понятная тема, полезная лексика и мягкое исправление ошибок.",
    englishTitle: "Разговорный английский", englishText: "Путешествия, культура, учёба, фильмы, современные темы и повседневная жизнь.",
    frenchTitle: "Разговорный французский", frenchText: "Естественные фразы, практические темы, путешествия и культура.",
    spanishTitle: "Разговорный испанский", spanishText: "Путешествия, еда, фильмы, люди и реальные жизненные ситуации.",
    maxFour: "Не более 4 участников", everyoneSpeaks: "Говорит каждый",
    feedback: "Короткая личная обратная связь", perSession: "за занятие", bookPlace: "Забронировать место",
    whyEyebrow: "Почему это работает", whyTitle: "В маленькой группе говорить легче",
    benefit1Title: "Больше разговорной практики", benefit1Text: "Вы не теряетесь в большой группе. Участвует каждый.",
    benefit2Title: "Комфортная атмосфера", benefit2Text: "Ошибки — это нормально, а исправления делаются мягко.",
    benefit3Title: "Полезные темы", benefit3Text: "Разговор строится вокруг реальной жизни, а не только учебника.",
    aboutEyebrow: "Об Эмилии", aboutTitle: "Многоязычная ведущая с творческим опытом",
    aboutText1: "Английский для Эмилии родной. Она также хорошо владеет французским и испанским, говорит по-русски и изучает немецкий.",
    aboutText2: "Она опубликовала детские книги и обладает сильными цифровыми навыками. Её цель — создать дружелюбное пространство, где люди говорят естественно и становятся увереннее.",
    badgeNative: "Родной английский", badgeFrench: "Французский", badgeSpanish: "Испанский",
    badgeBooks: "3 опубликованные книги", badgeDigital: "Цифровые навыки",
    ctaEyebrow: "Начните просто", ctaTitle: "Запишитесь на одну пробную беседу.",
    ctaText: "Мы поможем выбрать подходящий язык, уровень и группу.",
    footerText: "Небольшие онлайн-клубы английского, французского и испанского.",
    formEyebrow: "Заявка на запись", formTitle: "Подберём подходящую группу",
    nameLabel: "Имя", emailLabel: "Электронная почта", clubLabel: "Клуб", levelLabel: "Текущий уровень",
    notSure: "Не уверен(а)", timeLabel: "Предпочтительный день и время", messageLabel: "Сообщение (необязательно)",
    sendRequest: "Отправить заявку", formNote: "Откроется ваша почтовая программа с подготовленной заявкой."
  }
};

let currentLanguage = localStorage.getItem("talkcircleLanguage") || "en";
const dialog = document.getElementById("bookingDialog");
const clubSelect = document.getElementById("club");

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
  document.getElementById("languageToggle").textContent = language === "en" ? "RU" : "EN";
  localStorage.setItem("talkcircleLanguage", language);
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
applyLanguage(currentLanguage);
