function attachEventsListeners() {
    let daysElement= document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let rations = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    };

    document.getElementById('daysBtn').addEventListener('click', onClick);
    document.getElementById('hoursBtn').addEventListener('click', onClick);
    document.getElementById('minutesBtn').addEventListener('click', onClick);
    document.getElementById('secondsBtn').addEventListener('click', onClick);

    function convert(value,unit){
        let days = value/ rations[unit];
        return{
            days:days,
            hours:days*rations.hours,
            minutes:days*rations.minutes,
            seconds:days*rations.seconds
        }
    }

    function onClick(e){
        let input= e.target.parentNode.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value=time.minutes;
        secondsElement.value = time.seconds;
    }
}