//your JS code here. If required.
function displayDateTime() {
    const datetimeElement = document.getElementById('timer');
    const currentDate = new Date();
const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const year = currentDate.getFullYear();

    const dateString = `${month.toString().padStart(2, ' ')}/${day.toString().padStart(2, ' ')}/${year}`;

    const timeString = currentDate.toLocaleTimeString();

    datetimeElement.textContent = dateString + ', ' + timeString;
  }

  // Update the time and date every second
  setInterval(displayDateTime, 1000);