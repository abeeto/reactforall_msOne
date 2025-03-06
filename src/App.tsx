import React from 'react';
import AppContainer from './AppContainer';
import FormHeading from './FormHeading';
import FormElements from './FormElements';
import FormSubmit from './FormSubmit';
function App() {
  const formItems = [{id: 1, label: "First Name", type: "text"}, {id: 2, label: "Last Name", type: "text"}, {id: 3, label: "Email", type: "email"},  {id: 4, label: "Date of Birth", type: "date"}];
  return (
    <AppContainer>
      <FormHeading/>
      <FormElements formItems={formItems} />
      <FormSubmit innerText='Submit'/>
    </AppContainer>
  );

}

export default App;
