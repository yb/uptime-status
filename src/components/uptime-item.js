import React from 'react';
import ReactTooltip from 'react-tooltip';
import UptimeBlock from './uptime-block';
import Link from './link';
import { formatDuration } from '../utils/helper';

const UptimeItem = (props) => {

  const { ShowLink, CountDays } = window.Config;
  const { monitor } = props;
  const initial = monitor.daily[monitor.daily.length - 1].date;
  const status = {
    ok: '正常',
    down: '无法访问',
    unknow: '未知'
  };

  const total = monitor.total.times
    ? `最近 ${CountDays} 天故障 ${monitor.total.times} 次，累计 ${formatDuration(monitor.total.duration)}，平均可用率 ${monitor.average}%`
    : `最近 ${CountDays} 天可用率 ${monitor.average}%`;

  return (
    <div className="item">
      <div className="meta">
        <div className="info">
          <span className="name">{monitor.name}</span>
          {ShowLink && <Link className="link" to={monitor.url} text={monitor.name} />}
        </div>
        <div className={`status ${monitor.status}`}>{status[monitor.status]}</div>
      </div>
      <div className="timeline">
        {monitor.daily.map((value, index) => (
          <UptimeBlock key={index} data={value} />
        ))}
      </div>
      <ReactTooltip className="tooltip" place="top" type="dark" effect="solid" />
      <div className="foot">
        <span>今天</span>
        <span>{total}</span>
        <span>{initial.format('YYYY-MM-DD')}</span>
      </div>
    </div>
  );
}

export default UptimeItem;
