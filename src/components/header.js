import React from 'react';
import Link from './link';

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <a className="logo" href="./">Uptime Status</a>
        <div className="navi">
          <Link text="Homepage" to="https://status.org.cn/" />
          <Link text="GitHub" to="https://github.com/yb/uptime-status" />
        </div>
      </div>
    </div>
  );
}

export default Header;
