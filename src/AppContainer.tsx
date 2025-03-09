import React from "react";

export default function AppContainer(props: {children: React.ReactElement[]}) {
    return (
        <div className="flex h-screen bg-blue-100 items-start p-5 justify-center">
            <div className="flex flex-col gap-2 flex-shrink-1 basis-2/4 bg-white shadow-lg rounded-xl p-7">
                {props.children}
            </div>
        </div>
    )
}
