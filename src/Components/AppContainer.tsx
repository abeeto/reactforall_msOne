import React from "react";
import Heading from "./Heading";
export default function AppContainer(props: {children: React.ReactElement[]}) {
    return (
        <div className="flex h-screen bg-blue-100 items-start p-5 justify-center">
            <div className="flex flex-col gap-2 flex-shrink-1 basis-1/3 md:basis-1/2 sm:basis-[100%] bg-white shadow-lg rounded-xl p-7">
                <Heading/>
                {props.children}
            </div>
        </div>
    )
}
