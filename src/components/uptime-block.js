import React, { useMemo } from 'react';
import { formatDuration, fixed } from '../utils/helper';

const UptimeBlock = (props) => {

  const { data } = props;
  const { status, text } = useMemo(() => {
    let status = '';
    let text = data.date.format('YYYY-MM-DD');
    if (data.uptime >= 100) {
      status = 'ok';
      text += ` 可用率 ${fixed(data.uptime)}%`;
    }
    else if (data.uptime <= 0 && data.down.times === 0) {
      status = 'none';
      text += ' 无数据';
    }
    else {
      status = 'down';
      text += ` 故障 ${data.down.times} 次，累计 ${formatDuration(data.down.duration)}，可用率 ${fixed(data.uptime)}%`;
    }
    return { status, text };
  }, [data]);

  return (
    <i className={status} data-tip={text}></i>
  );
}

export default UptimeBlock;