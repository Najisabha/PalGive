document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("R4PqOyV2-pcUFYYkB");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_wig0jgx", "template_xt55wgm", this)
      .then(function () {
        alert("✅ تم إرسال الرسالة بنجاح!");
      }, function (error) {
        alert("❌ حدث خطأ أثناء الإرسال: " + JSON.stringify(error));
      });
  });
});