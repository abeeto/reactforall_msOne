import React, { useEffect, useState } from 'react';
import AppContainer from './AppContainer';
import Heading from './Heading';
import FormElements from './FormElements';
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
  const [selectedFormElements, setSelectedFormElements] = useState<formFieldElement[]>([]);
  useEffect(()=> {
    if(selectedFormKey) {
      let form = JSON.parse(localStorage.getItem(selectedFormKey) as string);
      setSelectedFormElements(form.elements);
      setFormTitle(form.title);
      console.log(form);
    }
  }, [selectedFormKey])
  return (
    <AppContainer>
      <Heading innerText={formTitle}/>
      { 
        pageOpen === "FORM" ? 
        <>
          <FormElements formTitle={formTitle} setFormTitle={setFormTitle} elements={selectedFormElements} setElements={setSelectedFormElements}/>
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
        <Home setSelectedFormKey={setSelectedFormKey}/>
      }
      <div className="flex gap-2">
        <FormBtn onClick={() => {
          setPageOpen("FORM");
        }} innerText="Open Form"/>
      </div>

    </AppContainer>
  );
}

export default App;
