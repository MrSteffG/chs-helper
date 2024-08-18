import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-screen items-center justify-center border-t bg-white p-10 text-black">
      <div className="flex w-2/3">
        <a
          className="flex flex-row items-center justify-center gap-4"
          href="https://github.com/MrSteffG"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
