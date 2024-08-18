import { SignInButton } from "@clerk/nextjs";
import React from "react";

const WelcomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold dark:text-white">CHS Helper</h1>
      <SignInButton>
        <h3 className="rounded-md bg-yellow-300 p-2 px-5 text-xl font-light text-black transition-all hover:scale-105 hover:cursor-pointer">
          Log in
        </h3>
      </SignInButton>
    </div>
  );
};

export default WelcomePage;
