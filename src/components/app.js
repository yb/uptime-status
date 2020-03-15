import React from 'react';
import Header from './header';
import Footer from './footer';
import Uptime from './uptime';

const App = () => {
  const { ApiKeys, SiteName } = window.Config;
  window.document.title = SiteName;
  return (
    <>
      <Header />
      <div className="container">
        <div id="uptime">
          {ApiKeys.map(i => (
            <Uptime key={i} apikey={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
