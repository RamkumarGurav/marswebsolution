"use client";

import Link from "next/link";
import { useState } from "react";

export default function SideEnquire() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div
      className={`fixed ${
        open ? "right-[0]" : "right-[-300px]"
      } top-[30vh] hidden sm:flex transition-all ease-in-out duration-700 z-[999]`}
    >
      <div
        className="relative w-[45px] h-[130px]  bg-[#0293C2] cursor-pointer"
        onClick={handleOpen}
      >
        <button className="rotate-90 text-lg text-white font-semibold whitespace-nowrap absolute top-[50px] right-[-27px] ">
          Equire Here
        </button>
      </div>
      <div className="z-[999]">
        <form className="bg-white w-[300px] h-[400px] border border-gray-200 border-t-0 shadow flex flex-col p-4">
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
