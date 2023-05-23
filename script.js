function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Add leading zeros to the hours, minutes, and seconds
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Compose the string for display
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    // Update the clock element
    document.getElementById("clock").textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  