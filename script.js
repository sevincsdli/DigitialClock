const hour=document.querySelector('.hour');
const mins=document.querySelector('.mins');
const seconds=document.querySelector('.seconds');
function clock(){
 
    let date=new Date();
  let ourHour=date.getHours();
let ourMins=date.getMinutes();
let second=date.getSeconds();
hour.innerHTML=ourHour+':';
mins.innerHTML=ourMins+ ':';
seconds.innerHTML=second;

}
setInterval(clock,1000);