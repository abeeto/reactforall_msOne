import { SetStateAction, useState} from "react";
import logo from "./logo.svg";


interface HomeProps {
    selectedFormKey: string; 
    setSelectedFormKeyCB: React.Dispatch<SetStateAction<string>>
}

export default function Home({selectedFormKey, setSelectedFormKeyCB}: HomeProps) {
    const handleFormSelect = (key  : string ) => {
        if (key) {
            if (key === selectedFormKey) {
                setSelectedFormKeyCB("");
                return;
            }
            setSelectedFormKeyCB(key);
        }
    }
    const handleFormDelete = () => {
        setAvailableForms(availableForms.filter((currentKey) => currentKey !== selectedFormKey));
        localStorage.removeItem(selectedFormKey);
    }

    const [availableForms, setAvailableForms] = useState(Object.keys(localStorage));
    return (
        <div className="flex flex-col box-border">
            <div className="flex flex-row p-3 gap-2">
                <img src={logo} alt="react logo" className="h-20 w-auto flex-shrink-1"/>
                <div className="flex flex-col flex-1">
                    <div className="text-lg">Available Forms:</div>
                    {
                        availableForms.map((key) => {
                            let item = JSON.parse(localStorage.getItem(key) as string);
                            return (
                                <div key={key} data-key={key} onClick={() => handleFormSelect(key)}  className={`text-xl font-thin mb-5 p-3 bg-gray-100 rounded-md flex-grow ${key === selectedFormKey && "border-blue-500 border-2"}`}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                    <div className="flex-grow bg-gray-50 hover:cursor-pointer hover:bg-gray-1 rounded-md font-normal text-lg text-center p-3 mb-4" onClick={()=> {

                    }}> Create Form</div>
                    <div className="flex flex-row justify-start gap-2">
                        <div className="text-xl cursor-pointer font-medium mb-2 py-1 px-4 flex-1-1-[15vw] bg-blue-500 hover:bg-blue-600 text-center rounded-md text-white">Open</div>
                        <div className="text-xl cursor-pointer font-medium mb-2 py-1 px-4 flex-1-1-[15vw] bg-red-500 hover:bg-red-600 text-center rounded-md text-white" onClick={handleFormDelete}>Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}