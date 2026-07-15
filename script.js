
const SETTINGS = {
  bookingEmail: "your-email@example.com"
};

const translations = {
  en: {
    home: "Home", clubs: "Clubs", aboutEmilia: "About Emilia", contact: "Contact",
    smallGroups: "Small groups. Big progress.",
    heroText: "Friendly conversation clubs in English, French and Spanish for teens and adults.",
    perGroup: "per group", speakMore: "Speak more", confidence: "with confidence",
    supportive: "Supportive", atmosphere: "atmosphere",
    bookTrial: "Book a Free Trial Lesson →",
    chooseLanguage: "Choose your language",
    englishTagline: "Speak naturally and confidently",
    exploreEnglish: "Explore English →",
    whyTitle: "Why small groups work",
    why1: "More speaking time for everyone",
    realConversations: "Real conversations",
    why2: "Practical topics you care about",
    personalAttention: "Personal attention",
    why3: "Feedback and support from your teacher",
    friendlySpace: "Friendly space",
    why4: "Feel comfortable, speak freely",
    upcomingClubs: "Upcoming clubs",
    conversationClub: "Conversation Club",
    saturday: "Saturday", sunday: "Sunday", wednesday: "Wednesday",
    twoPlaces: "2 places left", threePlaces: "3 places left",
    joinClub: "Join This Club",
    scheduleNote: "All sessions are 60 minutes · 3–4 students per group · Price: €10 per session",
    aboutTitle: "About Emilia",
    aboutText: "Hi! I’m Emilia. I love languages, books and meaningful conversations. I create a friendly space where you can speak, make mistakes and grow with confidence.",
    nativeEnglish: "Native English speaker",
    publishedAuthor: "Published author — 3 children’s books",
    frenchSpanish: "French & Spanish fluency",
    stepGraduate: "STEP IT Academy graduate",
    fiveLanguages: "5 languages",
    teachingTeens: "Experience teaching teens & adults",
    ready: "Ready to start?",
    readyText: "Book your free trial lesson and let’s talk!",
    bookTrialShort: "Book Your Free Trial →",
    stayInTouch: "Let’s stay in touch",
    addNumber: "Add your number",
    footerTagline: "Small groups. Big conversations. Real progress.",
    bookingRequest: "Booking request",
    findGroup: "Let’s find the right group",
    name: "Name", clubLabel: "Club", level: "Current level",
    notSure: "Not sure", preferredTime: "Preferred day/time",
    message: "Message (optional)", sendRequest: "Send booking request",
    emailOpens: "Your email app will open with the request prepared."
  },
  ru: {
    home: "Главная", clubs: "Клубы", aboutEmilia: "Об Эмилии", contact: "Контакты",
    smallGroups: "Маленькие группы. Большой прогресс.",
    heroText: "Дружелюбные разговорные клубы английского, французского и испанского для подростков и взрослых.",
    perGroup: "в группе", speakMore: "Говорите больше", confidence: "и увереннее",
    supportive: "Дружелюбная", atmosphere: "атмосфера",
    bookTrial: "Записаться на бесплатное пробное →",
    chooseLanguage: "Выберите язык",
    englishTagline: "Говорите естественно и уверенно",
    exploreEnglish: "Выбрать английский →",
    whyTitle: "Почему работают маленькие группы",
    why1: "Больше времени говорить каждому",
    realConversations: "Живые разговоры",
    why2: "Практические темы, которые вам интересны",
    personalAttention: "Личное внимание",
    why3: "Обратная связь и поддержка ведущей",
    friendlySpace: "Комфортная атмосфера",
    why4: "Чувствуйте себя свободно и говорите",
    upcomingClubs: "Ближайшие клубы",
    conversationClub: "Разговорный клуб",
    saturday: "Суббота", sunday: "Воскресенье", wednesday: "Среда",
    twoPlaces: "Осталось 2 места", threePlaces: "Осталось 3 места",
    joinClub: "Присоединиться",
    scheduleNote: "Все занятия по 60 минут · 3–4 человека в группе · Цена: €10 за занятие",
    aboutTitle: "Об Эмилии",
    aboutText: "Привет! Я Эмилия. Я люблю языки, книги и содержательные разговоры. Я создаю дружелюбное пространство, где можно говорить, ошибаться и становиться увереннее.",
    nativeEnglish: "Английский — родной",
    publishedAuthor: "Автор 3 детских книг",
    frenchSpanish: "Свободный французский и испанский",
    stepGraduate: "Выпускница STEP IT Academy",
    fiveLanguages: "5 языков",
    teachingTeens: "Опыт занятий с подростками и взрослыми",
    ready: "Готовы начать?",
    readyText: "Запишитесь на бесплатное пробное занятие!",
    bookTrialShort: "Записаться бесплатно →",
    stayInTouch: "Оставайтесь на связи",
    addNumber: "Добавьте ваш номер",
    footerTagline: "Маленькие группы. Живые разговоры. Настоящий прогресс.",
    bookingRequest: "Заявка на запись",
    findGroup: "Подберём подходящую группу",
    name: "Имя", clubLabel: "Клуб", level: "Текущий уровень",
    notSure: "Не уверен(а)", preferredTime: "Удобный день и время",
    message: "Сообщение (необязательно)", sendRequest: "Отправить заявку",
    emailOpens: "Откроется ваша почтовая программа с подготовленной заявкой."
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
  document.getElementById("languageToggle").textContent = language === "en" ? "EN ▾" : "RU ▾";
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
