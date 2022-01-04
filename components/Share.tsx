import React from 'react';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGooglePlusSquare,
  AiOutlineMenu,
  AiFillGoogleCircle,
} from 'react-icons/ai';

function Share() {
  return (
    <div className="socialbuttons">
      <div className="w-14 h-14">
        <AiFillFacebook className="w-16 h-16 " style={{ color: '#3b5998' }} />
      </div>
      <div className="w-14 h-14">
        <AiFillGooglePlusSquare
          className="w-16 h-16 "
          style={{ color: '#dd4b39' }}
        />
      </div>
      <div className="w-14 h-14">
        <AiFillLinkedin className="w-16 h-16 " style={{ color: '#007bb5' }} />
      </div>
    </div>
  );
}

export default Share;
