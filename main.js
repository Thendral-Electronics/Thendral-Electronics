// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // WhatsApp Button Handler
  const whatsappButtons = document.querySelectorAll(
    "#whatsapp-btn, #whatsapp-contact-btn"
  );
  whatsappButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const phoneNumber = "918608603034";
      const message = encodeURIComponent(
        "Hi, I need home appliance service. Please help me."
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    });
  });

  // Form Submission Handler
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const mobile = document.getElementById("mobile").value;
      const appliance = document.getElementById("appliance").value;
      const problem = document.getElementById("problem").value;

      if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return;
      }

      alert(
        `Thank you, ${name}!\n\nYour service request for ${appliance} has been received.\n\nWe will contact you shortly on ${mobile}.\n\nProblem: ${problem}`
      );

      bookingForm.reset();

      const phoneNumber = "918608603034";
      const whatsappMessage = encodeURIComponent(
        `New Service Booking:\nName: ${name}\nMobile: ${mobile}\nAppliance: ${appliance}\nProblem: ${problem}`
      );
    });
  }

  // Active Link Highlighting based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active-link");
    } else if (currentPage === "" && linkPage === "index.html") {
      link.classList.add("active-link");
    }
  });

  // Services layout protection.
  // Keeps the service cards in a real responsive grid even if another
  // stylesheet or cached Tailwind rule interferes with the layout.
  const servicesGrid = document.querySelector(".services-grid");
  if (servicesGrid) {
    const servicesLayoutStyle = document.createElement("style");
    servicesLayoutStyle.id = "services-layout-fix";
    servicesLayoutStyle.textContent = `
      .services-grid {
        display: grid !important;
        width: 100% !important;
        max-width: 100% !important;
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        gap: 2rem !important;
        align-items: stretch !important;
      }

      .services-grid > * {
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
      }

      .services-grid > * > * {
        max-width: 100% !important;
        box-sizing: border-box !important;
      }

      @media (min-width: 768px) {
        .services-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }

      .services-grid + * {
        clear: both;
      }
    `;
    document.head.appendChild(servicesLayoutStyle);
  }
});
