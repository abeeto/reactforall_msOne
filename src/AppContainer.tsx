import React from "react";
import { createRoot } from "react-dom/client";

export default function AppContainer(props: {children: React.ReactElement}) {
    return (
        <div className="flex h-screen bg-blue-100 items-start p-5 justify-center">
            <div className="flex flex-col gap-2 flex-grow-1 w-500 bg-white shadow-lg rounded-xl pl-5 pr-12 py-5">
                {props.children}
            </div>
        </div>
    )
}
