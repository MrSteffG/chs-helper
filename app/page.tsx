"use client";

import Navbar from "./components/Navbar";
import DuesCalculator from "./components/DuesCalculator";
import Footer from "./components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import ProcessingMemberships from "./articles/ProcessingMemberships.mdx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export default function Home() {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="bg-opacity flex min-h-screen w-full flex-col items-center justify-between gap-10 bg-stone-100 dark:bg-slate-700">
      <Navbar />
      {/* <Functionality /> */}
      {/* <SignedOut>
        <WelcomePage />
      </SignedOut> */}
      {/* <SignedIn> */}
      <DuesCalculator />
      <div className="flex w-2/3 flex-col items-center justify-start rounded-2xl border bg-white p-10 dark:bg-slate-600 max-lg:w-5/6">
        <div className="flex w-2/3 items-center justify-between gap-2 font-semibold">
          <h3 className="text-2xl">Membership guide</h3>
          <IoIosArrowUp
            className={`${hidden === false ? " " : "hidden opacity-0"}text-xl hover:scale-105 hover:cursor-pointer`}
            onClick={() => setHidden(!hidden)}
          />
          <IoIosArrowDown
            className={`${hidden === true ? " " : "hidden opacity-0"}text-xl hover:scale-105 hover:cursor-pointer`}
            onClick={() => setHidden(!hidden)}
          />
        </div>
        <article
          className={`prose ${hidden === false ? "" : "hidden"} prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:text-white dark:prose-headings:text-white dark:prose-strong:text-white`}
        >
          <ProcessingMemberships />
        </article>
      </div>
      {/* </SignedIn> */}
      <Footer />
    </div>
  );
}
