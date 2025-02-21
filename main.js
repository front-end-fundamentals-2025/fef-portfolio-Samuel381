document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript file is loaded correctly!");

    const divElement = document.getElementsByClassName("text")[0];
    const buttonElement = document.getElementsByClassName("bb")[0];
    const inputElement = document.getElementsByClassName("na")[0];

    if (buttonElement && inputElement && divElement) {
        buttonElement.addEventListener("click", function() {
            let entername = inputElement.value.trim(); // Trim whitespace

            if (entername !== "") {
                divElement.innerText = "Thanks for leaving your information, " + entername;
            } else {
                divElement.innerText = "...";
            }
        });
    } else {
        console.error("One or more elements were not found.");
    }
});





