import Link from "next/link";
import React from "react";
import { CButton } from "../button";
import { AiOutlineUser } from "react-icons/ai";
type Props = {};

export default function AppHeader({}: Props) {
  return (
    <div className="sticky top-0 w-full p-5 z-20 header">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-between w-[300px]">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold -mt-1">oboosho</h1>
          </Link>
          <div className="hidden sm:flex flex-row items-center justify-between text-sm font-light text-gray-500">
            <Link href={"/"}>
              <h5>Home</h5>
            </Link>
            <Link href={"/"}>
              <h5 className="mx-2">Cleaning</h5>
            </Link>
            <Link href={"/"}>
              <h5>Services</h5>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-[auto] sm:w-[115px]">
          <CButton
            prefix={<AiOutlineUser />}
            children="Login"
            className="bg-black rounded-full px-2 py-1 text-white text-xs font-light hidden sm:block"
          />
          <div className="flex flex-row items-center text-xl align-middle mb-3 cursor-pointer">
            <span>.</span>
            <span className="mx-1">.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
