import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const address = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with actual address
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] bg-transparent outline-none text-white placeholder:text-[#4acd8d] px-4"
        />
        <div className="flex justify-center items-center w-[72px] h-full bg-[#4acd8d] rounded-[20px] cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Create a Campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("/create-campaign");
            else "connect()";
          }}
        />
        <Link to="/profile" className="flex gap-2 items-center">
          <div className="h-[52px] w-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={thirdweb}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* small screen resolution */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
          <img
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div
            className={`absolute top-[60px] right-0 bg-[#1c1c24] z-10 shadow-secondary ${toggleDrawer ? "-translate-y-[100px]" : "translate-y-0"}
            transition-all duration-700 py-4`}
          >
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${
                    isActive === link.name && "bg-[#3a3a43]"
                  } cursor-pointer`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${
                      isActive === link.name ? "grayscale" : "grayscale-0"
                    }`}
                  />
                  <p
                    className={`font-epilogue font-semibold text-[14px] leading-[26px]   ml-[20px] ${
                      isActive === link.name
                        ? "text-[#1dc071]"
                        : "text-[#808191]"
                    }`}
                  >
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex mx-4">
              <CustomButton
                btnType="button"
                title={address ? "Create a Campaign" : "Connect"}
                styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                handleClick={() => {
                  if (address) navigate("/create-campaign");
                  else "connect()";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
