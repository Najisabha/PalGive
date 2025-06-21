let language = 'ar';  // Default language is Arabic
let year = new Date().getFullYear();
const translations = {
  "ar": {
    // Navigation links
    "home": "الرئيسية",
    "what_we_do": "ماذا نفعل",
    "about_us": "من نحن",
    "contact_us": "اتصل بنا",
    "Donate_Now": "تبرع الآن",
    "email": "info@palgive.org",
    "phone": "+972 59-550-4022",
    "navbar_title": "PALGIVE",
    "About_the_Organization": "عن المنظمة",
    "Our_vision": "رؤيتنا",
    "Our_Mission": "مهمتنا",
    "License": "ترخيص",
    "Sponsors": "الرعاة",
    "Our_Team": "فريقنا",
    "Stories": "قصص",
    // Hero section
    "hero_section_h1": "مرحباً بكم في PALGIVE",
    "hero_section_a": "تبرع الآن",
    // What_do_we_do
    "What_do_we_do_h2": "ماذا نفعل؟",
    "What_do_we_do_p": "نحن نقدم منصة آمنة وموثوقة للتبرعات عبر الإنترنت، مما يضمن أن مساهماتك تحدث فرقًا حقيقيًا.",
    // stories_section
    "stories_section_h2": "قصصنا",
    "stories_section_p": "اكتشف كيف تساعد تبرعاتك في إحداث فرق في حياة الأطفال و المحتاجين.",
    // contact us section
    "contact_us_section_h2": "تواصل معنا",
    "contact_us_section_p": "إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، فلا تتردد في الاتصال بنا.",
    "name_label": "الاسم:",
    "email_label": "البريد الإلكتروني:",
    "message_label": "رسالة:",
    "submit_button": "إرسال",
    "contact_info_h5": "معلومات الاتصال",
    "contact_info_p": "لأي استفسارات، يرجى الاتصال بنا على البريد الإلكتروني أو رقم الهاتف التالي.",
    "contact_email": "البريد الإلكتروني: ",
    "contact_phone": "الهاتف: ",
    "contact_address": "العنوان: ",
    // Footer links
    "footer_link_1": "الرئيسية",
    "footer_link_2": "ماذا نفعل",
    "footer_link_3": "اتصل بنا",
    "footer_link_4": "عن المنظمة",
    "Follow_Us": "تابعنا",
    "Quick_Links": "روابط سريعة",
    "footer_h5" : "حول PALGIVE",
    "footer_p" : "منظمة غير ربحية تهدف إلى تعزيز العمل الخيري في فلسطين.",
    "copyright": ` © ${year} PalGive. جميع الحقوق محفوظة.` ,
  },
  "en": {
    // Navigation links
    "home": "Home",
    "what_we_do": "What We Do",
    "about_us": "About Us",
    "contact_us": "Contact Us",
    "Donate_Now": "Donate Now",
    "email": "info@palgive.org",
    "phone": "+972 59-550-4022",
    "navbar_title": "PALGIVE",
    "About_the_Organization": "About the Organization",
    "Our_vision": "Our Vision",
    "Our_Mission": "Our Mission",
    "License": "License",
    "Sponsors": "Sponsors",
    "Our_Team": "Our Team",
    "Stories": "Stories",
    // Hero section
    "hero_section_h1": "Welcome to PALGIVE",
    "hero_section_a": "Donate Now",
    // What_do_we_do
    "What_do_we_do_h2": "What We Do",
    "What_do_we_do_p": "We provide a secure and reliable online donation platform, ensuring your contributions make a real difference.",
    // stories_section
    "stories_section_h2": "Our Stories",
    "stories_section_p": "Discover how your donations are making a difference in the lives of children and those in need.",
    // contact us section
    "contact_us_section_h2": "Contact Us",
    "contact_us_section_p": "If you have any inquiries or need assistance, feel free to reach out to us.",
    "name_label": "Name:",
    "email_label": "Email:",
    "message_label": "Message:",
    "submit_button": "Submit",
    "contact_info_h5": "Contact Information",
    "contact_info_p": "For any inquiries, please contact us at the following email or phone number.",
    "contact_email": "Email: " ,
    "contact_phone": "Phone: ",
    "contact_address": "Address: ",
    // Footer links
    "footer_link_1": "Home",
    "footer_link_2": "What We Do",
    "footer_link_3": "Contact Us",
    "footer_link_4": "Contact Us",
    "Follow_Us": "Follow Us",
    "Quick_Links": "Quick Links",
    "footer_h5" : "About PALGIVE",
    "footer_p" : "A non-profit organization aimed at promoting charitable ",
    "copyright": ` © ${year} PalGive. All rights reserved.` ,
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
  // navigation links
  document.getElementById("home").textContent = translations[language].home;
  document.getElementById("what_we_do").textContent = translations[language].what_we_do;
  document.getElementById("about_us").textContent = translations[language].about_us;
  document.getElementById("contact_us").textContent = translations[language].contact_us;
  document.getElementById("Donate_Now").textContent = translations[language].Donate_Now;
  document.getElementById("About_the_Organization").textContent = translations[language].About_the_Organization;
  document.getElementById("Our_vision").textContent = translations[language].Our_vision;
  document.getElementById("Our_Mission").textContent = translations[language].Our_Mission;
  document.getElementById("License").textContent = translations[language].License;
  document.getElementById("Sponsors").textContent = translations[language].Sponsors;
  document.getElementById("Our_Team").textContent = translations[language].Our_Team;
  document.getElementById("Stories").textContent = translations[language].Stories;
    // Footer links
  document.getElementById("footer_link_1").textContent = translations[language].footer_link_1;
  document.getElementById("footer_link_2").textContent = translations[language].footer_link_2;
  document.getElementById("footer_link_3").textContent = translations[language].footer_link_3;
  document.getElementById("footer_link_4").textContent = translations[language].footer_link_4;
  document.getElementById("Follow_Us").textContent = translations[language].Follow_Us;
  document.getElementById("Quick_Links").textContent = translations[language].Quick_Links;
  document.getElementById("footer_h5").textContent = translations[language].footer_h5;
  document.getElementById("footer_p").textContent = translations[language].footer_p;
  document.getElementById("copyright").textContent = translations[language].copyright;
  // hero section
  document.getElementById("hero_section_h1").textContent = translations[language].hero_section_h1;
  document.getElementById("hero_section_a").textContent = translations[language].hero_section_a;
  // What do we do section
  document.getElementById("What_do_we_do_h2").textContent = translations[language].What_do_we_do_h2;
  document.getElementById("What_do_we_do_p").textContent = translations[language].What_do_we_do_p;
  // Stories section
  document.getElementById("stories_section_h2").textContent = translations[language].stories_section_h2;
  document.getElementById("stories_section_p").textContent = translations[language].stories_section_p;
  // contact us section
  document.getElementById("contact_us_section_h2").textContent = translations[language].contact_us_section_h2;
  document.getElementById("contact_us_section_p").textContent = translations[language].contact_us_section_p;
  document.getElementById("name_label").textContent = translations[language].name_label;
  document.getElementById("email_label").textContent = translations[language].email_label;
  document.getElementById("message_label").textContent = translations[language].message_label;
  document.getElementById("submit_button").textContent = translations[language].submit_button;
  document.getElementById("contact_info_h5").textContent = translations[language].contact_info_h5;
  document.getElementById("contact_info_p").textContent = translations[language].contact_info_p;
  document.getElementById("contact_email").textContent = translations[language].contact_email;
  document.getElementById("contact_phone").textContent = translations[language].contact_phone;
  document.getElementById("contact_address").textContent = translations[language].contact_address;

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
// copyright 2025 PalGive
// For more information, visit our website at https://palgive.org
