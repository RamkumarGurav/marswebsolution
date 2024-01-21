"use client";

import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function MobileEnquire() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="h-full ">
      <div
        className="bg-[#0293C2] h-full grid place-items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className=" text-md font-semibold cursor-pointer text-white">
          Enquire Here
        </span>
      </div>

      <div
        className={`py-8 px-4 bg-white z-[999] fixed min-w-[100%] min-h-screen left-0 sm:hidden  
        ${
          open ? "top-0 " : "top-full"
        } transition-all ease-in-out duration-700 `}
      >
        <button
          className="bg-blue-500 rounded text-white p-1 
          absolute right-2 top-4"
          onClick={() => setOpen(false)}
        >
          <IoCloseOutline size={20} className="text-white font-semibold " />
        </button>
        <form className="bg-white  flex flex-col ">
          <div className="gap-2 flex flex-col">
            <h1 className="text-lg text-gray-900 font-semibold">
              Enquire Here
            </h1>
            <input
              type="text"
              placeholder="Name* "
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-gray-900 focus:outline-none focus:border-gray-900 block w-full p-2.5 py-2    "
            />
            <input
              type="text"
              placeholder="Email ID* "
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-gray-900 focus:outline-none focus:border-gray-900 block w-full p-2.5 py-2 "
            />
            <input
              type="tel"
              placeholder="Mobile Number* "
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-gray-900 focus:outline-none focus:border-gray-900 block w-full p-2.5 py-2 "
            />
            <textarea
              placeholder="Message*"
              cols={10}
              rows={4}
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-gray-900 focus:outline-none focus:border-gray-900 block w-full p-2.5 py-2 "
            />
            <div>
              <button
                className="px-4 py-2 text-sm text-white bg-blue-700 inline-block rounded hover:bg-blue-700/80"
                type="submit"
              >
                send message
              </button>
            </div>
            <p className="text-xs text-gray-700 leading-tight">
              This site is protected by reCAPTCHA and the Google{" "}
              <Link
                target="_blank"
                title="Google Privacy Policy"
                href="https://policies.google.com/privacy"
                className="text-blue-500/80 hover:text-fuchsia-500/90 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                target="_blank"
                title="Google Terms of Service"
                href="https://policies.google.com/terms"
                className="text-blue-500/80 hover:text-fuchsia-500/90 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              apply.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
