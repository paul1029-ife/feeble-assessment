import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["How it Works", "Pricing", "Use Case", "FAQ"];

  return (
    <div className="w-full flex justify-center py-6 px-4 md:px-0 relative">
      <nav className="rounded-[200px] flex justify-between items-center w-full md:w-300 bg-white pl-6 p-5 shadow-[0_1px_4px_0_rgba(12,12,13,0.05)] relative z-50">
        <a href="#">
          <img src="/coup-logo.svg" alt="Coup Logo" />
        </a>

        <ul className="hidden md:flex gap-4">
          {links.map((link, index) => (
            <li
              key={index}
              className="font-medium text-base leading-[100%] tracking-[0%] text-[#8C97A8] hover:text-black"
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="group cursor-pointer relative z-0 overflow-hidden rounded-[43.62px] border border-[#007AFF] bg-[#007AFF] py-2.75 px-4.5 text-white transition-all duration-300 hover:text-[#007AFF]">
            <span className="absolute right-0 top-0 bottom-0 -z-10 h-full w-full translate-x-full rounded-l-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
            <span className="relative z-10 font-medium">Contact Sales</span>
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#8C97A8] focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-white rounded-3xl shadow-xl flex flex-col gap-6 md:hidden z-40 animate-in slide-in-from-top-5 duration-200">
          <ul className="flex flex-col gap-4 text-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="font-medium text-lg text-[#8C97A8] hover:text-black"
              >
                <a href="#" onClick={() => setIsOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button className="group w-full cursor-pointer relative z-0 overflow-hidden rounded-[43.62px] border border-[#007AFF] bg-[#007AFF] py-3 px-4.5 text-white transition-all duration-300 hover:text-[#007AFF]">
              <span className="absolute right-0 top-0 bottom-0 -z-10 h-full w-full translate-x-full rounded-l-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
              <span className="relative z-10 font-medium">Contact Sales</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
