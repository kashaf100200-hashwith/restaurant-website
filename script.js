// Mobile Menu

let menuToggle = document.getElementById("menuToggle");
let navLinks = document.getElementById("navLinks");

menuToggle.onclick = function() {

    navLinks.classList.toggle("show");

};


// Menu Filter

let filters = document.querySelectorAll(".filter");
let foodCards = document.querySelectorAll(".food-card");

filters.forEach(function(button) {

    button.onclick = function() {

        filters.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        let category = button.getAttribute("data-filter");

        foodCards.forEach(function(card) {

            if (
                category === "all" ||
                card.getAttribute("data-category") === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    };

});


// Table Booking

let bookingForm = document.getElementById("bookingForm");

bookingForm.onsubmit = function(event) {

    event.preventDefault();

    let name = bookingForm.querySelector("input[type='text']").value;

    alert("Thank you " + name + "! Your table has been booked successfully. 🍽️");

    bookingForm.reset();

};