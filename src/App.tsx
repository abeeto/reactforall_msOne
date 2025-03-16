import React, { useEffect, useState } from 'react';
import AppContainer from './AppContainer';
import Heading from './Heading';
import Form from './Form';
import { FormBtn } from './FormBtn';
import Home from './Home';


interface form {
  id: number,
  title: string,
  elements: formFieldElement[]
}
interface formFieldElement {
  id: number, 
  label: string, 
  type:string
}


function App() {
  const [pageOpen, setPageOpen] = useState("HOME");
  const [formTitle, setFormTitle] = useState<string>("Welcome to Lesson 5 of $react-typescript with #tailwindcss");
  const [selectedFormKey, setSelectedFormKey] = useState<string>("");

  let newId = Number(new Date());
  return (
    <AppContainer>
      <Heading innerText={formTitle}/>
      { 
        pageOpen === "FORM" ? 
        <>
          <Form formObj={JSON.parse(
            localStorage.getItem(selectedFormKey) ??
            `{"id": ${newId}, "title": "Template Form", "elements": [{"id": "1","label": "New Field","type": "text"}]}`
          )}/>
          <FormBtn onClick={() => {
            if(selectedFormKey) {
              localStorage.removeItem(selectedFormKey);
            }}} innerText="Delete Form"/>
          <FormBtn onClick={() => {
            setFormTitle("Welcome to Lesson 5 of $react-typescript with #tailwindcss");
            setPageOpen("HOME");
          }} innerText="Go Home"/>    
        </>
        :
        <Home setSelectedFormKeyCB = {setSelectedFormKey} selectedFormKey={selectedFormKey}/>
      }
      <div className="flex gap-2">
        <FormBtn onClick={() => {
          console.log(selectedFormKey)
          setPageOpen("FORM");
        }} innerText="Open Form"/>
      </div>

    </AppContainer>
  );
}

export default App;
