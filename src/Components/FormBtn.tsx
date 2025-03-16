import React, { MouseEventHandler } from "react";

export function FormBtn({onClick, innerText, className} :{onClick: MouseEventHandler, innerText: string, className?: string}) {
    return (
        <button onClick={onClick} className= {`bg-blue-600 text-white font-bold p-2 min-w-30 flex-initial rounded-md hover:bg-blue-500 hover:cursor-pointer ${className}`}>
            {innerText}
        </button>
    )
}