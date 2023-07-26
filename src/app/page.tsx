import Image from "next/image";
import React from "react";
import image from "@/assets/image/png/cleaner.png";
import { CButton } from "@/components/button";
import { BsFillTelephoneFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-between">
        {/* section 1  */}
        <div className="flex flex-col lg:flex-row px-5 sm:px-24">
          <div className="lg:w-[50%] lg:h-[500px] flex flex-col order-2 lg:order-1 xl:order-1">
            <h1 className="text-5xl font-medium my-10 sm:my-20">
              Our Services
            </h1>
            <h5 className="text-lg w-auto sm:w-[400px]">
              Are you ready to schedule your first cleaning? Or maybe you still
              have some questions?
            </h5>
          </div>
          <div className="sm:h-[500px] w-full lg:w-[50%] order-1 lg:order-2 xl:order-2">
            <center>
              <Image
                alt="image"
                src={image}
                width={500}
                height={500}
                className="object-cover "
              />
            </center>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex flex-col sm:flex-row px-5 sm:px-24 justify-between my-10 items-center sm:items-start">
          <h5 className="text-gray-500 text-xs font-light sm:w-[50%] mb-5 sm:mb-0">
            We have all the answers!
          </h5>
          <h5 className="text-gray-500 text-xs font-light sm:w-[50%]">
            <div className="sm:w-[80%] leading-loose">
              Our Support Team is here for you. Give us a call or shoot us an
              email during business hours for immediate support. You can also
              reach out to us after hours and we will get back to you as quickly
              as possible.
            </div>
          </h5>
        </div>
        {/* section 3 */}
        <div className="flex flex-col sm:flex-row px-5 sm:px-24 justify-between my-10">
          <div className="flex flex-col items-center sm:items-start sm:w-[50%] mb-4 sm:mb-0">
            <h1 className="mb-5">Contact us</h1>
            <div>
              <div className="flex flex-row items-center text-xs font-bold mb-2">
                <span className="mr-2 rounded-full border-[1px] border-black p-1 ">
                  <MdEmail fontSize={10} />
                </span>
                <h5>support@oboosho.com</h5>
              </div>

              <div className="flex flex-row items-center text-xs font-bold">
                <span className="mr-2 rounded-full border-[1px] border-black p-1 ">
                  <BsTelephoneFill fontSize={10} />
                </span>
                <h5>{`(917) 388-6727`}</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:w-[50%]">
            <h1 className="mb-5">Business hours are in EST</h1>
            <div className="flex flex-col  sm:w-[50%]">
              <div className="flex flex-row justify-between mb-2.5 sm:mb-0">
                <h5 className="text-xs font-bold mr-5">Monday - Friday</h5>
                <h5 className="text-xs font-bold">
                  8am <span>-</span> 9pm
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="text-xs font-bold">
                  Saturday <span>-</span> Sunday
                </h5>
                <h5 className="text-xs font-bold">
                  9am <span>-</span> 6pm
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div className="flex flex-col lg:flex-row justify-between mt-10">
          <div className="lg:w-[50%] p-10 sm:p-20 bg-blue-800 flex flex-col items-center sm:items-start">
            <h1 className="text-5xl text-white font-medium mb-10 text-center sm:text-start">
              Still have a questions?
            </h1>
            <h5 className="text-gray-200 text-xs font-light leading-loose mb-32 xl:w-[550px]">
              Can't find the answer you're looking for? Call us at (917)
              388-6727 or email support@oboosho.com and we'll tell you oumelven!
            </h5>
            <div className="grid self-center">
              <CButton
                children="Write E-Mail"
                className="py-4 px-7 rounded-md bg-white text-sm"
              />
            </div>
          </div>
          <div className="lg:w-[50%]  bg-gray-100 p-10 sm:p-20 flex flex-col items-center sm:items-start">
            <h1 className="text-5xl text-black font-medium mb-10 text-center sm:text-start">
              Book your cleaning
            </h1>
            <h5 className="text-gray-500 text-xs font-light leading-loose mb-32 w-auto xl:w-[550px]">
              Leave for work in the morning (or take a spa day) we'll have your
              place clean and looking great when you back. We won't even tell
              anyone that we were there. that'll be between us.
            </h5>
            <div className="grid self-center">
              <CButton
                children="Book your cleaing services today!"
                className="py-4 px-10 rounded-md bg-blue-800 text-sm text-white font-thin"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
