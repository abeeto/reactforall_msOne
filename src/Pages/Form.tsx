import React, {useState, useEffect} from "react";
import { FormBtn } from "../Components/FormBtn";

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
interface formProps {
  formId: string;
}

export default function Form({formId} : formProps) {
  const formObj: form = JSON.parse(localStorage.getItem(formId) ?? `{"id": ${Number(new Date())}, "title": "Template Form", "elements": [{"id": "1","label": "Name","type": "text"}, {"id": "2","label": "Birthday","type": "date"}, {"id": "3","label": "E-mail","type": "email"}]}`);
  const [formTitle, setFormTitle] = useState<string>(formObj.title);
  const [formFields, setFormFields] = useState<formFieldElement[]>(formObj.elements);
  const [newField, setNewField] = useState<string>("");
  const deleteFormFieldElement = (idDelete: number) => {
    return formFields.filter((item: formFieldElement) => item.id !== idDelete);
  }
  useEffect(() => {
    console.log("updating localStorage..")
    localStorage.setItem(formObj.id.toString(), JSON.stringify({...formObj, title: formTitle, elements: formFields}))
  }, [formFields, formTitle, formObj])
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <input className="border-2 border-grey-200 rounded-md p-2 flex-1" type="text" value={formTitle} onChange={(e) => {
            setFormTitle(e.target.value);
            console.log(formTitle);
        }}/>
      </div>

      { 
        formFields.map(item => {
          return (
            <React.Fragment key={item.id}>
              <label className="text-m font-medium my-2" htmlFor={item.label}>{item.label}</label>
              <div className="flex flex-row justify-between gap-2">
                <input className="border-2 border-grey-200 rounded-md p-2 flex-1" id={item.label} type={item.type} />
                <FormBtn innerText="Delete" onClick={(_)=>{
                  setFormFields(deleteFormFieldElement(item.id));
                }} className="self-center w-1/5"/>
              </div>
            </React.Fragment>
          )
        }) 
      }
      <div className="flex flex-row gap-2 h-15 mt-8 mb-2 py-2 border-y-2 border-dashed">
        <input className="border-2 border-grey-200 rounded-md p-2 flex-1" type="text" id="addField" placeholder="Add Field" onChange={
          (e) => {
            setTimeout(
              () => {
                setNewField(e.target.value);
              }, 500
            )
          }
        }/>
        <FormBtn innerText="Add" className="w-1/5"onClick={(_) => {
          setFormFields([...formFields, {id: Number(new Date()), label: newField, type: "text"}])
        }}/>
      </div>
      <FormBtn innerText='Save Form Changes' onClick= {(e) => {
        let currentForm:form = {...formObj, elements: formFields};
        localStorage.setItem(currentForm.id.toString(), JSON.stringify({...formObj, title: formTitle, elements: formFields}))
      }}/>
    </div>
  )
}