import Functionality from "./components/Functionality";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import DuesCalculator from "./components/DuesCalculator";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-10 bg-slate-700">
      <Navbar />
      {/* <Functionality /> */}
      <DuesCalculator />
      <Calculator />
      footer
    </div>
  );
}
