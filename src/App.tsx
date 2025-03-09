import React, { useEffect, useState } from 'react';
import AppContainer from './AppContainer';
import FormHeading from './FormHeading';
import FormElements from './FormElements';
import { FormBtn } from './FormBtn';
import FormHome from './FormHome';


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
  const [formOpen, setFormOpen] = useState("HOME");
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
      <FormHeading innerText={formTitle}/>
      { 
        formOpen === "FORM" ? 
        <>
          <FormElements formTitle={formTitle} setFormTitle={setFormTitle} elements={selectedFormElements} setElements={setSelectedFormElements}/>
        </>
        :
        <FormHome setSelectedFormKey={setSelectedFormKey}/>
      }
      <div className="flex gap-2">
        <FormBtn onClick={() => {
          setFormOpen("FORM");
        }}
        innerText="Open Form"/>

        <FormBtn onClick={() => {
          setFormTitle("Welcome to Lesson 5 of $react-typescript with #tailwindcss");
          setFormOpen("HOME");
        }}
        innerText="Close Form"/>  
        <FormBtn onClick={() => {
          if(selectedFormKey) {
            localStorage.removeItem(selectedFormKey);
          }
        }}
        innerText="Delete Form"/>  
      </div>

    </AppContainer>
  );

}

export default App;
