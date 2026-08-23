document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  document.querySelectorAll("#whatsapp-btn, #whatsapp-contact-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const phone = "918608603034";
      const message = encodeURIComponent("Hi, I need home appliance service. Please help me.");
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
  });

  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const mobile = document.getElementById("mobile").value;
      const appliance = document.getElementById("appliance").value;
      const problem = document.getElementById("problem").value;

      if (!/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return;
      }

      alert(`Thank you, ${name}!\n\nYour service request for ${appliance} has been received.\n\nWe will contact you shortly on ${mobile}.\n\nProblem: ${problem}`);
      bookingForm.reset();
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active-link");
    }
  });

  /* Final, page-specific reset for the homepage Services section.
     This intentionally overrides accidental circular/positioned styles. */
  const servicesHeading = Array.from(document.querySelectorAll("h2")).find(
    (el) => el.textContent.trim() === "Our Services"
  );
  const servicesSection = servicesHeading ? servicesHeading.closest("section") : null;
  const servicesGrid = servicesSection ? servicesSection.querySelector(".services-grid") : null;

  if (servicesSection && servicesGrid) {
    servicesSection.id = "homepage-services";

    const style = document.createElement("style");
    style.id = "homepage-services-final-fix";
    style.textContent = `
      body {
        overflow-x: hidden !important;
      }

      body::before,
      body::after,
      #homepage-services::before,
      #homepage-services::after {
        content: none !important;
        display: none !important;
        background: none !important;
        border: 0 !important;
        border-radius: 0 !important;
        clip-path: none !important;
        mask: none !important;
      }

      #homepage-services {
        position: relative !important;
        display: block !important;
        width: 100% !important;
        max-width: none !important;
        height: auto !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 4rem 0 !important;
        overflow: visible !important;
        border-radius: 0 !important;
        clip-path: none !important;
        transform: none !important;
        background: #ffffff !important;
        background-image: none !important;
        box-shadow: none !important;
      }

      #homepage-services > div {
        position: relative !important;
        width: 100% !important;
        max-width: 100% !important;
        margin-left: auto !important;
        margin-right: auto !important;
        transform: none !important;
      }

      #homepage-services .services-grid {
        position: relative !important;
        display: grid !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        gap: 2rem !important;
        align-items: stretch !important;
        justify-items: stretch !important;
        transform: none !important;
        border-radius: 0 !important;
        clip-path: none !important;
      }

      #homepage-services .services-grid > div {
        position: relative !important;
        display: block !important;
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        height: auto !important;
        margin: 0 !important;
        transform: none !important;
        border-radius: 0.5rem !important;
        box-sizing: border-box !important;
      }

      @media (min-width: 768px) {
        #homepage-services .services-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
});
