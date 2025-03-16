import React, { useState } from 'react';
import Form from './Pages/Form';
import Home from './Pages/Home';
import { FormBtn } from './Components/FormBtn';

function App() {
  const [pageOpen, setPageOpen] = useState("HOME");
  const [selectedFormKey, setSelectedFormKey] = useState<string>("");

  let newId = Number(new Date());
  return (
    <div>
      { 
        pageOpen === "FORM" ? 
        <>
          <Form formObj={JSON.parse(
            localStorage.getItem(selectedFormKey) ??
            `{"id": ${newId}, "title": "Template Form", "elements": [{"id": "1","label": "Name","type": "text"}, {"id": "2","label": "Birthday","type": "date"}, {"id": "3","label": "E-mail","type": "email"}]}`
          )}/>
          <FormBtn className="mt-3" onClick={() => {
            setPageOpen("HOME");
          }} innerText="Go Home"/>    
        </>
        :
        <Home selectedFormKey={selectedFormKey} setSelectedFormKeyCB = {setSelectedFormKey} setPageOpenCB={setPageOpen}/>
      }
    </div>
  );
}

export default App;
