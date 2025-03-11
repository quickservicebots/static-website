// Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert(`Thank you, ${name}! We’ll get back to you at ${email}.`);
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: "smooth",
    });
  });
});
