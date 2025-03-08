import React, {useState} from "react";
import { FormBtn } from "./FormBtn";
import { text } from "stream/consumers";

interface formItem {
  id: number, 
  label: string, 
  type:string
}

export default function FormElements() {
  const [newField, setNewField] = useState("");
  const [formItems, setFormItems] = useState([
    {id: 1, label: "First Name", type: "text"}, 
    {id: 2, label: "Last Name", type: "text"}, 
    {id: 3, label: "Email", type: "email"}, 
    {id: 4, label: "Date of Birth", type: "date"}
  ]);
  const deleteFormItem = (idDelete: number) => {
    return formItems.filter((item: formItem) => item.id !== idDelete);
  }
    return (
      <div className="flex flex-col">
        { 
          formItems.map(item => {
            return (
              <React.Fragment key={item.id}>
                <label className="text-m font-medium my-2" htmlFor={item.label}>{item.label}</label>
                <div className="flex flex-row justify-between gap-2">
                  <input className="border-2 border-grey-200 rounded-md p-2 flex-1" id={item.label} type={item.type} />
                  <FormBtn innerText="Delete" onClick={(_)=>{
                    setFormItems(deleteFormItem(item.id));
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
            setFormItems([...formItems, {id: Number(new Date()), label: newField, type: "text"}])
          }}/>
        </div>
      </div>
    )
}