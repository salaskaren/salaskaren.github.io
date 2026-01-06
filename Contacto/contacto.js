const videoKaren = document.getElementById("videoKaren");
const sorpresaVideo = document.getElementById("sorpresaVideo");
const contactSection = document.getElementById("contactSection");

// contacto cuando el video termina y achicar video
videoKaren.onended = () => {
  contactSection.style.transition = "opacity 1s ease";
  contactSection.style.opacity = "1";

  sorpresaVideo.style.transition = "all 1s ease";
  sorpresaVideo.style.width = "120px";
  sorpresaVideo.style.height = "120px";
  sorpresaVideo.style.borderRadius = "50%";
  sorpresaVideo.style.position = "fixed";
  sorpresaVideo.style.bottom = "20px";
  sorpresaVideo.style.right = "20px";
  sorpresaVideo.style.zIndex = "999";
  sorpresaVideo.querySelector("p").style.display = "none";

  const vid = sorpresaVideo.querySelector("video");
  vid.loop = true;
};

// Boton de enviar con mensaje de agradecimiento
const sendBtn = document.getElementById("sendBtn");
const thankYouMsg = document.getElementById("thankYouMsg");

sendBtn.addEventListener("click", () => {
  //  mensaje
  thankYouMsg.style.display = "block";
  sendBtn.style.transform = "scale(1.05)";
  setTimeout(() => { sendBtn.style.transform = "scale(1)"; }, 200);

  // Ocultar mensaje después de 4 segundos
  setTimeout(() => {
    thankYouMsg.style.display = "none";
  }, 4000);

  // Limpiar formulario
  document.getElementById("contactForm").reset();
});
