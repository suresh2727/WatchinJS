var hourspan = document.getElementById('hour');
var minspan = document.getElementById('min');
var secondspan = document.getElementById('second');
var amorpmspan = document.getElementById('amorpm');

function changeTime() {
    var date = new Date()
    var hours = date.getHours();
    hourspan.textContent = hours;

    var min = date.getMinutes();
    minspan.textContent = min;

    var second = date.getSeconds(); 
    secondspan.textContent=second;

    if (hours === 0) {
        amorpm = "AM"
    }
    else if (hours >0 && hours < 12) {
        amorpm = "AM"
    }
    else{
        amorpm = "PM"
    }

    amorpmspan.textContent = amorpm

}

setInterval(changeTime, 1000);

