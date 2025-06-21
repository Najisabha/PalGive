let language = 'ar';  // Default language is Arabic
let year = new Date().getFullYear();

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
