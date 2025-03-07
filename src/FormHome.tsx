import React from "react";
import logo from "./logo.svg";

export default function FormHome() {
    return (
        <div className="flex p-3">
            <img src={logo} alt="react logo" className="h-48 w-auto"/>
            <p className="self-center"> Welcome to the form home page </p>
        </div>
    )
}