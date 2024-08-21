import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Calculator from "../components/Calculator";

export default function groupcalc() {
  return (
    <div className="bg-opacity flex h-full w-full flex-col items-center gap-10 bg-stone-100 dark:bg-slate-700">
      <Navbar />
      {/* <Functionality /> */}
      {/* <SignedOut>
        <WelcomePage />
      </SignedOut> */}
      {/* <SignedIn> */}
      <Calculator />

      {/* </SignedIn> */}
      <Footer />
    </div>
  );
}
