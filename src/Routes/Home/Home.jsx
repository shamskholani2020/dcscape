import React from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <div className="bg-gray-50 w-full h-full flex flex-col gap-5 justify-center items-start   p-5 md:p-20 ">
        {/* Intro */}
        <div
          className="
        w-full
        bg-white
        
        flex
        flex-col
        md:flex-row
        justify-between
        items-start
        md:items-center
        rounded-lg
        shadow-sm
        p-10
        "
        >
          <div
            className="
            flex
            flex-col
            "
          >
            <h1 className="text-bold text-md  text-gray-500">Welcome Back,</h1>
            <h1 className="text-indigo-800 text-2xl">Shames Kholani</h1>
          </div>
          <div className="">
            <h1 className="text-md md:text-xl text-gray-500 m-2 md:m-0">
              Hope You Doing Well
            </h1>
          </div>
        </div>
        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3  auto-rows-max gap-5  w-full">
          <Link to={"/products"}>
            <div className="p-20 h-52 font-semibold hover:rounded-2xl text-white text-2xl bg-gradient-to-tr from-orange-200 to-purple-700  rounded-2xl shadow-sm  transition-all ease-out duration-300 hover:m-2 hover:p-5 hover:shadow-md">
              Products
            </div>
          </Link>
          <div className="p-20  font-semibold hover:rounded-2xl text-indigo-500 text-2xl  bg-white rounded-2xl shadow-sm  transition-all ease-out duration-300 hover:m-2 hover:p-5 hover:shadow-md lg:row-span-2">
            Designs
          </div>
          <div className="p-20 h-52 font-semibold hover:rounded-2xl text-indigo-500 text-2xl  bg-white rounded-2xl shadow-sm  transition-all ease-out duration-300 hover:m-2 hover:p-5 hover:shadow-md">
            Categories and Collections
          </div>
          <div className="p-20 h-52 font-semibold hover:rounded-2xl text-indigo-500 text-2xl  bg-white rounded-2xl shadow-sm  transition-all ease-out duration-300 hover:m-2 hover:p-5 hover:shadow-md">
            Orders
          </div>
          <div className="p-20 h-52 font-semibold hover:rounded-2xl text-indigo-500 text-2xl  bg-white rounded-2xl shadow-sm  transition-all ease-out duration-300 hover:m-2 hover:p-5 hover:shadow-md lg:col-span-1 ">
            Users
          </div>
          <button
            onClick={(e) => {
              localStorage.removeItem("token");
              nav("/");
            }}
            className="p-20 h-52 font-semibold hover:rounded-2xl text-indigo-500 text-2xl  bg-white rounded-2xl shadow-sm  transition-all ease-out duration-700 hover:m-2 hover:p-5 hover:shadow-md lg:col-span-3"
          >
            Settings
          </button>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
