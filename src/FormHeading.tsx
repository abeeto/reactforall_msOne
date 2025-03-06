import logo from "./logo.svg";
export default function FormHeading() {
    return (
      <div className="flex flex-row gap-2">
        <img src={logo} className="animate-spin flex-shrink-1 flex-grow-0 w-16" alt="logo" />
        <h1 className="mx-5 text-center text-xl font-medium flex-grow-1">Welcome to Lesson 5 of $react-typescript with <br/> #tailwindcss</h1>
        <div className="flex flex-col gap-1"></div>
      </div>
    );
}