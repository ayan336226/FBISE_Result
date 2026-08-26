const form = document.getElementById("verificationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const option = document.getElementById("option").value;
    const code = document.getElementById("code").value.trim();

    const message = document.getElementById("message");


    // Fixed codes
    const codes = {
        "1": "3057293",
        "2": "123444"
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

        message.textContent = "Please enter your Roll No.";
        message.classList.add("error");

        return;
    }


    // Check code
    if (codes[option] === code) {

        // Open Page 2
        window.location.href = "result.html";

    } else {

        message.textContent =
            "The Roll No you entered is incorrect. Please check your Roll No and try again.";

        message.classList.add("error");

    }

});
