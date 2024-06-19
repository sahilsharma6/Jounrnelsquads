import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
  };

  return (
    <div className="bg-white w-full z-50">
      <header className="container mx-auto text-black p-4 bg-white flex justify-between items-center">
        <div className="font-bold md:ml-5 text-5xl text-green-500">
          <a href="/">
            <img src={logo} alt="Logo" className="h-[50px]" />
          </a>
        </div>

        <div className="hidden md:flex space-x-4 items-center nav">
          <a href="/journal" className="nav-link">
            Journals
          </a>
          <a href="#about" className="nav-link">
            Journal Guidelines
          </a>
          <a href="#services" className="nav-link">
            Our Services
          </a>
          <a href="#contact" className="nav-link">
            Join Us
          </a>
          <a href="#contact" className="nav-link">
            Submit Manuscript
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 rounded bg-green-500 text-white placeholder-white pl-10"
              onKeyDown={handleKeyDown}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-2 text-white cursor-pointer"
            />
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className={`w-6 h-6 transform transition-transform duration-500 ${
                isOpen ? "-rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "max-h-screen nav " : "max-h-0 "
          } overflow-hidden absolute z-50 top-[5.1rem] left-0 text-white w-full bg-gray-800 md:hidden transition-max-height transition-all duration-700 ease-in-out`}
        >
          <a href="#home" className="block p-4 hover:bg-gray-700 nav-link">
            Journals
          </a>
          <a href="#about" className="block p-4 hover:bg-gray-700 nav-link">
            Journal Guidelines
          </a>
          <a href="#services" className="block p-4 hover:bg-gray-700 nav-link">
            Our Services
          </a>
          <a href="#contact" className="block p-4 hover:bg-gray-700 nav-link">
            Join Us
          </a>
          <a href="#contact" className="block p-4 hover:bg-gray-700 nav-link">
            Submit Manuscript
          </a>
          <a href="#contact" className="block p-4 hover:bg-gray-700 nav-link">
            Contact
          </a>
          <div className="relative p-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 rounded bg-green-500 placeholder-white text-white pl-10"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-7 top-7 text-xs text-white"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
