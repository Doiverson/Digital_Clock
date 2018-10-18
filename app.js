
function clock(){

    var twoDigit = function(num){
        var digit;
        if(num < 10){
            digit = "0" + num;
        } else {
            digit = num;
        }

        return digit;
    }

    var weeks = ["Sun","Mon","Thu","Wed","Thr","Fri","Sat"];

    var now = new Date();

        var year = now.getFullYear();
        var month = twoDigit(now.getMonth()+1);
        var day = twoDigit((now.getDate()));
        var week = weeks[now.getDay()];
        var hour = twoDigit(now.getHours());
        var minute = twoDigit(now.getMinutes());
        var second = twoDigit(now.getSeconds());


    document.getElementById('clock_date').textContent = `${year} / ${month} / ${day} "${week}"`;
    document.getElementById('clock_time').textContent = `${hour} : ${minute} : ${second}`;
}

// function playSound(){
//     document.getElementById('play').play();
// }

setInterval(clock, 1000);
// setInterval(playSound, 357);
