import React, { MouseEventHandler } from "react";

export function FormBtn({onClick, innerText} :{onClick: MouseEventHandler, innerText: string}) {
    return (
        <button onClick={onClick} className="bg-blue-600 text-white font-bold p-2 max-w-30 rounded-md mt-5 hover:bg-blue-500 hover:cursor-pointer">
            {innerText}
        </button>
    )
}