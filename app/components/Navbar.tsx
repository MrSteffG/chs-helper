"use client";

import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex w-full items-center justify-center border-b bg-white dark:bg-slate-800 dark:text-white">
      <div className="flex w-2/3 items-center justify-between">
        <h1 className="text-lg font-semibold">CHS Helper</h1>
        <div className="flex items-center justify-center gap-10 p-5 font-extralight">
          <button onClick={toggleTheme}>
            <CiLight />
          </button>
          <SignedOut>
            <SignInButton>
              <h3 className="rounded-md bg-yellow-300 p-1 px-3 text-lg text-black transition-all hover:scale-105">
                Log in
              </h3>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
