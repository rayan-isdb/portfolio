// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  var btn = document.getElementById("send_message");

  if (btn) {
    btn.addEventListener("click", function () {
      sendWhatsApp();
    });
  }
});

// GLOBAL function (important)
window.sendWhatsApp = function () {

  var name    = document.getElementById("name").value.trim();
  var email   = document.getElementById("email").value.trim();
  var phone   = document.getElementById("phone").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || phone === "" || message === "") {
    document.querySelector(".empty_notice").style.display = "block";
    return;
  }

  document.querySelector(".empty_notice").style.display = "none";

  var whatsappNumber = "8801878228713";

  var text =
    "📩 New Portfolio Contact\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone + "\n" +
    "Subject: " + subject + "\n\n" +
    "Message:\n" + message;

  var url =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(text);

  // Open WhatsApp
  window.location.href = url;
};
