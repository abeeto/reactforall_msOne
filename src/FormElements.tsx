import React, {useState, useRef} from "react";
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

interface FormTitleProps {
  formTitle: string;
  setFormTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormElements({formTitle, setFormTitle} : FormTitleProps) {
  const [newField, setNewField] = useState<string>("");
  const [formFieldElements, setFormFieldElements] = useState<formFieldElement[]>([
    {id: 1, label: "First Name", type: "text"}, 
    {id: 2, label: "Last Name", type: "text"}, 
    {id: 3, label: "Email", type: "email"}, 
    {id: 4, label: "Date of Birth", type: "date"}
  ]);
  const deleteFormFieldElement = (idDelete: number) => {
    return formFieldElements.filter((item: formFieldElement) => item.id !== idDelete);
  }
  const titleRef = useRef(null);
    return (
      <div className="flex flex-col">
        <div className="flex flex-row">
          <input className="border-2 border-grey-200 rounded-md p-2 flex-1" type="text" ref={titleRef} value={formTitle} onChange={(e) => {
            setFormTitle(e.target.value);
            console.log(formTitle);
          }}/>
        </div>

        { 
          formFieldElements.map(item => {
            return (
              <React.Fragment key={item.id}>
                <label className="text-m font-medium my-2" htmlFor={item.label}>{item.label}</label>
                <div className="flex flex-row justify-between gap-2">
                  <input className="border-2 border-grey-200 rounded-md p-2 flex-1" id={item.label} type={item.type} />
                  <FormBtn innerText="Delete" onClick={(_)=>{
                    setFormFieldElements(deleteFormFieldElement(item.id));
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
            setFormFieldElements([...formFieldElements, {id: Number(new Date()), label: newField, type: "text"}])
          }}/>
        </div>
        <FormBtn innerText='Submit' onClick= {(e) => {
          e.preventDefault();
          let currentForm:form = {id: Number(new Date()), title: formTitle, elements: formFieldElements};
          localStorage.setItem(currentForm.id.toString(), JSON.stringify({title: currentForm.title, elements: currentForm.elements}))
        }}/>
      </div>
    )
}