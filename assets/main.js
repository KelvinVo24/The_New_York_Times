function updateTime() {
    const now = new Date();
    const dateStr = now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('realtime').textContent = dateStr;
}

// Call updateTime once at the start to initialize the time
updateTime();

// Then update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);