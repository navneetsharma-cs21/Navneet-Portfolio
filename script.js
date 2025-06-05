document.addEventListener("DOMContentLoaded", () => {
  const texts = [{ id: "element", text: "Web Developer !", speed: 100 }];

  function typewriterEffect(id, text, speed, index = 0) {
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`Element with id "${id}" not found.`);
      return;
    }
    if (index < text.length) {
      el.innerHTML += text.charAt(index);
      setTimeout(() => typewriterEffect(id, text, speed, index + 1), speed);
    }
  }

  texts.forEach(({ id, text, speed }) => {
    typewriterEffect(id, text, speed);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sectionMap = {
    Home: ".firstSection",
    About: ".fourthsection",
    Skills: ".secondSection",
    Projects: ".thirdsection",
    "Contact Me": ".contactSection",
  };

  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      const targetSection = document.querySelector(
        sectionMap[event.target.textContent.trim()]
      );
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.1)"; // Zoom in
    card.style.transition = "transform 0.3s ease-in-out";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)"; // Reset zoom
  });
});
