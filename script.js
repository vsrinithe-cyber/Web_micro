
function searchPlants() {

    let input = document
        .getElementById("searchBox")
        .value.toLowerCase();

    let cards = document
        .getElementsByClassName("plant-card");

    for (let i = 0; i < cards.length; i++) {

        let plantName = cards[i]
            .getElementsByTagName("h3")[0]
            .innerText.toLowerCase();

        if (plantName.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}




function validateContactForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" ||
        subject === "" || message === "") {

        alert("Please fill in all the fields.");
        return false;
    }

    alert("Thank you! Your message has been received.");

    document.querySelector(".contact-form form").reset();

    return false;
}




function showPlantMessage(plantName) {
    alert("You selected " + plantName +
          ". Thank you for exploring Green Garden!");
}





document.querySelectorAll(".faq-question").forEach(function(button) {

    button.addEventListener("click", function() {

        let faqItem = this.parentElement;
        let symbol = this.querySelector("span");

        faqItem.classList.toggle("active");

        if (faqItem.classList.contains("active")) {
            symbol.textContent = "-";
        } else {
            symbol.textContent = "+";
        }

    });

});





// LOGIN FORM
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        document.getElementById("loginMessage").textContent =
            "Login form submitted successfully! (Demo only)";
    }

    return false;
}

// REGISTER FORM
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (name && email && password.length >= 6) {
        document.getElementById("loginMessage").textContent =
            "Registration form submitted successfully! (Demo only)";
    }

    return false;
}





