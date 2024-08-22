import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Test from "./Test.mdx";

export default function FAQ() {
  return (
    <div className="bg-opacity flex h-full w-full flex-col items-center gap-10 bg-stone-100 dark:bg-slate-700">
      <Navbar />
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <Test className="" />
      </article>

      <Footer />
    </div>
  );
}
