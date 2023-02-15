const btnClose = document.querySelector('#btnClose');
const modalCelebrate = document.querySelector('.celebrate');
const messageModal = document.querySelector('.message');
let celebrate = false;

btnClose.addEventListener('click', function(){
    messageModal.classList.add('modal--is-hidden');
});

function refreshTime(){
    let spanDay = document.querySelector('.time__days');
    let spanHour = document.querySelector('.time__hours');
    let spanMinute = document.querySelector('.time__minutes');
    let spanSecond = document.querySelector('.time__seconds');
    let now = new Date().getTime();
    let dateBirthday = new Date("Dec 15 2023 14:45:00").getTime();
    let calc = dateBirthday - now;
    let calcTime = {
        day: 1000 * 60 * 60 * 24,
        hour: 1000 * 60 * 60,
        minute: 1000 * 60,
        seconds: 1000
    }
    let time = {
        day: Math.floor(calc / calcTime.day),
        hour: Math.floor((calc % calcTime.day)/calcTime.hour),
        minute: Math.floor((calc % calcTime.hour)/calcTime.minute),
        seconds: Math.floor((calc % calcTime.minute)/calcTime.seconds)
    }
    
    let timeFormat = {
        day: time.day < 9? '0' + time.day: time.day,
        hour: time.hour < 9? '0' + time.hour: time.hour,
        minute: time.minute < 9? '0' + time.minute: time.minute,
        seconds: time.seconds < 9? '0' + time.seconds: time.seconds
    }

    spanDay.textContent = timeFormat.day;
    spanHour.textContent = timeFormat.hour;
    spanMinute.textContent = timeFormat.minute;
    spanSecond.textContent = timeFormat.seconds;

    if(calc < 0){
        spanDay.textContent = '0';
        spanHour.textContent = '0';
        spanMinute.textContent = '0';
        spanSecond.textContent = '0';
        celebrate = true;
        if(celebrate && messageModal.classList.contains('modal--is-hidden')){
            modalCelebrate.classList.remove('modal--is-hidden')
        }
    }
}

function changeTheme(){
    let item = document.querySelectorAll(".countdown__item")

    console.log(item)
}

setInterval(refreshTime, 1000);