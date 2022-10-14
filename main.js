function showTime(){
    const dte = new Date();
    let sesn = document.getElementById('sesn');
    console.log(dte)
    let hours = dte.getHours();
    hours = hours > 13 ? hours-12 : hours;
    frmattdHour = hours < 10 ? "0"+hours:hours;
    document.getElementById('hrs').innerHTML = frmattdHour;
    const minutes = dte.getMinutes();
    frmattdMins = minutes<10 ? "0"+minutes:minutes;
    document.getElementById('mins').innerHTML=frmattdMins;
    const seconds = dte.getSeconds();
    frmattdSecnds = seconds < 10? "0"+seconds: seconds;
    document.getElementById('secns').innerHTML=frmattdSecnds;
    return `The Time is: ${frmattdHour}:${frmattdMins}:${frmattdSecnds}`;

}
console.log(showTime());
const timer = setInterval(()=>{
    console.log(showTime())
}, 1000);
