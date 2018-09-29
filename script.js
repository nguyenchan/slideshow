// Set the date we're counting down to
var countDownDate = new Date("Dec 15, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    let theDay = new Date("Dec 15, 2018 00:00:00").getTime();
    let partyTime = new Date("Dec 15, 2018 18:00:00").getTime();
    let theNextDay = new Date("Dec 16, 2018 00:00:00").getTime();
    let theEnDay = new Date("Dec 1, 2018 00:00:00").getTime();
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    var distanceE = theEnDay - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    var daysE = Math.floor(distanceE / (1000 * 60 * 60 * 24));
    var hoursE = Math.floor((distanceE % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesE = Math.floor((distanceE % (1000 * 60 * 60)) / (1000 * 60));
    var secondsE = Math.floor((distanceE % (1000 * 60)) / 1000);
    

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    document.getElementById("subtimer").innerHTML = daysE + "d " + hoursE + "h "
    + minutesE + "m " + secondsE + "s ";

    //console.log(distance);
    // If the count down is over, write some text 
    if (distanceE < 0) {
        document.getElementById("subtimer").innerHTML = "#done";
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "DONE";
    }
}, 1000);

