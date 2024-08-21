import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import WelcomePage from "../components/WelcomePage";
import CodeSample from "./Code Sample.mdx";

export default function FAQ() {
  return (
    <div className="bg-opacity flex h-full w-full flex-col items-center gap-10 bg-stone-100 dark:bg-slate-700">
      <Navbar />
      <div className="prose prose-headings:mt-8 prose prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <CodeSample />
      </div>

      <Footer />
    </div>
  );
}
