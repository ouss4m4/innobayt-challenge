import Image from 'next/image';
import { FC } from 'react';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGooglePlusSquare,
  AiOutlineMenu,
} from 'react-icons/ai';

interface props {
  toggleMenu: () => void;
}

const Navbar: FC<props> = ({ toggleMenu }) => {
  return (
    <>
      <div className="flex justify-around mx-auto ">
        {/* sm screens logo wrapper */}
        {/* <div className="relative w-1/6 md:w-32 md:hidden" role="button">
          <Image
            src="/images/ogp-logo.png"
            layout="responsive"
            width="512"
            height="614"
            alt="logo"
          />
        </div> */}
        {/* navigation & socials */}
        <div className="flex flex-col-reverse items-start justify-start flex-grow gap-1 p-2 md:justify-between md:flex-row ">
          <ul
            role="navigation"
            className="flex gap-3 pl-1 text-sm font-bold tracking-wide uppercase list-none md:text-lg md:gap-6"
          >
            <li role="button" tabIndex={1} className="-ml-1 hover:text-accent">
              About us
            </li>
            <li role="button" tabIndex={2} className="hover:text-accent">
              Careers
            </li>
            <li role="button" tabIndex={3} className="hover:text-accent">
              Contact us
            </li>
          </ul>
          <div className="flex gap-2">
            <AiFillFacebook className="w-8 h-8" role="button" tabIndex={4} />
            <AiFillLinkedin className="w-8 h-8" role="button" tabIndex={5} />
            <AiFillTwitterSquare
              className="w-8 h-8"
              role="button"
              tabIndex={6}
            />
            <AiFillGooglePlusSquare
              className="w-8 h-8"
              role="button"
              tabIndex={7}
            />
          </div>
        </div>
        {/* responsive hamburger icon */}
        <div className="flex items-start p-2 md:hidden ">
          <AiOutlineMenu className="w-8 h-8 " onClick={() => toggleMenu()} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
