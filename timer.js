function updateClock() {
    const now = new Date();

    // Extract hours, minutes, seconds
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM/PM
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format time as two digits
    const formatNumber = (num) => num.toString().padStart(2, '0');
    const hourStr = formatNumber(hours);
    const minuteStr = formatNumber(minutes);
    const secondStr = formatNumber(seconds);

    // Update clock elements
    const clockElements = document.querySelectorAll('.clock .h, .clock .m, .clock .s');
    clockElements[0].textContent = hourStr[0];
    clockElements[1].textContent = hourStr[1];
    clockElements[2].textContent = minuteStr[0];
    clockElements[3].textContent = minuteStr[1];
    clockElements[4].textContent = secondStr[0];
    clockElements[5].textContent = secondStr[1];

    // Update AM/PM
    const amPmElements = document.querySelectorAll('.am span');
    amPmElements[0].style.color = amPm === 'AM' ? 'yellow' : 'white';
    amPmElements[1].style.color = amPm === 'PM' ? 'yellow' : 'white';

    // Update date
    const dateStr = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    document.querySelector('.date').textContent = dateStr;

    // Highlight the current day
    const currentDay = now.getDay();
    const dayElements = document.querySelectorAll('.days span');
    dayElements.forEach((day, index) => {
        day.classList.toggle('days-active', index === currentDay);
    });

    const currentMonth = now.getMonth();
    const monthElements = document.querySelectorAll('.month span');
    monthElements.forEach((month, index) => {
        month.classList.toggle('month-active', index === currentMonth);
    });
}

// Initialize the clock and set it to update every second
setInterval(updateClock, 1000);
updateClock(); // Call immediately to avoid initial delay
