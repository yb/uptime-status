import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from 'react';
import { GetMonitors } from '../common/uptimerobot';
import { formatDuration, formatNumber } from '../common/helper';
import Link from './link';

function UptimeRobot({ apikey }) {

  const status = {
    ok: 'Online',
    down: 'Offline',
    unknow: 'Unknown'
  };

  const { CountDays, ShowLink } = window.Config;

  const [monitors, setMonitors] = useState();

  useEffect(() => {
    GetMonitors(apikey, CountDays).then(setMonitors);
  }, [apikey, CountDays]);

  if (monitors) return monitors.map((site) => (
    <div key={site.id} className='site'>
      <div className='meta'>
        <span className='name' dangerouslySetInnerHTML={{ __html: site.name }} />
        {ShowLink && <Link className='link' to={site.url} text={site.name} />}
        <span className={'status ' + site.status}>{status[site.status]}</span>
      </div>
      <div className='timeline'>
        {site.daily.map((data, index) => {
          let status = '';
          let text = data.date.format('YYYY-MM-DD ');
          if (data.uptime >= 100) {
            status = 'ok';
            text += `| Uptime: ${formatNumber(data.uptime)}%`;
          }
          else if (data.uptime <= 0 && data.down.times === 0) {
            status = 'none';
            text += 'None';
          }
          else {
            status = 'down';
            text += `| Times Down: ${data.down.times}，Duration: ${formatDuration(data.down.duration)}，Uptime: ${formatNumber(data.uptime)}%`;
          }
          return (<i key={index} className={status} data-tip={text} />)
        })}
      </div>
      <div className='summary'>
        <span>Today</span>
        <span>
          {site.total.times
            ? `Times down: ${site.total.times}，Duration: ${formatDuration(site.total.duration)}，Uptime: ${site.average}%`
            : `Uptime: ${site.average}%`}
        </span>
        <span>{site.daily[site.daily.length - 1].date.format('YYYY-MM-DD')}</span>
      </div>
      <ReactTooltip className='tooltip' place='top' type='dark' effect='solid' />
    </div>
  ));

  else return (
    <div className='site'>
      <div className='loading' />
    </div>
  );
}

export default UptimeRobot;
