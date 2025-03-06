import React from 'react';
import AppContainer from './AppContainer';
import FormHeading from './FormHeading';
function App() {
  const formItems = [{id: 1, label: "First Name", type: "text"}, {id: 2, label: "Last Name", type: "text"}, {id: 3, label: "Email", type: "email"},  {id: 4, label: "Date of Birth", type: "date"}];
  return (
    <AppContainer>
      <div className="">
        <FormHeading/>
        <div className="flex flex-col">
        {
          formItems.map(item => {
            return (
              <React.Fragment key={item.id}>
                <label className="text-m font-medium my-2" htmlFor={item.label}>{item.label}</label>
                <input className="border border-2 border-grey-200 rounded-md p-2" id={item.label} type={item.type} />
              </React.Fragment>
            )
          })
        }   
        </div>
      </div>   
    </AppContainer>
  );

}

export default App;
