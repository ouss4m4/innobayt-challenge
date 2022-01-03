import React, { useState } from 'react';
import { AiOutlineMenu, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function Navlist() {
  const [showMenu, SetShowMenu] = useState(false);
  const navItemSharedStyle = () =>
    `md:px-4 border-r-2 hover:border-r-accent hover:text-accent cursor-pointer`;
  return (
    <div>
      <div
        className="flex items-end md:hidden"
        onClick={() => SetShowMenu(!showMenu)}
      >
        <AiOutlineMenu className="w-8 h-8 " />
        <p className="">Menu</p>
        {/*  {showMenu ? (
          <>
            <AiOutlineMenu className="w-8 h-8 mx-auto" />
            <AiFillCaretUp
              className="w-8 h-8 mx-auto"
              onClick={() => SetShowMenu(!showMenu)}
            />
          </>
        ) : (
          <AiFillCaretDown
            className="w-8 h-8 mx-auto"
            onClick={() => SetShowMenu(!showMenu)}
          />
        )} */}
      </div>
      <div className={`mt-6 ${showMenu ? '' : 'hidemenu'}`}>
        <ul className="flex flex-col w-auto gap-4 pl-6 font-bold uppercase border-2 md:pl-0 md:text-xs lg:text-base md:flex-row md:gap-0 md:justify-start md:border-0 ">
          <li className={navItemSharedStyle()}>Home</li>

          <li className={`${navItemSharedStyle()} relative submenu`}>
            The Directory
            <ul className="left-0 pl-4 text-black bg-white md:hidden md:border-2 md:absolute md:w-60 top-5 submenu-context">
              <li className="pt-3 pb-1 md:pb-2 hover:text-accent">
                Alphabetical list
              </li>
              <li className="pb-1 md:pb-2 hover:text-accent">
                Classifications List
              </li>
              <li className="pb-1 md:pb-2 hover:text-accent">Country list</li>
              <li className="pb-1 md:pb-2 hover:text-accent">Iso companies</li>
              <li className="pb-1 md:pb-2 hover:text-accent">
                oilfield brands
              </li>
            </ul>
          </li>
          <li className={navItemSharedStyle()}>Buy online</li>
          <li className={navItemSharedStyle()}>free product listing</li>
          <li className={navItemSharedStyle()}>client view</li>
          <li className={navItemSharedStyle()}>exhibitions</li>
          <li className={`${navItemSharedStyle()} border-r-0`}>e-martketing</li>
        </ul>
      </div>
    </div>
  );
}

export default Navlist;
