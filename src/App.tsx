import React, { useState } from 'react';
import AppContainer from './Components/AppContainer';
import Heading from './Components/Heading';
import Form from './Pages/Form';
import Home from './Pages/Home';
import { FormBtn } from './Components/FormBtn';

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
            `{"id": ${newId}, "title": "Template Form", "elements": [{"id": "1","label": "Name","type": "text"}, {"id": "2","label": "Birthday","type": "date"}, {"id": "3","label": "E-mail","type": "email"}]}`
          )}/>
          <FormBtn onClick={() => {
            setFormTitle("Welcome to Lesson 5 of $react-typescript with #tailwindcss");
            setPageOpen("HOME");
          }} innerText="Go Home"/>    
        </>
        :
        <Home  selectedFormKey={selectedFormKey} setSelectedFormKeyCB = {setSelectedFormKey} setPageOpenCB={setPageOpen}/>
      }
    </AppContainer>
  );
}

export default App;
