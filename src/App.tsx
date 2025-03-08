import React, { useState } from 'react';
import AppContainer from './AppContainer';
import FormHeading from './FormHeading';
import FormElements from './FormElements';
import FormSubmit from './FormSubmit';
import { FormBtn } from './FormBtn';
import FormHome from './FormHome';

function App() {
  const [formOpen, setFormOpen] = useState("HOME");
  return (
    <AppContainer>
      <FormHeading/>
      { 
        formOpen === "FORM" ? 
        <>
          <FormElements/>
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
