import React from 'react';
import logo from './logo.svg';

function App() {
  const formItems = [{id: 1, label: "First Name"}, {id: 2, label: "Last Name"}, {id: 3, label: "Email"},  {id: 4, label: "Date of Birth"}];
  return (
  <div className="flex h-screen bg-blue-100 items-start p-5">
    <div className="flex flex-row gap-2 flex-grow-1 w-500 items-center mx-auto bg-white shadow-lg rounded-xl pl-5 pr-12 py-5">
      <img src={logo} className="animate-spin flex-shrink-1 flex-grow-0 w-16" alt="logo" />
      <h1 className="ml-5 text-center text-xl font-medium flex-grow-1">Welcome to Lesson 5 of $react-typescript with <br/> #tailwindcss</h1>
      <div className="flex flex-col gap-1">
      {
        formItems.map(item => {
          return (
            <React.Fragment key={item.id}>
              <label htmlFor={item.label}>{item.label}</label>
              <input type="text" />
            </React.Fragment>
          )
        })
      }
      </div>
    </div>
  </div>
  );

}

export default App;
