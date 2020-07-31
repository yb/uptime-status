import React from 'react';
import Link from './link';

const Header = () => {
  const { SiteName, SiteUrl, Navi } = window.Config;
  return (
    <div id="header">
      <div className="container">
        <a className="logo" href={SiteUrl}>{SiteName}</a>
        <div className="navi">
          {Navi.map((item, index) => (
            <Link key={index} text={item.text} to={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
