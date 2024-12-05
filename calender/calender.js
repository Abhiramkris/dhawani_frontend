const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth(),
    selectedDate = null; // Variable to store the selected date

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class if this is the selected date
        let isSelected = selectedDate && selectedDate.date === i && selectedDate.month === currMonth && selectedDate.year === currYear ? "active" : "";
        liTag += `<li class="${isSelected}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current month and year as currentDate text
    daysTag.innerHTML = liTag;

    // Add click event listener to all days
    document.querySelectorAll(".days li").forEach(day => {
        day.addEventListener("click", (e) => {
            if (!day.classList.contains("inactive")) { // Only allow selecting active days
                // Remove "active" class from previously selected day
                document.querySelector(".days .active")?.classList.remove("active");
                // Add "active" class to the clicked day
                day.classList.add("active");

                // Update the selectedDate variable
                selectedDate = {
                    date: parseInt(day.innerText),
                    month: currMonth,
                    year: currYear
                };
            }
        });
    });
};
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            currYear = currMonth < 0 ? currYear - 1 : currYear + 1;
            currMonth = (currMonth + 12) % 12;
        }
        renderCalendar(); // calling renderCalendar function
    });
});
