
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
    people: "people per group", session: "conversation session", price: "per lesson", languages: "languages",
    chooseClub: "Choose your club", clubsTitle: "Simple conversation practice",
    clubsIntro: "No complicated levels or long courses. Just a small group, an interesting topic and real conversation.",
    englishText: "Talk about travel, culture, films, study and everyday life.",
    frenchText: "Practice natural French through culture, travel and daily topics.",
    spanishText: "Speak about travel, food, films, people and everyday situations.",
    smallGroups: "Small groups", realTopics: "Real-life topics",
    friendlyFeedback: "Friendly feedback", bookPlace: "Book a place",
    aboutEyebrow: "About Emilia", aboutTitle: "A multilingual conversation host",
    aboutText1: "English is Emilia\'s native language. She speaks French and Spanish at a high level and also speaks Russian and German.",
    aboutText2: "She has published children's books and has strong digital skills. Her goal is to create a friendly place where people can speak naturally and become more confident.",
    ctaTitle: "Start with one conversation.", ctaText: "Choose a language and book a trial session.",
    footerText: "Conversation clubs in English, French and Spanish.",
    formEyebrow: "Booking request", formTitle: "Book your place",
    nameLabel: "Name", clubLabel: "Language",
    messageLabel: "Message (optional)",
    sendRequest: "Send booking request",
    formNote: "Your email app will open with the request prepared."
  },
  fr: {
    navClubs:"Clubs",navAbout:"À propos",eyebrow:"Clubs de conversation en ligne",heroTitle:"Parlez davantage. Gagnez en confiance.",heroText:"Clubs de conversation en anglais, français et espagnol. Petits groupes de 3 à 4 personnes.",viewClubs:"Voir les clubs",trialButton:"Réserver un essai",people:"personnes par groupe",session:"séance de conversation",price:"par séance",languages:"langues",chooseClub:"Choisissez votre club",clubsTitle:"Pratique orale simple",clubsIntro:"Pas de niveaux compliqués. Un petit groupe, un sujet intéressant et une vraie conversation.",englishText:"Parlez de voyages, culture, films, études et vie quotidienne.",frenchText:"Pratiquez un français naturel autour de la culture et du voyage.",spanishText:"Parlez de voyages, nourriture, films et situations quotidiennes.",smallGroups:"Petits groupes",realTopics:"Sujets de la vie réelle",friendlyFeedback:"Retour bienveillant",bookPlace:"Réserver une place",aboutEyebrow:"À propos d’Emilia",aboutTitle:"Une animatrice multilingue",aboutText1: "L’anglais est la langue maternelle d’Emilia. Elle parle français et espagnol à un niveau élevé, et parle également russe et allemand.",aboutText2:"Elle a publié des livres pour enfants et crée un espace convivial pour parler naturellement.",ctaTitle:"Commencez par une conversation.",ctaText:"Choisissez une langue et réservez une séance d’essai.",footerText:"Clubs de conversation en anglais, français et espagnol.",formEyebrow:"Demande d’inscription",formTitle:"Réservez votre place",nameLabel:"Nom",clubLabel:"Langue",messageLabel:"Message (facultatif)",sendRequest:"Envoyer",formNote:"Votre application e-mail s’ouvrira avec la demande préparée."
  },
  es: {
    navClubs:"Clubes",navAbout:"Sobre Emilia",eyebrow:"Clubes de conversación online",heroTitle:"Habla más. Gana confianza.",heroText:"Clubes de conversación en inglés, francés y español. Grupos pequeños de 3 a 4 personas.",viewClubs:"Ver clubes",trialButton:"Reservar prueba",people:"personas por grupo",session:"sesión de conversación",price:"por clase",languages:"idiomas",chooseClub:"Elige tu club",clubsTitle:"Práctica oral sencilla",clubsIntro:"Sin niveles complicados. Un grupo pequeño, un tema interesante y conversación real.",englishText:"Habla sobre viajes, cultura, películas, estudios y vida diaria.",frenchText:"Practica francés natural con cultura, viajes y temas cotidianos.",spanishText:"Habla sobre viajes, comida, películas y situaciones reales.",smallGroups:"Grupos pequeños",realTopics:"Temas de la vida real",friendlyFeedback:"Comentarios amables",bookPlace:"Reservar plaza",aboutEyebrow:"Sobre Emilia",aboutTitle:"Una anfitriona multilingüe",aboutText1: "El inglés es la lengua materna de Emilia. Habla francés y español a un nivel alto, y también habla ruso y alemán.",aboutText2:"Ha publicado libros infantiles y crea un espacio cómodo para hablar con naturalidad.",ctaTitle:"Empieza con una conversación.",ctaText:"Elige un idioma y reserva una sesión de prueba.",footerText:"Clubes de conversación en inglés, francés y español.",formEyebrow:"Solicitud de inscripción",formTitle:"Reserva tu plaza",nameLabel:"Nombre",clubLabel:"Idioma",messageLabel:"Mensaje (opcional)",sendRequest:"Enviar",formNote:"Se abrirá tu aplicación de correo con la solicitud preparada."
  }
};

let currentLanguage = localStorage.getItem("talkcircleLanguage") || "en";
if (!["en", "fr", "es"].includes(currentLanguage)) currentLanguage = "en";
const dialog = document.getElementById("bookingDialog");
const languageMenu = document.getElementById("languageMenu");
const clubSelect = document.getElementById("club");

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  document.getElementById("languageToggle").textContent = language.toUpperCase() + " ▾";
  localStorage.setItem("talkcircleLanguage", language);
}

document.getElementById("languageToggle").addEventListener("click", () => { languageMenu.hidden = !languageMenu.hidden; });
document.querySelectorAll("[data-language]").forEach((button)=>button.addEventListener("click",()=>{applyLanguage(button.dataset.language);languageMenu.hidden=true;}));
document.addEventListener("click",(event)=>{if(!event.target.closest(".language-picker")) languageMenu.hidden=true;});

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
  const subject = encodeURIComponent(`EmiliaTalk booking: ${data.get("club")}`);
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
