import logo from "./logo.svg";
interface innerText {
  innerText: string;
}
export default function Heading({innerText} : innerText) {
    return (
      <div className="flex flex-row gap-2 mb-3">
        <img src={logo} className="animate-spin flex-shrink-1 flex-grow-0 w-16" alt="logo" />
        <h1 className="mx-5 text-center text-xl font-medium flex-grow-1 self-center">{innerText}</h1>
        <div className="flex flex-col gap-1"></div>
      </div>
    );
}