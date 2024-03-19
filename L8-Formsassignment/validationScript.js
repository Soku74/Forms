document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");
  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";
  errorDiv.style.marginTop = "5px";
  form.appendChild(errorDiv);

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Regular expression for alphanumeric input
      const alphanumericRegex = /^[a-zA-Z/s]+$/;

      // Retrieve the input value
      const inputValue = inputField.value.trim();

      // Check if the input value matches the alphanumeric regex
      if (!alphanumericRegex.test(inputValue)) {
          errorDiv.textContent = "Please enter only alphanumeric characters with no spaces.";
      } else {
          errorDiv.textContent = ""; // Clear previous error message
          // Submit the form if the input is valid
          form.submit();
          // Display a confirmation message
          alert("Form submitted successfully!");
      }
  });
});