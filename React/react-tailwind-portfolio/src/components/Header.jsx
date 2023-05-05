// import React from "react";
import Button from "./Button";

function Header() {
  return (
    <hader className="text-gray-700 border-b border-gray-200 dark:text-white">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a
          href="#"
          className="font-medium text-gray-900 mb-4 md:mb-0 dark:text-white"
        >
          <span className="text-xl ml-3">Hanako Sato</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#Home" className="mr-5 hover:text-blue-400 duration-300">
            Home
          </a>
          <a href="#About" className="mr-5 hover:text-blue-400 duration-300">
            About
          </a>
          <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">
            Skills
          </a>
          <a href="#Blog" className="mr-5 hover:text-blue-400 duration-300">
            Blog
          </a>
          <a>
            <Button />
          </a>
        </nav>
      </div>
    </hader>
  );
}
export default Header;
