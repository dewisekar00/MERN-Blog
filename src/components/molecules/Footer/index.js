import React from 'react';
import './footer.scss'
import { ICGithub, ICInsta, ICLinkedin } from '../../../assets';

const Footer = () => {
  return (
    <div className='wrap-footer'>
      <div className='footer'>
        <img src={ICGithub} alt='github' style={{ width: '40px', height: '40px' }} />
        <img src={ICInsta} alt='instagram' style={{ width: '40px', height: '40px' }}/>
        <img src={ICLinkedin} alt='linkedin' style={{ width: '40px', height: '40px' }}/>
      </div>
      <div className='copyright'>
        <p >Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
