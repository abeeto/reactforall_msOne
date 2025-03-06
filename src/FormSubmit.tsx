import React from "react";

export default function FormSubmit({innerText} : {innerText: string}) {
    return (
        <input type="submit" className="bg-blue-600 text-white font-bold p-2 max-w-20 rounded-md mt-5 hover:bg-blue-500 hover:cursor-pointer" value={innerText}/>
    )
}