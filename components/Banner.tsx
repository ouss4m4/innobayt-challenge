import Image from 'next/image';

function Banner() {
  return (
    <div className="flex">
      {/* Medium screens logo  */}
      <div className="relative hidden sm:w-32 sm:block ">
        <Image
          src="/images/ogp-logo.png"
          layout="fill"
          width="512"
          height="614"
          alt="logo"
        />
      </div>
      {/* Animated branding */}
      <div className="relative flex-grow md:w-32 ">
        <Image
          src="/images/win-top-banner.gif"
          alt="brand"
          width="1690"
          height="254"
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default Banner;
