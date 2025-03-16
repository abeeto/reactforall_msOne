import logo from '../logo.svg';
export default function Heading() {
    return (
      <div className="flex flex-row gap-2 mb-3 items-center justify-between mx-4 border-b-2 pb-1">
        <img src={logo} className="animate-spin flex-shrink-1 flex-grow-0 w-16" alt="logo" />
        <div className="flex gap-6">
          {
            [
              {page: "Home", url: "/"},
              {page: "About", url: "/About"}
            ].map((obj) =>
              <a href={obj.url} key={obj.url} className='text-gray-800 hover:text-blue-600 active:text-purple-500 uppercase'>{obj.page}</a>
            )
          }
        </div>
      </div>
    );
}