import React, { useEffect, useState } from 'react';
import UptimeItem from './uptime-item';
import { GetMonitors } from '../utils/uptimerobot';

const Uptime = (props) => {

  const { apikey } = props;
  const [ monitors, setMonitors ] = useState(null);

  useEffect(() => {
    GetMonitors(apikey, 60).then(setMonitors);
  }, [apikey]);

  return monitors ? monitors.map(item => (
    <UptimeItem key={item.id} monitor={item} />
  )) : (
    <div className="item loading"></div>
  );
}

export default Uptime;
