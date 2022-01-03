import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGooglePlusSquare,
} from 'react-icons/ai';
import Image from 'next/image';

function Navbar() {
  return (
    <>
      <div className="flex justify-around mx-auto ">
        {/* sm screens logo wrapper */}
        <div className="relative w-1/6 sm:w-32 sm:hidden" role="button">
          <Image
            src="/images/ogp-logo.png"
            layout="responsive"
            width="512"
            height="614"
            alt="logo"
          />
        </div>
        {/* navigation & socials */}
        <div className="flex flex-col-reverse items-start justify-end flex-grow gap-1 p-2 sm:justify-between sm:flex-row ">
          <ul
            role="navigation"
            className="flex gap-3 pl-1 text-sm font-bold tracking-wide uppercase list-none sm:text-lg sm:gap-6"
          >
            <li role="button" tabIndex={1} className="hover:text-hover ">
              About us
            </li>
            <li role="button" tabIndex={2} className="hover:text-hover">
              Careers
            </li>
            <li role="button" tabIndex={3} className="hover:text-hover">
              Contact us
            </li>
          </ul>
          <div className="flex sm:gap-2">
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
      </div>
    </>
  );
}

export default Navbar;
