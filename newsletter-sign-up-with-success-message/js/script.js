/**
 * Newsletter Sign-up Form JavaScript
 *
 * This script handles the newsletter form validation and success message display.
 * It includes:
 * - Email validation
 * - Form submission handling
 * - Toggle between form and success message
 * - Dismiss button functionality
 * - Accessibility features
 */

(function () {
  "use strict";

  // DOM Elements
  const newsletterSection = document.querySelector(".newsletter");
  const successSection = document.querySelector(".success");
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".form__error-message");
  const confirmedEmail = document.getElementById("confirmed-email");
  const dismissButton = document.getElementById("dismiss-button");

  /**
   * Validates email using regex pattern
   * @param {string} email - Email address to validate
   * @returns {boolean} - True if email is valid
   */
  function isValidEmail(email) {
    // RFC 5322 compliant email regex
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  }

  /**
   * Shows error message and styles for invalid email
   * @param {string} message - Error message to display
   */
  function showError(message) {
    form.classList.add("form--error");
    errorMessage.textContent = message;
    emailInput.setAttribute("aria-invalid", "true");
    document.getElementById("email-error").textContent = message;
  }

  /**
   * Clears error messages and styles
   */
  function clearError() {
    form.classList.remove("form--error");
    errorMessage.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
    document.getElementById("email-error").textContent = "";
  }

  /**
   * Shows success message and hides form
   */
  function showSuccessMessage() {
    newsletterSection.setAttribute("hidden", "");
    successSection.removeAttribute("hidden");
    successSection.classList.add("active");
    // Set focus on dismiss button for better accessibility
    dismissButton.focus();
  }

  /**
   * Shows newsletter form and hides success message
   */
  function showNewsletterForm() {
    successSection.setAttribute("hidden", "");
    successSection.classList.remove("active");
    newsletterSection.removeAttribute("hidden");
    // Set focus back to email input for better accessibility
    emailInput.focus();
  }

  // Event Listeners

  /**
   * Handles form submission
   * @param {Event} e - Form submit event
   */
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
      showError("Email cannot be empty");
      return;
    }

    if (!isValidEmail(email)) {
      showError("Valid email required");
      return;
    }

    // If valid, set the email in success message and show it
    confirmedEmail.textContent = email;
    showSuccessMessage();

    // Clear form for next time
    form.reset();
    clearError();
  });

  /**
   * Handles input validation on change/blur
   */
  emailInput.addEventListener("input", function () {
    if (
      emailInput.value.trim() !== "" &&
      form.classList.contains("form--error")
    ) {
      clearError();
    }
  });

  /**
   * Handles dismiss button click to show the form again
   */
  dismissButton.addEventListener("click", showNewsletterForm);

  // Initialize form state
  clearError();
})();
