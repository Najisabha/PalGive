let language = 'ar';  // Default language is Arabic
const translations = {
  "ar": {
    "home": "الرئيسية",
    "what_we_do": "ماذا نفعل",
    "about_us": "من نحن",
    "contact_us": "اتصل بنا",
    "Donate_Now": "تبرع الآن",
    "email": "info@palgive.org",
    "phone": "+972 59-550-4022",
    "navbar_title": "PALGIVE",
    "Reports_&_Data": "تقارير وبيانات",
    "About_the_Organization": "عن المنظمة",
    "Who_We_Are": "من نحن",
    "Our_vision": "رؤيتنا",
    "Our_Mission": "مهمتنا",
    "License": "ترخيص",
    "Sponsors": "الرعاة",
    "Our_Team": "فريقنا",
    "Stories": "قصص",
    "hero_section_h1": "مرحباً بكم في PALGIVE",
    "hero_section_p": "منصتك الموثوقة للتبرعات الآمنة والموثوقة.",
    "hero_section_a": "تبرع الآن"
  },
  "en": {
    "home": "Home",
    "what_we_do": "What We Do",
    "about_us": "About Us",
    "contact_us": "Contact Us",
    "Donate_Now": "Donate Now",
    "email": "info@palgive.org",
    "phone": "+972 59-550-4022",
    "navbar_title": "PALGIVE",
    "Reports_&_Data": "Reports & Data",
    "About_the_Organization": "About the Organization",
    "Who_We_Are": "Who We Are",
    "Our_vision": "Our Vision",
    "Our_Mission": "Our Mission",
    "License": "License",
    "Sponsors": "Sponsors",
    "Our_Team": "Our Team",
    "Stories": "Stories",
    "hero_section_h1": "Welcome to PALGIVE",
    "hero_section_p": "Your trusted platform for secure and reliable donations.",
    "hero_section_a": "Donate Now"
  }
};

// Function to change language
function changeLanguage(lang) {
    language = lang;
    if (lang === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      document.getElementById('languageBtnText').textContent = 'AR';
    } else if (lang === 'en') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      document.getElementById('languageBtnText').textContent = 'EN';
    }
    updateTexts();        // Update text content
    updateDirection();    // Update direction (RTL or LTR)
    updateButtonText();   // Update button text (AR or EN)
}

// Update all texts based on the selected language
function updateTexts() {
  console.log('تحديث النصوص للغة: ' + language);  // Debugging line
  document.getElementById("home").textContent = translations[language].home;
  document.getElementById("what_we_do").textContent = translations[language].what_we_do;
  document.getElementById("about_us").textContent = translations[language].about_us;  document.getElementById("contact_us").textContent = translations[language].contact_us;
  document.getElementById("Donate_Now").textContent = translations[language].Donate_Now;
  document.getElementById("Reports_&_Data").textContent = translations[language]["Reports_&_Data"];
  document.getElementById("About_the_Organization").textContent = translations[language].About_the_Organization;
  document.getElementById("Who_We_Are").textContent = translations[language].Who_We_Are;
  document.getElementById("Our_vision").textContent = translations[language].Our_vision;
  document.getElementById("Our_Mission").textContent = translations[language]["Our_Mission"];
  document.getElementById("License").textContent = translations[language].License;
  document.getElementById("Sponsors").textContent = translations[language].Sponsors;
  document.getElementById("Our_Team").textContent = translations[language].Our_Team;
  document.getElementById("Stories").textContent = translations[language].Stories;
  document.getElementById("hero_section_h1").textContent = translations[language].hero_section_h1;
  document.getElementById("hero_section_p").textContent = translations[language].hero_section_p;
  document.getElementById("hero_section_a").textContent = translations[language].hero_section_a;
  
}

// Update page direction based on the selected language
function updateDirection() {
  if (language === 'ar') {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }
}

// Update the language button text in the dropdown
function updateButtonText() {
  // Ensure the button's text is updated properly when language changes
  const languageBtn = document.getElementById("languageBtnText");
  if (languageBtn) {
    languageBtn.textContent = (language === 'ar') ? 'AR' : 'EN';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateTexts();
  updateDirection();
  updateButtonText(); // Make sure to update the button text when the page loads
});