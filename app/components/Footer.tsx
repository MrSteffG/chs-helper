import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-screen items-center justify-center border-t bg-white p-10 text-black dark:bg-slate-800 dark:text-white">
      <div className="flex w-2/3">
        <a
          className="flex flex-row items-center justify-center gap-4"
          href="https://github.com/MrSteffG"
          target="_blank"
        >
          <FaGithub />
          <h3 className="text-sm font-light">
            Designed & Built by Steff Gornall
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Footer;
