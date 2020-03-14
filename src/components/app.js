import React from 'react';
import Header from './header';
import Footer from './footer';
import Uptime from './uptime';
import { ApiKeys } from './../config';

const App = () => {
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
