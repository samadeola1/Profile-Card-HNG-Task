document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-btn");
  const pages = {
    "profile-btn": document.getElementById("profile-page"),
    "about-btn": document.getElementById("about-page"),
    "contact-btn": document.getElementById("contact-page"),
  };
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const timestampElement = document.getElementById("user-time");

  const handleNavigation = (pageId) => {
    navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    Object.values(pages).forEach((page) => {
      if (page) {
        page.classList.add("hidden");
        page.classList.remove("block");
      }
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.remove("hidden");
      targetPage.classList.add("block");
    }

    const activeBtn = document.querySelector(
      `.nav-btn[data-target="${pageId}"]`
    );
    if (activeBtn) {
      activeBtn.classList.add("active");
    }
  };

const updateTimestamp = () => {
  if (timestampElement) {
    const now = new Date();
    // Display current time in milliseconds
    timestampElement.textContent = now.getTime(); // or Date.now()
  }
};
  const validateField = (input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    let isValid = true;

    if (input.required && input.value.trim() === "") {
      isValid = false;
      errorElement.textContent = `${input.placeholder} is required.`;
    } else if (input.id === "email" && input.value.trim() !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value.trim())) {
        isValid = false;
        errorElement.textContent = "Please enter a valid email address.";
      }
    } else if (input.id === "message" && input.value.trim() !== "") {
      if (input.value.trim().length < 10) {
        isValid = false;
        errorElement.textContent = "Message must be at least 10 characters.";
      } else {
        errorElement.textContent = "";
      }
    } else {
      errorElement.textContent = "";
    }

    if (isValid) {
      input.classList.remove("input-error");
    } else {
      input.classList.add("input-error");
    }

    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isMessageValid = validateField(messageInput);

    if (isNameValid && isEmailValid && isMessageValid) {
      const submitBtn = document.querySelector(".form-submit-btn");
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        if (successMessage) {
          successMessage.classList.remove("hidden");
        }
        contactForm.reset();

        submitBtn.textContent = "Message Sent!";

        setTimeout(() => {
          submitBtn.textContent = "Send Message";
          submitBtn.disabled = false;
          if (successMessage) {
            successMessage.classList.add("hidden");
          }
        }, 3000);
      }, 1000);
    }
  };

  const initApp = () => {
    navButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const targetPage = e.currentTarget.getAttribute("data-target");
        if (targetPage) {
          handleNavigation(targetPage);
        }
      });
    });

    if (contactForm) {
      contactForm.addEventListener("submit", handleFormSubmit);

      document
        .querySelectorAll(".form-input, .form-textarea")
        .forEach((input) => {
          input.addEventListener("blur", () => validateField(input));
        });
    }

    handleNavigation("profile-page");
    updateTimestamp();
  };

  initApp();
});
