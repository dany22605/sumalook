
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Animación de las barras del hamburger
    hamburger.classList.toggle('active');
  });

  document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
  
    const response = await fetch("https://formspree.io/f/mpqqkqzd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    if (response.ok) {
      alert("Mensaje enviado correctamente");
      this.reset();
    } else {
      alert("Error al enviar el formulario");
    }
  });