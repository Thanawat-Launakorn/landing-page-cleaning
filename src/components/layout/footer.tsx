import React from "react";

type Props = {};

export default function AppFooter({}: Props) {
  return (
    <div className="bg-white p-20 shadow-xl border-[1px] w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-start justify-items-stretch">
        <div className="flex flex-col items-center sm:items-start ">
          <h1 className="text-2xl font-bold -mt-1 mb-3">oboosho</h1>
          <p className="w-[200px] text-xs text-gray-500 font-light leading-relaxed">
            Copyright &copy 2023 Oboosho all right reserved
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start ">
          <b className="font-normal mb-3 text-sm">The Goods</b>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            About us
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Careers
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Contact Us
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Become a Cleaner
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start ">
          <b className="font-normal mb-3 text-sm">Our Services</b>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Home Cleaning
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Office Ceaning
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            50 Point Checklist
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Other menu point
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <b className="font-normal mb-3 text-sm">Connect</b>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Twitter
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Fackebook
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Instragram
          </p>
          <p className="w-auto sm:w-[200px] text-xs text-gray-500 font-light leading-loose">
            Yelp
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <b className="font-normal mb-3 text-sm text-center sm:text-start">
            We clean, you relax. it's that simple!
          </b>
          <div className="grid grid-cols-4 gap-x-2 xl:place-self-end">
            <div className="rounded-full bg-blue-800 w-10 h-10 text-transparent">
              props
            </div>
            <div className="rounded-full bg-blue-800 w-10 h-10 text-transparent ">
              props
            </div>
            <div className="rounded-full bg-blue-800 w-10 h-10 text-transparent">
              props
            </div>
            <div className="rounded-full bg-blue-800 w-10 h-10 text-transparent">
              props
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
