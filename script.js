// Initialize EmailJS
emailjs.init("zs3Pv5AYQPZ0CmoP5");

// Get form and input fields
const form = document.getElementById("create-account-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const messageInput = document.getElementById("message");
const agreeCheckbox = document.getElementById("agree"); 

// Add event listener to form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate form fields
    let isValid = true;
    if (nameInput.value === "") {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("name-error").innerHTML = "Please enter your name";
        document.getElementById("name-error").classList.add("show");
        isValid = false;
        
    } else {
        document.getElementById("name-error").classList.remove("show");
    }

    if (emailInput.value === "") {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("email-error").innerHTML = "Please enter your email";
        document.getElementById("email-error").classList.add("show");
        isValid = false;
    } else {
        document.getElementById("email-error").classList.remove("show");
    }

    if (addressInput.value === "") {
        document.getElementById("address").style.border = "1px solid red";
        document.getElementById("address-error").innerHTML = "Please enter your address";
        document.getElementById("address-error").classList.add("show");
        isValid = false;
    } else {
        document.getElementById("address-error").classList.remove("show");
    }

    if (messageInput.value === "") {
        document.getElementById("message").style.border = "1px solid red";
        document.getElementById("message-error").innerHTML = "Please enter your message";
        document.getElementById("message-error").classList.add("show");
        isValid = false;
    } else {
        document.getElementById("message-error").classList.remove("show");
    }
    if (!agreeCheckbox.checked) {
        document.getElementById("agree-error").innerHTML = "Please agree to the terms";
        document.getElementById("agree-error").classList.add("show");
        isValid = false;
      } else {
        
        document.getElementById("agree-error").classList.remove("show");
      }

    // Send form data to email if valid
    if (isValid) {
        const templateParams = {
            from_name: nameInput.value,
            from_email: emailInput.value,
            from_address: addressInput.value,
            message: messageInput.value,
        };

        emailjs.send("service_i9rwjdm", "template_z9ladb4", templateParams)
            .then((response) => {
                console.log("Email sent successfully:", response);
                // Reset form fields
                nameInput.value = "";
                emailInput.value = "";
                addressInput.value = "";
                messageInput.value = "";
                agreeCheckbox.checked =false;
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    }
});

// Add event listeners to input fields
nameInput.addEventListener("input", () => {
    if (nameInput.value !== "") {
      document.getElementById("name").style.border = ""; // Reset border color to original
      document.getElementById("name-error").classList.remove("show");
    }
  });
  
  emailInput.addEventListener("input", () => {
    if (emailInput.value !== "") {
      document.getElementById("email").style.border = ""; // Reset border color to original
      document.getElementById("email-error").classList.remove("show");
    }
  });
  
  addressInput.addEventListener("input", () => {
    if (addressInput.value !== "") {
      document.getElementById("address").style.border = ""; // Reset border color to original
      document.getElementById("address-error").classList.remove("show");
    }
  });
  
  messageInput.addEventListener("input", () => {
    if (messageInput.value !== "") {
      document.getElementById("message").style.border = ""; // Reset border color to original
      document.getElementById("message-error").classList.remove("show");
    }
  });
  
  agreeCheckbox.addEventListener("click", () => {
    if (agreeCheckbox.checked) {
      document.getElementById("agree-error").innerHTML = ""; // Remove error message
      document.getElementById("agree-error").classList.remove("show");
    }
  });
  




