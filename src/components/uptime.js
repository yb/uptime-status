import React, { useEffect, useState } from 'react';
import UptimeItem from './uptime-item';
import { GetMonitors } from '../utils/uptimerobot';

const Uptime = (props) => {

  const { CountDays } = window.Config;
  const { apikey } = props;
  const [monitors, setMonitors] = useState(null);

  useEffect(() => {
    GetMonitors(apikey, CountDays).then(setMonitors);
  }, [apikey, CountDays]);

  return monitors ? monitors.map(item => (
    <UptimeItem key={item.id} monitor={item} />
  )) : <div className="item loading"></div>;
}

export default Uptime;
