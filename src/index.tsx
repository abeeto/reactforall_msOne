import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const BannerDiv = ({name} : {name: string}) => {
  return (
    <div id="banner" className='bg-teal-700 text-center p-4'>
      <h1 id="headingOne" className='text-gray-100 text-2xl'>Hello again</h1>
      <i>Welcome {name}</i>
      <br></br><a href='https://google.com' className='text-green-300'> Don't look too hard</a>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <BannerDiv name="Abhinav"/>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
