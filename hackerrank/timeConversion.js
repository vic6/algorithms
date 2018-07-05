function timeConversion(s) {
  const period = s.slice(s.length - 2);
  let time = s.slice(0, s.length - 2);
  let hour = time.slice(0, 2);

  if (period === 'AM') {
    if (hour === '12')  {
      hour = '00';
    }
    return hour + time.slice(2);

  } else {
      hour = parseInt(hour) + 12;
      console.log(hour);
      if (hour === 24) hour = 12;
      return hour + time.slice(2);
  }
}

console.log(timeConversion('06:45:54AM'));
