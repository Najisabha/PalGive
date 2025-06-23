let translations_our_team = {
    "ar": {
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
        "programs": "قصص",
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
        "programs": "programs",
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
}
function updateTexts() {
    
    console.log('تحديث النصوص للغة: ' + language);  // Debugging line
    // Update navigation links
        // navigation links
    document.getElementById("home").textContent = translations_our_team[language].home;
    document.getElementById("what_we_do").textContent = translations_our_team[language].what_we_do;
    document.getElementById("about_us").textContent = translations_our_team[language].about_us;
    document.getElementById("contact_us").textContent = translations_our_team[language].contact_us;
    document.getElementById("Donate_Now").textContent = translations_our_team[language].Donate_Now;
    document.getElementById("About_the_Organization").textContent = translations_our_team[language].About_the_Organization;
    document.getElementById("Our_vision").textContent = translations_our_team[language].Our_vision;
    document.getElementById("Our_Mission").textContent = translations_our_team[language].Our_Mission;
    document.getElementById("License").textContent = translations_our_team[language].License;
    document.getElementById("Sponsors").textContent = translations_our_team[language].Sponsors;
    document.getElementById("Our_Team").textContent = translations_our_team[language].Our_Team;
    document.getElementById("programs").textContent = translations_our_team[language].programs;
    // Footer links
    document.getElementById("footer_link_1").textContent = translations_our_team[language].footer_link_1;
    document.getElementById("footer_link_2").textContent = translations_our_team[language].footer_link_2;
    document.getElementById("footer_link_3").textContent = translations_our_team[language].footer_link_3;
    document.getElementById("footer_link_4").textContent = translations_our_team[language].footer_link_4;
    document.getElementById("Follow_Us").textContent = translations_our_team[language].Follow_Us;
    document.getElementById("Quick_Links").textContent = translations_our_team[language].Quick_Links;
    document.getElementById("footer_h5").textContent = translations_our_team[language].footer_h5;
    document.getElementById("footer_p").textContent = translations_our_team[language].footer_p;
    document.getElementById("copyright").textContent = translations_our_team[language].copyright;
    // 
    

}
