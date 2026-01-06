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
      // Replace with actual WhatsApp number (remove spaces and add country code)
      const phoneNumber = "918608603034"; // Replace XXXXXXXXXX with actual number
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

      // Validate mobile number
      if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return;
      }

      // Show success message
      alert(
        `Thank you, ${name}!\n\nYour service request for ${appliance} has been received.\n\nWe will contact you shortly on ${mobile}.\n\nProblem: ${problem}`
      );

      // Reset form
      bookingForm.reset();

      // Optionally, redirect to WhatsApp
      const phoneNumber = "918608603034"; // Replace with actual number
      const whatsappMessage = encodeURIComponent(
        `New Service Booking:\nName: ${name}\nMobile: ${mobile}\nAppliance: ${appliance}\nProblem: ${problem}`
      );

      // Uncomment to auto-redirect to WhatsApp
      // setTimeout(() => {
      //     window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
      // }, 1000);
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
});
