import { navItems } from "../constants/Index";
import logo from "../assets/logo.png";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="navbar box-border">
      <div className="border border-neutral-700 h-9 z-20 bg-black flex justify-center items-center box-border">
        <h2 className="text-center text-white text-sm font-light">
          FREE DELIVERY ALL OVER THE INDIA
        </h2>
      </div>
      <div className=" navItems max-sm:h-32 h-36 border border-neutral-500 flex items-center bg-[#FFFFFF]">
        <div className="container relative  h-32 m-auto flex justify-evenly items-center ">
          <div className=" md:hidden sm:flex z-10 flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div>
            {mobileDrawerOpen && (
              <div className="absolute left-0 top-full w-full bg-neutral-200 border-t-0 border-neutral-500 z-20 animate-slide-down transition">
                <ul className="flex flex-col w-screen font-light mr-56 ml-9 mt-7 mb-16 text-lg">
                  {navItems.map((element, index) => (
                    <li
                      className="py-2 font-light text-neutral-500 hover:text-black text-[1.1rem] border-transparent hover:underline "
                      key={index}
                    >
                      <a href={element.href}>{element.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="logo max-sm:h-20 max-sm:w-20 h-28 w-28 rounded-md">
            <img className="h-full w-full rounded-full" src={logo} alt="logo" />
          </div>
          <div className="w-1/2 max-sm:hidden max-md:hidden lg:visible flex justify-center items-center">
            <ul className="flex flex-wrap">
              {navItems.map((element, index) => (
                <li
                  className="my-4 mx-4 md:m-2 font-light text-neutral-500 hover:text-black text-[0.9rem] border-b border-transparent hover:border-neutral-500"
                  key={index}
                >
                  <a href={element.href}>{element.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="buttons flex justify-center items-center">
            <button className="mr-5 transition duration-500 hover:scale-125 ">
              <Search />
            </button>
            <button className="transition duration-500 hover:scale-125">
              <ShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
