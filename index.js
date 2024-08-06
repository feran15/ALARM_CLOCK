// This function updates the time display every second
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}

// This function checks if the current time matches any of the set alarms
function checkAlarms() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const alarms = document.querySelectorAll('.alarm-item');

    alarms.forEach(alarm => {
        const alarmTime = alarm.querySelector('h3').textContent;
        const isChecked = alarm.querySelector('input').checked;

        if (isChecked && alarmTime === currentTime) {
            playAlarm();
        }
    });
}

// This function plays the alarm sound
function playAlarm() {
    const audio = document.querySelector('audio');
    audio.play();
}

// This function handles the checkbox click event
function handleClick() {
    // Custom logic for handling checkbox clicks can be added here
    console.log('Checkbox clicked');
}

// Set an interval to update the time and check alarms every second
setInterval(() => {
    updateTime();
    checkAlarms();
}, 1000);

// Initialize the time display when the page loads
window.onload = updateTime;
