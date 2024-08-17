import Functionality from "./components/Functionality";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-5 bg-slate-700">
      <Navbar />
      {/* <Functionality /> */}
      <Calculator />
    </div>
  );
}
