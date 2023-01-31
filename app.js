const times = () => {
  const deg = 6;
  const time = new Date();

  var sec = time.getSeconds() * deg;
  var min = time.getMinutes() * deg;
  var hour = time.getHours() * 30 + min / 12;
  document.querySelector(".sec").style.transform = `rotate(${sec}deg)`;
  document.querySelector(".min").style.transform = `rotate(${min}deg)`;
  document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
};

times();
setInterval(times, 1000);
