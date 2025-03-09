import React, {useState} from "react";
import { FormBtn } from "./FormBtn";

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

interface FormElementsProps {
  formTitle: string;
  setFormTitle: React.Dispatch<React.SetStateAction<string>>;
  elements: formFieldElement[];
  setElements: React.Dispatch<React.SetStateAction<formFieldElement[]>>
}

export default function FormElements({formTitle, setFormTitle, elements, setElements} : FormElementsProps) {
  const [newField, setNewField] = useState<string>("");
  const deleteFormFieldElement = (idDelete: number) => {
    return elements.filter((item: formFieldElement) => item.id !== idDelete);
  }
    return (
      <div className="flex flex-col">
        <div className="flex flex-row">
          <input className="border-2 border-grey-200 rounded-md p-2 flex-1" type="text" value={formTitle} onChange={(e) => {
            setFormTitle(e.target.value);
            console.log(formTitle);
          }}/>
        </div>

        { 
          elements.map(item => {
            return (
              <React.Fragment key={item.id}>
                <label className="text-m font-medium my-2" htmlFor={item.label}>{item.label}</label>
                <div className="flex flex-row justify-between gap-2">
                  <input className="border-2 border-grey-200 rounded-md p-2 flex-1" id={item.label} type={item.type} />
                  <FormBtn innerText="Delete" onClick={(_)=>{
                    setElements(deleteFormFieldElement(item.id));
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
            setElements([...elements, {id: Number(new Date()), label: newField, type: "text"}])
          }}/>
        </div>
        <FormBtn innerText='Save Form Changes' onClick= {(e) => {
          e.preventDefault();
          let currentForm:form = {id: Number(new Date()), title: formTitle, elements: elements};
          localStorage.setItem(currentForm.id.toString(), JSON.stringify({title: currentForm.title, elements: currentForm.elements}))
        }}/>
      </div>
    )
}