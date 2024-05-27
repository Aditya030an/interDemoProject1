import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbStepOut } from "react-icons/tb";
import { TbStepInto } from "react-icons/tb";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const Body = () => {
  return (
    <div>
      {/* heading */}
      <div className=" flex items-center justify-center mt-4">
        <h1 className="text-7xl font-medium  p-5 text-gray-700">
          LeaderBoards
        </h1>
      </div>

      {/* table container*/}
      <div className=" mt-12 mx-20 mb-10">
        {/* heading */}
        <div className="border-2 border-solid border-pink-500 rounded-lg flex items-center justify-between p-4 bg-gradient-to-r from-pink-200 to-white shadow-gray-500 shadow-md">
          <h1 className="text-5xl  font-semibold text-sky-950">
            Basic Backtest
          </h1>

          <div className="flex items-center justify-center border-2 border-solid border-pink-400 rounded-md overflow-hidden">
            <span className="border-r-2 border-solid border-pink-400 px-4 py-4 text-2xl font-semibold bg-transparent text-black ">
              Slippage
            </span>
            <div className=" h-14 flex justify-center items-center ">
              <select className="text-2xl font-medium px-2  bg-transparent cursor-pointer h-full border-none outline-none text-center text-black">
                <option className="text-black">0%</option>
                <option className="text-black">0.5%</option>
                <option className="text-black">1%</option>
              </select>
            </div>
          </div>
        </div>

        {/* table contend */}
        <div className="border-4 border-blue-300 mt-7 rounded-lg shadow-pink-200 shadow-md p-1">
          <table className=" w-full ">
            <thead className="  h-20">
              <tr className="text-2xl bg-indigo-950 text-white ">
                <th className=" ">Rank</th>
                <th className=" ">Name</th>
                <th className=" ">Calmer Ration</th>
                <th className=" ">Overall Profit</th>
                <th className=" ">Avg. Daily Profit</th>
                <th className=" ">Win% (Day)</th>
                <th className=" ">Price (Rs)</th>
                <th className=" ">Action</th>
              </tr>
            </thead>
            <tbody className=" text-center align-middle">
              <tr className="table-row align-middle  text-center text-2xl h-16">
                <td className="font-bold">1</td>
                <td className="">Selling with re entry</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.98
                  </div>
                </td>
                <td className=" ">35241</td>
                <td className=" ">573.9</td>
                <td className=" ">0.57</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-pink-400 text-white">Buy</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl bg-blue-100 h-16">
                <td className="font-bold">2</td>
                <td className="">Strategy_name</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.62
                  </div>
                </td>
                <td className=" ">268872.5</td>
                <td className=" ">216.31</td>
                <td className=" ">0.65</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-white">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl h-16">
                <td className="font-bold">3</td>
                <td className="">Based on Premium and</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.42
                  </div>
                </td>
                <td className=" ">354927</td>
                <td className=" ">201.6</td>
                <td className=" ">0.64</td>
                <td className=" ">500</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-pink-400 text-white">Buy</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl bg-blue-100 h-16">
                <td className="font-bold">4</td>
                <td className="">Strategy_name</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-red-700 text-3xl font-bold">
                      <TbStepInto />
                    </span>
                    2.79
                  </div>
                </td>
                <td className=" ">89374</td>
                <td className=" ">231.3</td>
                <td className=" ">0.55</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-white">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl h-16">
                <td className="font-bold">5</td>
                <td className="">Selling with re entry</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-red-700 text-3xl font-bold">
                      <TbStepInto />
                    </span>
                    3.98
                  </div>
                </td>
                <td className=" ">98863</td>
                <td className=" ">874.1</td>
                <td className=" ">0.88</td>
                <td className=" ">600</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-blue-100">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl bg-blue-100 h-16">
                <td className="font-bold">6</td>
                <td className="">Based on Premium and</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.78
                  </div>
                </td>
                <td className=" ">08080</td>
                <td className=" ">09.909</td>
                <td className=" ">09.0</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-pink-400 text-white">Buy</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl h-16">
                <td className="font-bold">7</td>
                <td className="">Strategy_name</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.98
                  </div>
                </td>
                <td className=" ">71323</td>
                <td className=" ">232.3</td>
                <td className=" ">0.69</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-blue-100">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl bg-blue-100 h-16">
                <td className="font-bold">8</td>
                <td className="">Selling with re entry</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.67
                  </div>
                </td>
                <td className=" ">99393</td>
                <td className=" ">763.3</td>
                <td className=" ">0.73</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-pink-400 text-white">Buy</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl h-16">
                <td className="font-bold">9</td>
                <td className="">Strategy_name</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-red-700 text-3xl font-bold">
                      <TbStepInto />
                    </span>
                    3.98
                  </div>
                </td>
                <td className=" ">08080</td>
                <td className=" ">09.909</td>
                <td className=" ">09.0</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-blue-100">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl bg-blue-100 h-16">
                <td className="font-bold">10</td>
                <td className="">Based on Premium and</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    2.89
                  </div>
                </td>
                <td className=" ">99382</td>
                <td className=" ">654.2</td>
                <td className=" ">0.84</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-white">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl h-16">
                <td className="font-bold">11</td>
                <td className="">Selling with re entry</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.44
                  </div>
                </td>
                <td className=" ">88000</td>
                <td className=" ">992.2</td>
                <td className=" ">0.90</td>
                <td className=" ">700</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-pink-400 text-white">Buy</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl bg-blue-100 h-16">
                <td className="font-bold">12</td>
                <td className="">Strategy_name</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-red-700 text-3xl font-bold">
                      <TbStepInto />
                    </span>
                    2.98
                  </div>
                </td>
                <td className=" ">08080</td>
                <td className=" ">09.909</td>
                <td className=" ">09.0</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-white">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl h-16">
                <td className="font-bold">13</td>
                <td className="">Based on Premium and</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-green-700 text-3xl font-bold">
                      <TbStepOut />
                    </span>
                    3.68
                  </div>
                </td>
                <td className=" ">34593</td>
                <td className=" ">743.7</td>
                <td className=" ">0.77</td>
                <td className=" ">800</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-blue-100">View</div>
                </td>
              </tr>
              <tr className="table-row align-middle  text-center text-2xl bg-blue-100 h-16">
                <td className="font-bold">14</td>
                <td className="">Strategy_name</td>
                <td className="   mt-3 h-full">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-red-700 text-3xl font-bold">
                      <TbStepInto />
                    </span>
                    3.98
                  </div>
                </td>
                <td className=" ">08080</td>
                <td className=" ">09.909</td>
                <td className=" ">09.0</td>
                <td className=" ">-</td>
                <td className="text-blue-500 cursor-pointer  ">
                  <div className="border-b-2 border-solid border-gray-500 rounded-md py-1 bg-pink-400 text-white">Buy</div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>


      <div className=" flex items-center justify-end gap-4 p-2">
        <div className="px-2 py-1 border-2 border-blue-500 bg-blue-500 text-white border-solid cursor-not-allowed rounded-md hover:bg-blue-400 hover:text-black hover:shadow-indigo-400 hover:shadow-md">
          <button className="text-4xl cursor-not-allowed"><GrFormPreviousLink/></button>
        </div>
        <ul className=" flex items-center justify-center text-2xl font-semibold gap-2">
          <li className="px-4 py-2 border-2 border-blue-200 border-solid bg-pink-200 cursor-pointer rounded-md hover:shadow-indigo-400 hover:shadow-md">1</li>
          <li className="px-4 py-2 border-2 border-blue-200 cursor-pointer hover:bg-blue-200 rounded-md hover:shadow-indigo-400 hover:shadow-md">2</li>
          <li className="px-4 py-2 border-2 border-blue-200 cursor-pointer hover:bg-blue-200 rounded-md hover:shadow-indigo-400 hover:shadow-md">3</li>
          <li className="px-4 py-2 border-2 border-blue-200 cursor-pointer hover:bg-blue-200 rounded-md hover:shadow-indigo-400 hover:shadow-md">4</li>
        </ul>
        <div className="px-2 py-1 border-2 border-blue-500 bg-blue-500 text-white border-solid  cursor-pointer rounded-md hover:bg-blue-400 hover:text-black hover:shadow-indigo-400 hover:shadow-md">
          <button className="text-4xl cursor-pointer"><GrFormNextLink/></button>
        </div>
      </div>
    </div>
  );
};

export default Body;
