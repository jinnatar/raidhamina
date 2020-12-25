function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClocks() {
  console.log('init clocks');
  const clocks = document.querySelectorAll('.countdown');
  for (const clock of clocks) {
    const endtime = clock.getAttribute('endtime');
    console.log('init clock: ' + endtime);
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      clock.innerHTML = '' +
                        t.hours.toLocaleString('en', {minimumIntegerDigits:2}) +
                        ':' + t.minutes.toLocaleString('en', {minimumIntegerDigits:2}) +
                        ':' + t.seconds.toLocaleString('en', {minimumIntegerDigits:2});
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    },1000);
  }
}

$( function () {
  initializeClocks();
});
