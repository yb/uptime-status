import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Uptime from './uptime';

const App = () => {

  const { ApiKeys, SiteName } = window.Config;

  useEffect(() => {
    window.document.title = SiteName;
  }, [SiteName]);

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
