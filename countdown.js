function diff_easy(num)
{   startTimer();
   if(num==1){
    document.getElementById('timer').innerHTML =
  07 + ":" + 00;}
  else{
  reset();}
   }

function diff_med(num)
{   startTimer();
   if(num==2){
    document.getElementById('timer').innerHTML =
  05 + ":" + 00;}
  else{
  reset();}
   }

function diff_hard(num)
   {   startTimer();
      if(num==3){
       document.getElementById('timer').innerHTML =
     03 + ":" + 00;}
     else{
     reset();}
      }

function reset(){
      window.location.reload();
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}