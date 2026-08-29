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

  // Emergency layout fix for the Services page.
  // The live page has previously picked up an oversized decorative/absolute
  // element that pushes the service content into a narrow column. Remove
  // that class of layout interference and force normal document flow.
  if (currentPage === "services.html") {
    const style = document.createElement("style");
    style.id = "services-page-emergency-fix";
    style.textContent = `
      html, body {
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
      }

      body {
        margin: 0 !important;
        background: #f8fafc !important;
      }

      /* Remove any oversized decorative layer causing the white oval. */
      body .absolute {
        display: none !important;
      }

      /* Do not allow transforms/clipping to distort the service content. */
      body section,
      body section > div,
      body section ul,
      body section li {
        transform: none !important;
        clip-path: none !important;
        mask: none !important;
        -webkit-mask: none !important;
      }

      body section {
        position: relative !important;
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        overflow: visible !important;
      }

      body section > div {
        width: auto !important;
        max-width: 1024px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        box-sizing: border-box !important;
      }

      /* Ensure the service feature lists remain real responsive grids. */
      body section ul {
        display: grid !important;
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        gap: 0.75rem !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }

      @media (min-width: 768px) {
        body section ul {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }

      body section li {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }
});
