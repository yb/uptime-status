import dayjs from 'dayjs';
import Axios from 'axios';
import { fixed } from './helper';

const Api = 'https://uptimerobot.renfei.workers.dev/v2/getMonitors';

export const GetMonitors = async (apikey, days) => {

  const dates = [];
  const today = dayjs(new Date().setHours(0, 0, 0, 0));
  for (let d = 0; d < days; d++) {
    dates.push(today.subtract(d, 'day'));
  }

  const ranges = [];
  dates.forEach(date => {
    ranges.push(`${date.unix()}_${date.add(1, 'day').unix()}`);
  });

  const logs_start_date = dates[dates.length - 1].unix();
  const logs_end_date = dates[0].add(1, 'day').unix();
  ranges.push(`${logs_start_date}_${logs_end_date}`);

  const postdata = {
    api_key: apikey,
    format: 'json',
    logs: 1,
    log_types: '1-2',
    logs_start_date,
    logs_end_date,
    custom_uptime_ranges: ranges.join('-'),
  };

  const monitors = await Axios.post(Api, postdata, { timeout: 10000 })
    .then(response => {
      if (response.data.stat === 'ok') return Promise.resolve(response.data.monitors);
      else return Promise.reject(response.data.error);
    });

  const apps = [];
  monitors.forEach(monitor => {

    let ranges = monitor.custom_uptime_ranges.split('-');
    let average = fixed(ranges.pop());
    let daily = [];
    let map = [];
    dates.forEach((date, index) => {
      map[date.format('YYYYMMDD')] = index;
      daily[index] = {
        date: date,
        uptime: fixed(ranges[index]),
        down: { times: 0, duration: 0 }
      }
    });
    
    let total = {
      times: 0,
      duration: 0,
    };

    monitor.logs.forEach(log => {
      if (log.type === 1) {
        let date = dayjs.unix(log.datetime).format('YYYYMMDD');
        total.duration += log.duration;
        total.times += 1;
        daily[map[date]].down.duration += log.duration;
        daily[map[date]].down.times += 1;
      }
    });

    let status = 'unknow';
    if (monitor.status === 2) status = 'ok';
    if (monitor.status === 9) status = 'down';

    apps.push({
      id: monitor.id,
      name: monitor.friendly_name,
      url: monitor.url,
      status: status,
      average: average,
      daily: daily,
      total: total,
    });
  });

  return Promise.resolve(apps);
}