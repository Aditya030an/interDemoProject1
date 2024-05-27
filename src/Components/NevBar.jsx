import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMicrosoft } from "react-icons/fa6";
const NevBar = () => {
  return (
    <div>
      <div className=" border-b-2 border-gray-300 border-solid flex pt-5 pb-3 px-7">
        {/* logo */}
        <div className="max-w-40 w-full">
          <img
            src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png"
            alt="unfluke"
            className="p-2"
          />
        </div>
        {/* icon 3 */}
        <div className=" w-full flex items-center justify-end">
          <div className=" flex items-center justify-end mr-8 p-2 gap-12">
            <div className="max-w-10 w-full ">
              <div className=" flex items-center justify-center gap-2 ">
                <img
                  src="https://unfluke.in/static/media/bell-icon.d99e8edc.png"
                  alt="bell"
                  className="w-4/5"
                />
                <div className=" text-2xl text-stone-800">
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>
            <div className="max-w-10 w-full">
              <div className=" flex items-center justify-center gap-2 ">
                <img
                  src="https://unfluke.in/static/media/coin.9bfaef7e.jpeg"
                  alt="coin"
                  className="w-4/5"
                />
                <div>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="max-w-12 w-full">
              <div className=" flex items-center justify-center gap-2">
                <img
                  src="https://unfluke.in/static/media/monkey.5456259d.jpg"
                  alt="user"
                  className="w-4/5 border-2 border-solid border-black rounded-full"
                />
                <div className=" text-2xl text-stone-800">
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-1 px-14">
        <ul className=" flex gap-9 items-center justify-start text-xl font-medium text-black p-5">
          <li className="flex items-center justify-center gap-4">
            <FaMicrosoft />
            <p>LeaderBoard</p>
          </li>
          <li className=" flex items-center justify-center gap-2">
            <p>Historical Trading</p>
            <div className=" text-2xl text-stone-800">
              <IoMdArrowDropdown />
            </div>
          </li>
          <li>
            <p>Historical Chart</p>
          </li>
          <li>
            <p>Scanners</p>
          </li>
          <li>
            <p>Alerts</p>
          </li>
          <li>
            <p>Basic Backtest</p>
          </li>
          <li>
            <p>Advance Backtest</p>
          </li>
          <li>
            <p>Pricing</p>
          </li>
          <li>
            <p>My Earning</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NevBar;
