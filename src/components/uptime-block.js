import React, { useMemo } from 'react';
import { formatDuration, fixed } from '../utils/helper';

const UptimeBlock = (props) => {

  const { data } = props;
  const { status, text } = useMemo(() => {
    let status = '';
    let text = data.date.format('YYYY-MM-DD');
    if (data.uptime >= 100) {
      status = 'ok';
      text += ` No Incidents`;
    }
    else if (data.uptime <= 0 && data.down.times === 0) {
      status = 'none';
      text += ' No Data';
    }
    else {
      status = 'down';
      text += ` ${data.down.times} Incident(s); Total Downtime: ${formatDuration(data.down.duration)}; Online Rate: ${fixed(data.uptime)}%`;
    }
    return { status, text };
  }, [data]);

  return (
    <i className={status} data-tip={text}></i>
  );
}

export default UptimeBlock;