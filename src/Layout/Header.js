import React, { useState } from "react";
import {
  FaBars,
  FaDelicious,
  FaFileArchive,
  FaFirstOrder,
  FaHandsHelping,
  FaHeart,
  FaLayerGroup,
  FaWallet,
  FaWindowClose,
} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
export default function Header() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className=" flex justify-between items-center mx-auto p-4">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <FaBars size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 p-1 rounded-full">
          <p className="bg-black text-white py-2 px-3 rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <FaSearch size={25} />
          <input
            className="bg-transparent p-2 rounded-full w-full focus:outline-none"
            type="text"
            placeholder="Search foods"
          ></input>
        </div>
        <button className="px-4 py-2 hidden rounded-full bg-black text-white lg:flex items-center ">
          <FaCartPlus size={20} className="text-white mr-2" />
          Cart
        </button>
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>
        ) : (
          ""
        )}
        {nav ? (
          <div className="bg-white w-[300px] h-screen z-10 top-0 left-0 fixed">
            <FaWindowClose
              onClick={() => setNav(!nav)}
              size={30}
              className="absolute right-4 top-4 cursor-pointer"
            />
            <h1 className="text-2xl  px-2">
              Best <span className="font-bold">Eats</span>
            </h1>
            <nav>
              <ul className=" p-4 text-gray-800">
                <li className="flex text-xl py-4 items-center">
                  <FaDelicious className="mr-2" />
                  Best Ones
                </li>
                <li className="flex text-xl py-4 items-center">
                  <FaFileArchive className="mr-2" />
                  Promotions
                </li>
                <li className="flex text-xl py-4 items-center">
                  <FaHeart className="mr-2" />
                  Favourite
                </li>
                <li className="flex text-xl py-4 items-center">
                  <FaHandsHelping className="mr-2" />
                  Help
                </li>
                <li className="flex text-xl py-4 items-center">
                  <FaWallet className="mr-2" />
                  Wallet
                </li>
                <li className="flex text-xl py-4 items-center">
                  <FaLayerGroup className="mr-2" />
                  Invite Friends
                </li>
                <li className="flex text-xl py-4 items-center">
                  <FaFirstOrder className="mr-2" />
                  Orders
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
