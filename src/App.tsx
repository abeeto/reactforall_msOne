import React, { useState } from 'react';
import AppContainer from './AppContainer';
import FormHeading from './FormHeading';
import FormElements from './FormElements';
import { FormBtn } from './FormBtn';
import FormHome from './FormHome';

function App() {
  const [formOpen, setFormOpen] = useState("HOME");
  const [formTitle, setFormTitle] = useState<string>("Welcome to Lesson 5 of $react-typescript with #tailwindcss");

  return (
    <AppContainer>
      <FormHeading innerText={formTitle}/>
      { 
        formOpen === "FORM" ? 
        <>
          <FormElements formTitle={formTitle} setFormTitle={setFormTitle}/>
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
