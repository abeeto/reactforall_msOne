import React, { useState } from 'react';
import AppContainer from './AppContainer';
import FormHeading from './FormHeading';
import FormElements from './FormElements';
import FormSubmit from './FormSubmit';
import { FormBtn } from './FormBtn';
import FormHome from './FormHome';

function App() {
  const [formOpen, setFormOpen] = useState("HOME");
  const formItems = [{id: 1, label: "First Name", type: "text"}, {id: 2, label: "Last Name", type: "text"}, {id: 3, label: "Email", type: "email"},  {id: 4, label: "Date of Birth", type: "date"}];
  return (
    <AppContainer>
      <FormHeading/>
      { 
        formOpen === "FORM" ? 
        <>
          <FormElements formItems={formItems} />
          <FormSubmit innerText='Submit'/>
        </>
        :
        <FormHome/>
      }
      <div className="flex gap-2">
        <FormBtn onClick={() => {
          setFormOpen("FORM");
        }}
        innerText="Open Form"/>

        <FormBtn onClick={() => {
          setFormOpen("HOME");
        }}
        innerText="Close Form"/>  
      </div>

    </AppContainer>
  );

}

export default App;
