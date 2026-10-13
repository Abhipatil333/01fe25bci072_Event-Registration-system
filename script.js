let Events = [
    {
        name: "pladies",
        desc: "A",
        date: "28-08-2026",
        Venue: "Gymkhana",
        Schedule: "AT 4:00 pm",
        Activities: "Music"
    },
    {
        name: "euphoria",
        desc: "B",
        date: "28-09-2026",
        Venue: "Arena",
        Schedule: "AT 6:00 pm",
        Activities: "Sports"
    },
    {
        name: "Freshers",
        desc: "C",
        date: "28-10-2026",
        Venue: "Near Vindhya Hostel",
        Schedule: "AT 7:30 pm",
        Activities: "Comedy"
    }
];

let selectedEvent = null;

function studentLogin() {
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("loginMessage").textContent =
            "Please fill all the fields.";
        return;
    }
    document.getElementById("loginMessage").textContent =
        "Login successful!";
}

function selectEvent(EventName) {
    selectedEvent = null;
    for (let i = 0; i < Events.length; i++) {
        if (Events[i].name === EventName) {
            selectedEvent = Events[i];
            break;
        }
    }
    if (selectedEvent === null) {
        alert("Event not found.");
    }
}

function registerEvent() {

    let name = document.getElementById("registerName").value;
    let usn = document.getElementById("usn").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let EventName = document.getElementById("Event").value;
    let registrationDate =
        document.getElementById("registrationDate").value;
    if (
        name === "" ||
        usn === "" ||
        email === "" ||
        department === "" ||
        EventName === "" ||
        registrationDate === ""
    ) {

        document.getElementById("errorMessage").textContent =
            "Please fill all the required fields.";

        return;
    }

    document.getElementById("errorMessage").textContent = "";
    selectEvent(EventName);
    if (selectedEvent === null) {

        return;
    }
    document.getElementById("confirmName").textContent = name;
    document.getElementById("confirmevent").textContent =selectedEvent.name;
    document.getElementById("confirmRegistrationDate").textContent =registrationDate;
    document.getElementById("confirmation").style.display ="block";


    alert(
        "Registration Successful!\n\n" +
        "Student Name: " + name + "\n" +
        "Event: " + selectedEvent.name + "\n" +
        "Registration Date: " + registrationDate
    );
}
document.getElementById("loginForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        studentLogin();
    }
);

document.getElementById("registrationForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        registerEvent();
    }
);