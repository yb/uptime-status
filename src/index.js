import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import './app.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
