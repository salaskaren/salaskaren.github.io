// Animaciones suaves al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".card, .about p, .skills span, .hero h2, .hero p, .hero .btn");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
