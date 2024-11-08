document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".home-left", {
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%", 
      toggleActions: "play none none none",
    },
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".home-right", {
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
  });
});

document.getElementById("orderButton").addEventListener("click", function () {
  window.location.href = "your-order-page-link.html"; // Replace with your actual order page link
});

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(
    `Thanks, ${name}! Your message has been sent. We'll get back to you soon.`
  );

 
  document.getElementById("contact-form").reset();
}
