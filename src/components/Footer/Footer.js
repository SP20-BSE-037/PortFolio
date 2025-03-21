import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p>
            Adnan Haider <FontAwesomeIcon icon={faHeart} size="sm" /> 
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
