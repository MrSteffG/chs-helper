"use client";

import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CiLight } from "react-icons/ci";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex h-20 w-full items-center justify-center border-b bg-white dark:bg-slate-800 dark:text-white">
      <div className="flex w-2/3 items-center justify-between">
        <Link href="/">
          <h1 className="p-5 text-lg font-semibold">CHS Helper</h1>
        </Link>
        <FaHamburger
          className="opacity-0 hover:scale-105 hover:cursor-pointer max-lg:opacity-100"
          onClick={() => setHamburger(!hamburger)}
        />

        <div className="flex items-center justify-center gap-10 p-5 font-extralight max-lg:hidden">
          <Link href="/">
            <h3 className="text-sm">Memberships</h3>
          </Link>
          <Link href="/groupcalc">
            <h3 className="text-sm">Groups Calculator</h3>
          </Link>
          <Link href="/FAQ">
            <h3 className="text-sm">FAQ</h3>
          </Link>
          <button onClick={toggleTheme}>
            <CiLight />
          </button>
          <SignedOut>
            <SignInButton>
              <h3 className="rounded-md bg-yellow-300 p-1 px-3 text-lg text-black transition-all hover:scale-105 hover:cursor-pointer">
                Log in
              </h3>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div
          className={`${hamburger ? "" : "hidden"} absolute end-0 top-20 block h-screen overflow-auto border-l-2 bg-stone-50 p-5`}
        >
          <div className="flex flex-col items-end gap-5 text-lg">
            <Link href="/FAQ">
              <h3 className="rounded-md p-1 px-3 text-center text-lg text-black transition-all hover:scale-105 hover:cursor-pointer">
                FAQ
              </h3>
            </Link>
            <Link href="/">
              <h3 className="rounded-md p-1 px-3 text-center text-lg text-black transition-all hover:scale-105 hover:cursor-pointer">
                Memberships
              </h3>
            </Link>
            <Link href="/groupcalc">
              <h3 className="rounded-md p-1 px-3 text-center text-lg text-black transition-all hover:scale-105 hover:cursor-pointer">
                Groups Calculator
              </h3>
            </Link>
            <SignedOut>
              <SignInButton>
                <h3 className="w-full rounded-md bg-yellow-300 p-1 px-3 text-center text-lg text-black transition-all hover:scale-105 hover:cursor-pointer">
                  Log in
                </h3>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <button
              onClick={() => setHamburger(!hamburger)}
              className="rounded-md p-1 px-3 text-center font-light text-black transition-all hover:scale-105 hover:cursor-pointer max-lg:hidden"
            >
              Toggle Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
