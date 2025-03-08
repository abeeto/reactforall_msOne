import React from "react";

interface formItem {
  id: number, 
  label: string, 
  type:string
}

const formItems = [{id: 1, label: "First Name", type: "text"}, {id: 2, label: "Last Name", type: "text"}, {id: 3, label: "Email", type: "email"},  {id: 4, label: "Date of Birth", type: "date"}];

export default function FormElements() {
    return (
        <div className="flex flex-col">
        { 
            formItems.map(item => {
              return (
                <React.Fragment key={item.id}>
                  <label className="text-m font-medium my-2" htmlFor={item.label}>{item.label}</label>
                  <input className="border-2 border-grey-200 rounded-md p-2" id={item.label} type={item.type} />
                </React.Fragment>
              )
            })
        }   
        </div>

    )
}