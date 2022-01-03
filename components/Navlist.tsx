import React from 'react';

function Navlist() {
  const navItemSharedStyle = () =>
    `md:px-4  border-r-2 hover:border-r-accent hover:text-accent cursor-pointer `;
  return (
    <div className="mt-6">
      <ul className="w-auto font-bold uppercase border-2 md:text-xs lg:text-base md:flex md:justify-start md:border-0">
        <li className={navItemSharedStyle()}>Home</li>

        <li className={`${navItemSharedStyle()} relative submenu`}>
          The Directory
          <ul className="absolute left-0 flex-col hidden gap-4 p-4 text-black bg-white border-2 w-60 top-5 submenu-context">
            <li className="hover:text-accent">Alphabetical list</li>
            <li className="hover:text-accent">Classifications List</li>
            <li className="hover:text-accent">Country list</li>
            <li className="hover:text-accent">Iso companies</li>
            <li className="hover:text-accent">oilfield brands</li>
          </ul>
        </li>
        <li className={navItemSharedStyle()}>Buy online</li>
        <li className={navItemSharedStyle()}>free product listing</li>
        <li className={navItemSharedStyle()}>client view</li>
        <li className={navItemSharedStyle()}>exhibitions</li>
        <li className={`${navItemSharedStyle()} border-r-0`}>e-martketing</li>
      </ul>
    </div>
  );
}

/* <div>
  <ul>
    <li>Home</li>
    <li>The Directory</li>
    <li>Buy Online</li>
    <li>Free Product Listing</li>
    <li>Client View</li>
    <li>Exhibitions</li>
    <li>E-marketing</li>
  </ul>
</div> */

export default Navlist;
