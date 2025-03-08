import React from "react";

interface formItems {
  id: number, 
  label: string, 
  type:string
}


export default function FormElements({formItems} : {formItems: formItems[]}) {
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