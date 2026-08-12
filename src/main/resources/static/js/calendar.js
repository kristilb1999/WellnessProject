// Keep track of which month is currently being displayed.
let currentDate = new Date();


/**
 * Generates the calendar for the current month.
 */
function generateCalendar() {

    const calendarGrid = document.getElementById("calendar-grid");
    const currentMonthElement = document.getElementById("current-month");

    // Remove the existing calendar days.
    calendarGrid.innerHTML = "";


    // Get information about the current month.
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);

    const lastDayOfMonth = new Date(year, month + 1, 0);

    const numberOfDaysInMonth = lastDayOfMonth.getDate();

    const firstDayOfWeek = firstDayOfMonth.getDay();


    // Display the month and year above the calendar.
    currentMonthElement.textContent =
        currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });


    // Add the names of the days of the week.
    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];


    dayNames.forEach(dayName => {

        const dayNameElement = document.createElement("div");

        dayNameElement.classList.add("calendar-day-name");

        dayNameElement.textContent = dayName;

        calendarGrid.appendChild(dayNameElement);

    });


    // Add blank cells before the first day of the month.
    for (let i = 0; i < firstDayOfWeek; i++) {

        const emptyDay = document.createElement("div");

        emptyDay.classList.add(
            "calendar-day",
            "empty-day"
        );

        calendarGrid.appendChild(emptyDay);

    }


    for (let day = 1; day <= numberOfDaysInMonth; day++) {

    const dayElement = document.createElement("div");

    dayElement.classList.add("calendar-day");


    const dayNumber = document.createElement("span");

    dayNumber.classList.add("day-number");

    dayNumber.textContent = day;


    dayElement.appendChild(dayNumber);


    // Highlight today's date.
    if (isToday(year, month, day)) {

        dayElement.classList.add("today");

    }


    // Create a Date object representing this calendar day.
    const selectedDate = new Date(
        year,
        month,
        day
    );


    // Store the date on the calendar element.
    dayElement.dataset.date =
        formatDate(selectedDate);


    // Make the day clickable.
    dayElement.addEventListener(
        "click",
        () => openDay(selectedDate)
    );


    calendarGrid.appendChild(dayElement);

}

}


/**
 * Determines whether a particular date is today.
 */
function isToday(year, month, day) {

    const today = new Date();

    return (
        year === today.getFullYear() &&
        month === today.getMonth() &&
        day === today.getDate()
    );

}


/**
 * Move to the previous month.
 */
function goToPreviousMonth() {

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    generateCalendar();

}


/**
 * Move to the next month.
 */
function goToNextMonth() {

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    generateCalendar();

}


/**
 * Return to the current month.
 */
function goToToday() {

    currentDate = new Date();

    generateCalendar();

}


/*
 * Connect the navigation buttons
 * to their respective functions.
 */

document
    .getElementById("previous-month")
    .addEventListener(
        "click",
        goToPreviousMonth
    );


document
    .getElementById("next-month")
    .addEventListener(
        "click",
        goToNextMonth
    );


document
    .getElementById("today")
    .addEventListener(
        "click",
        goToToday
    );

/**
 * Formats a Date object as YYYY-MM-DD.
 */
function formatDate(date) {

    const year = date.getFullYear();

    const month = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        date.getDate()
    ).padStart(2, "0");


    return `${year}-${month}-${day}`;
}

/**
 * Opens the selected day.
 */
function openDay(date) {

    const formattedDate = formatDate(date);

    console.log(
        "Selected date:",
        formattedDate
    );

}

/*
 * Generate the calendar when
 * the page first loads.
 */

generateCalendar();