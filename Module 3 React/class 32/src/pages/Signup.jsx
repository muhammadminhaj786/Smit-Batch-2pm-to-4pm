import React, { useState } from "react";
import { logo } from "../images.js";

import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import { Input } from "@heroui/input";
import MyInput from "../component/MyInput.jsx";

import MyToast from "../component/MyToast.jsx";
import { Bounce, toast } from "react-toastify";
import { supabase } from "../config/supabase.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(role)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,

        closeOnClick: true,

        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(data);
      const { error } = await supabase
        .from('users')
        .insert({ uid: data.user.id, Name: firstName, role: role, email: email })
       
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row  items-center">
      <div className="md:w-[50%] w-full h-[160px] md:h-full">
        <img className="w-full h-full" src={logo} alt="" />
      </div>
      <div className="md:min-h-screen h-full flex items-center justify-center  md:w-[50%] w-full">
        <form onSubmit={handleSignup} className="h-full w-[60%]  ">
          <h1 className="md:text-3xl text-center font-semibold">
            Create an <span className="text-red-500">account</span>{" "}
            <span className="text-4xl font-bold">.</span>
          </h1>
          <Input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="mt-4 border border-zinc-200 rounded-xl"
            height={50}
            placeholder="Enter a First Name"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mt-4 border border-zinc-200 rounded-xl"
            placeholder="Enter a Email"
          />
          <select onChange={(e) => setRole(e.target.value)} className="mt-4 border border-zinc-200 rounded-xl w-[100%] h-[45px] p-2 outline-none bg-zinc-100 text-foreground-500">
            <option defaultValue={"Role"} value={"Buyer"}>select a Role</option>
            <option value={"vendor"}>vendor</option>
            <option value={"buyer"}>buyer</option>
          </select>
          <MyInput
            changeFunc={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-4 border border-zinc-200 rounded-xl"
            placeholder="Enter a Password"
          />

          <p className="flex flex-col md:flex-row justify-between gap-4 mt-1 p-2 items-center">
            <span className="text-small hover:underline hover:text-red-500">
              <Link to="/signin">Already have an account ?</Link>
            </span>
            <span className="text-small text-red-500 hover:underline hover:text-black">
              Forgot password
            </span>
          </p>
          <Button type="submit" className="bg-red-500 text-white w-[100%] mt-4">
            Create Account
          </Button>
          <MyToast />
        </form>
      </div>
    </div>
  );
};

export default Signup;
