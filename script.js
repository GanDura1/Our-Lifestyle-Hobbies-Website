// script.js - JavaScript functionalities for Lifestyle & Hobbies Website

document.addEventListener("DOMContentLoaded", function () {
  // ========== MOBILE NAV DROPDOWN / TOGGLE ==========
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show-menu");
    });
  }

  // ========== GALLERY SLIDESHOW FUNCTIONALITY ==========
  const gallerySlides = document.querySelectorAll(".gallery-slide");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");

  if (gallerySlides.length > 0 && prevBtn && nextBtn) {
    let currentSlide = 0;

    function showSlide(index) {
      // Hide all slides
      gallerySlides.forEach(slide => {
        slide.classList.remove("active");
      });
      
      // Show the current slide
      gallerySlides[index].classList.add("active");
    }

    // Initialize first slide
    showSlide(currentSlide);

    // Previous button event
    prevBtn.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
      showSlide(currentSlide);
    });

    // Next button event
    nextBtn.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % gallerySlides.length;
      showSlide(currentSlide);
    });

    // Optional: Auto-advance slides every 5 seconds
    setInterval(function() {
      currentSlide = (currentSlide + 1) % gallerySlides.length;
      showSlide(currentSlide);
    }, 5000);
  }

  // ========== HOBBY SELECTOR → SCROLL TO SECTION ==========
  const hobbySelect = document.getElementById("hobbySelect");
  if (hobbySelect) {
    hobbySelect.addEventListener("change", function () {
      const value = this.value;
      if (!value) return;
      const section = document.getElementById(value);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  // ========== PER-IMAGE LIKE BUTTONS ==========
  document.querySelectorAll(".img-like-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const countSpan = this.querySelector(".img-like-count");
      let count = parseInt(countSpan.textContent) || 0;
      countSpan.textContent = count + 1;
    });
  });

  // ========== CONTACT FORM VALIDATION ==========
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.length < 3) {
        alert("Please enter a valid name (minimum 3 characters).");
        return;
      }
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (subject.length < 5) {
        alert("Subject must be at least 5 characters.");
        return;
      }
      if (message.length < 10) {
        alert("Message must be at least 10 characters.");
        return;
      }

      alert("Thank you! Your message has been submitted successfully.");
      contactForm.reset();
    });
  }

  // ========== SIMPLE EVENT CALENDAR ==========
  const eventDate = document.getElementById("eventDate");
  const eventResult = document.getElementById("eventResult");

  if (eventDate && eventResult) {
    const events = {
      "2025-11-15": "Photography workshop - Studio Lighting Basics",
      "2025-11-20": "Hiking trip at Bukit Gasing",
      "2025-11-25": "Online gaming tournament - Valorant Squad",
      "2025-12-01": "Music jamming session - Acoustic Night"
    };

    eventDate.addEventListener("change", function () {
      const selected = this.value;
      if (!selected) {
        eventResult.textContent = "";
        return;
      }

      if (events[selected]) {
        eventResult.textContent = events[selected];
      } else {
        eventResult.textContent = "No event scheduled on this date. Plan your own hobby day!";
      }
    });
  }
});