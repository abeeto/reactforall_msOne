import { MouseEventHandler, SetStateAction } from "react";
import logo from "./logo.svg";

export default function Home({setSelectedFormKey} :{setSelectedFormKey: React.Dispatch<SetStateAction<string>>}) {
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
                    return ( 
                    <div className="flex flex-row max-w-full justify-end" key={key}>
                        <div className="text-xl font-thin mb-5 p-3 bg-slate-300 flex-grow rounded-sm">{item.title} </div>
                        <div className="text-xl cursor-pointer font-medium mb-5 p-3 bg-blue-500 hover:bg-blue-600 grow-1 text-white" data-key={key} onClick={handleFormSelect}>Select</div>
                        <div className="text-xl cursor-pointer font-medium mb-5 p-3 bg-red-500 hover:bg-red-600 grow-1 rounded-sm text-white" data-key={key}>Delete</div>
                    </div>)
                })
            }
            </div>
        </div>
    )
}