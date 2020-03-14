import TimeSpan from 'timespan';

export const formatDuration = (seconds) => {
  let time = TimeSpan.fromSeconds(seconds);
  let text = `${time.seconds} 秒`;
  if (time.minutes) text = `${time.minutes} 分 ${text}`;
  if (time.hours) text = `${Math.floor(time.totalHours())} 小时 ${text}`;
  return text;
}

export const fixed = (value) => {
  return (Math.floor(value * 100) / 100).toString();
}