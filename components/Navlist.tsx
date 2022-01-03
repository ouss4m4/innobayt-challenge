import React, { FC } from "react";

interface props {
  showMenu: boolean;
  hideMenu: () => void;
}

const Navlist: FC<props> = ({ showMenu, hideMenu }) => {
  const navItemSharedStyle = () =>
    `md:px-4 border-r-2 hover:border-r-accent hover:text-accent cursor-pointer`;
  return (
    <div>
      <div className={`mt-6 ${showMenu ? "" : "hidemenu"}`}>
        <ul className="flex flex-col w-auto gap-4 pl-6 font-bold uppercase md:pl-0 md:text-xs lg:text-base md:flex-row md:gap-0 md:justify-start md:border-0 ">
          <li onClick={() => hideMenu()} className={navItemSharedStyle()}>
            Home
          </li>

          <li className={`${navItemSharedStyle()} relative submenu`}>
            The Directory
            <ul className="left-0 z-30 pl-4 text-black bg-white md:shadow-md md:hidden md:border-2 md:absolute md:w-60 top-5 submenu-context">
              <li
                onClick={() => hideMenu()}
                className="pt-3 pb-1 md:pb-2 hover:text-accent"
              >
                Alphabetical list
              </li>
              <li
                onClick={() => hideMenu()}
                className="pb-1 md:pb-2 hover:text-accent"
              >
                Classifications List
              </li>
              <li
                onClick={() => hideMenu()}
                className="pb-1 md:pb-2 hover:text-accent"
              >
                Country list
              </li>
              <li
                onClick={() => hideMenu()}
                className="pb-1 md:pb-2 hover:text-accent"
              >
                Iso companies
              </li>
              <li
                onClick={() => hideMenu()}
                className="pb-1 md:pb-2 hover:text-accent"
              >
                oilfield brands
              </li>
            </ul>
          </li>
          <li onClick={() => hideMenu()} className={navItemSharedStyle()}>
            Buy online
          </li>
          <li onClick={() => hideMenu()} className={navItemSharedStyle()}>
            free product listing
          </li>
          <li onClick={() => hideMenu()} className={navItemSharedStyle()}>
            client view
          </li>
          <li onClick={() => hideMenu()} className={navItemSharedStyle()}>
            exhibitions
          </li>
          <li
            onClick={() => hideMenu()}
            className={`${navItemSharedStyle()} border-r-0`}
          >
            e-martketing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navlist;
