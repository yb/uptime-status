import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Based On <Link to="https://uptimerobot.com/" text="UptimeRobot" /></p>
        <p>&copy; 2021-Now <Link to="https://pai233.top/" text="Pai233" /></p>
      </div>
    </div>
  );
}

export default Footer;
