import Functionality from "./components/Functionality";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import DuesCalculator from "./components/DuesCalculator";
import Footer from "./components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import WelcomePage from "./components/WelcomePage";

export default function Home() {
  return (
    <div className="bg-opacity flex h-full w-full flex-col items-center gap-10 bg-stone-100 dark:bg-slate-700">
      <Navbar />
      {/* <Functionality /> */}
      <SignedOut>
        <WelcomePage />
      </SignedOut>
      <SignedIn>
        <DuesCalculator />
        <Calculator />
      </SignedIn>
      <Footer />
    </div>
  );
}
