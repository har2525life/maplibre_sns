import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet } from "react-router-dom";

function Header() {
  const [isNav, setIsNav] = useState(false);
  return (
    <>
      <div className="relative">
        <header className=" h-14 flex items-center justify-between px-2.5">
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={() => setIsNav(!isNav)}
              className="flex flex-col items-center justify-center z-10 w-10 h-10 space-y-1.5 rounded-full hover:bg-gray-200"
            >
              <div className="w-5 h-[1px] bg-black" />
              <div className="w-5 h-[1px] bg-black" />
              <div className="w-5 h-[1px] bg-black" />
            </button>
            <h1 className="p-4 font-bold">Maplibre</h1>
          </div>
          <div className="border rounded-full flex">
            <input
              type="text"
              className="px-4 py-2 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="検索"
            />
            <button className="bg-gray-200 hover:bg-gray-300 block rounded-r-full px-6">
              <AiOutlineSearch />
            </button>
          </div>
          <div>
            <button>通知</button>
            <button>icon</button>
          </div>
        </header>
        {isNav && (
          <div
            className={`absolute top-0 left-[-100%] bg-blue-500 h-screen ease-linear duration-300`}
          >
            <div className="flex justify-center items-center ps-2.5 pe-10">
              <button
                type="button"
                onClick={() => setIsNav(!isNav)}
                className="flex flex-col items-center justify-center z-10 w-10 h-10 space-y-1.5 rounded-full hover:bg-gray-200"
              >
                <div className="w-5 h-[1px] bg-black" />
                <div className="w-5 h-[1px] bg-black" />
                <div className="w-5 h-[1px] bg-black" />
              </button>
              <h1 className="p-4 font-bold">Maplibre</h1>
            </div>
            <nav className="px-3">
              <ul className="space-y-3">
                <li className="bg-white rounded-md py-2 hover: cursor-pointer">
                  ホーム
                </li>
                <li className="bg-white rounded-md py-2 hover: cursor-pointer">
                  ホーム
                </li>
                <li className="bg-white rounded-md py-2 hover: cursor-pointer">
                  ホーム
                </li>
                <li className="bg-white rounded-md py-2 hover: cursor-pointer">
                  ホーム
                </li>
                <li className="bg-white rounded-md py-2 hover: cursor-pointer">
                  ホーム
                </li>
                <li className="bg-white rounded-md py-2 hover: cursor-pointer">
                  ホーム
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Header;
