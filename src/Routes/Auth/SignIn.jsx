import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { base, config } from "../../axios";

export default function SignIn() {
  const nav = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-bl from-indigo-500 to-blue-400">
      <div
        className="
      flex 
      flex-col 
      w-3/4 
      md:w-1/3 
      p-5 
      bg-white 
      shadow-sm 
      rounded-md"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            var data = {
              email: e.target[0].value,
              password: e.target[1].value,
            };
            axios
              .post(`${base}/admin/signin`, data, config)
              .then((value) => {
                if (value.data["doc"] != null) {
                  localStorage.setItem("token", value.data["doc"]["_id"]);
                  nav("/");
                }
              })
              .catch((err) => alert(`Error: ` + err));
          }}
        >
          <h1 className="text-black font-medium text-2xl">Sign In</h1>
          <p className="mt-2 text-gray-500 font-light mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            expedita vitae iure?
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full text-black h-12 rounded-sm shadow-sm bg-gray-100 px-4 mb-4"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full text-black h-12 rounded-sm shadow-sm bg-gray-100 px-4 mb-4"
          />
          <input
            type="submit"
            className="w-full text-gray-50 bg-blue-400 h-12 rounded-sm shadow-sm px-4 mb-4"
            value={"Sign In"}
          />
        </form>
      </div>
    </div>
  );
}
