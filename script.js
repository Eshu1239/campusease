// Search Events
function searchEvents() {

    let input = document.getElementById("search").value.toLowerCase();
    let events = document.getElementsByClassName("event");

    for (let i = 0; i < events.length; i++) {

        let text = events[i].innerText.toLowerCase();

        if (text.includes(input))
            events[i].style.display = "";
        else
            events[i].style.display = "none";
    }
}


// Event Registration
function registerEvent(eventName) {

    alert("You selected " + eventName +
          ". Please complete the registration form.");
}


// Form Submission
function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("✅ Registration Successful!\nWelcome " + name);
}