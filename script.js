const form = document.getElementById("verificationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const option = document.getElementById("option").value;
    const code = document.getElementById("code").value.trim();

    const message = document.getElementById("message");


    // Fixed codes
    const codes = {
        "1": "4231",
        "2": "5678"
    };


    // Reset message
    message.className = "";
    message.textContent = "";


    // Option not selected
    if (!option) {

        message.textContent = "Please select an option.";
        message.classList.add("error");

        return;
    }


    // Code empty
    if (!code) {

        message.textContent = "Please enter your verification code.";
        message.classList.add("error");

        return;
    }


    // Check code
    if (codes[option] === code) {

        // Open Page 2
        window.location.href = "result.html";

    } else {

        message.textContent =
            "The verification code you entered is incorrect. Please check your code and try again.";

        message.classList.add("error");

    }

});