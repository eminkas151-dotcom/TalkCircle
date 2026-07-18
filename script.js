
const SETTINGS = {
  bookingEmail: "your-email@example.com"
};

const translations = {
  en: {
    navClubs: "Clubs", navAbout: "About",
    eyebrow: "Online conversation clubs",
    heroTitle: "Speak more. Feel more confident.",
    heroText: "Friendly online conversation clubs in English, French and Spanish. Small groups of 3–4 people, so everyone gets time to speak.",
    viewClubs: "View clubs", trialButton: "Book a trial",
    people: "people per group", session: "conversation session", languages: "languages",
    chooseClub: "Choose your club", clubsTitle: "Simple conversation practice",
    clubsIntro: "No complicated levels or long courses. Just a small group, an interesting topic and real conversation.",
    englishText: "Talk about travel, culture, films, study and everyday life.",
    frenchText: "Practice natural French through culture, travel and daily topics.",
    spanishText: "Speak about travel, food, films, people and everyday situations.",
    smallGroups: "Small groups", realTopics: "Real-life topics",
    friendlyFeedback: "Friendly feedback", bookPlace: "Book a place",
    aboutEyebrow: "About Emilia", aboutTitle: "A multilingual conversation host",
    aboutText1: "English is Emilia's native language. She also speaks French and Spanish at a high level, as well as Russian and German.",
    aboutText2: "She has published children's books and has strong digital skills. Her goal is to create a friendly place where people can speak naturally and become more confident.",
    ctaTitle: "Start with one conversation.", ctaText: "Choose a language and book a trial session.",
    footerText: "Conversation clubs in English, French and Spanish.",
    formEyebrow: "Booking request", formTitle: "Book your place",
    nameLabel: "Name", clubLabel: "Language",
    messageLabel: "Message (optional)",
    sendRequest: "Send booking request",
    formNote: "Your email app will open with the request prepared."
  },
  ru: {
    navClubs: "Клубы", navAbout: "Об Эмилии",
    eyebrow: "Разговорные клубы онлайн",
    heroTitle: "Говорите больше. Чувствуйте себя увереннее.",
    heroText: "Дружелюбные разговорные клубы английского, французского и испанского. В группе только 3–4 человека, поэтому говорит каждый.",
    viewClubs: "Посмотреть клубы", trialButton: "Записаться на пробное",
    people: "человека в группе", session: "одно занятие", languages: "языка",
    chooseClub: "Выберите клуб", clubsTitle: "Простая разговорная практика",
    clubsIntro: "Без сложных уровней и длинных курсов. Только небольшая группа, интересная тема и живой разговор.",
    englishText: "Обсуждение путешествий, культуры, фильмов, учёбы и повседневной жизни.",
    frenchText: "Практика естественного французского через культуру, путешествия и бытовые темы.",
    spanishText: "Разговоры о путешествиях, еде, фильмах, людях и повседневных ситуациях.",
    smallGroups: "Маленькие группы", realTopics: "Темы из реальной жизни",
    friendlyFeedback: "Дружелюбная обратная связь", bookPlace: "Забронировать место",
    aboutEyebrow: "Об Эмилии", aboutTitle: "Многоязычная ведущая клуба",
    aboutText1: "Английский для Эмилии родной. Она также хорошо владеет французским и испанским, говорит по-русски и изучает немецкий.",
    aboutText2: "Она опубликовала детские книги и обладает сильными цифровыми навыками. Её цель — создать дружелюбное пространство, где люди могут говорить естественно и становиться увереннее.",
    ctaTitle: "Начните с одной беседы.", ctaText: "Выберите язык и запишитесь на пробное занятие.",
    footerText: "Разговорные клубы английского, французского и испанского.",
    formEyebrow: "Заявка на запись", formTitle: "Забронировать место",
    nameLabel: "Имя", clubLabel: "Язык",
    messageLabel: "Сообщение (необязательно)",
    sendRequest: "Отправить заявку",
    formNote: "Откроется ваша почтовая программа с подготовленной заявкой."
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
    if (translations[language][key]) element.textContent = translations[language][key];
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
Language: ${data.get("club")}

Message:
${data.get("message") || "-"}`
  );

  window.location.href = `mailto:${SETTINGS.bookingEmail}?subject=${subject}&body=${body}`;
  dialog.close();
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
