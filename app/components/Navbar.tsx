import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center bg-slate-800 text-white">
      <div className="flex w-2/3 items-center justify-between">
        <h1 className="text-lg font-semibold">CHS Groups Calculator</h1>
        <div className="flex items-center justify-center gap-10 p-5">
          <SignedOut>
            <SignInButton>
              <h3 className="text-lg font-semibold transition-all hover:scale-105">
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
