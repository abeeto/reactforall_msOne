import { MouseEventHandler, SetStateAction } from "react";
import logo from "./logo.svg";

export default function FormHome({setSelectedFormKey} :{setSelectedFormKey: React.Dispatch<SetStateAction<string>>}) {
    const handleFormSelect : MouseEventHandler<HTMLDivElement> = (e) => {
        let key = e.currentTarget.dataset.key;
        if (key) {
            setSelectedFormKey(key);
        }
    }

    return (
        <div className="flex p-3 gap-2">
            <img src={logo} alt="react logo" className="h-20 w-auto flex-shrink-1"/>
            <div className="flex flex-col flex-1">
            <div className="">Available Forms:</div>
            {
                Object.keys(localStorage).map((key) => {
                    let item = JSON.parse(localStorage.getItem(key) as string);
                    return (<div className="text-xl font-thin mb-5 p-3 bg-slate-300" key={key} data-key={key} onClick={handleFormSelect}>{item.title} </div>)
                })
            }
            </div>
        </div>
    )
}