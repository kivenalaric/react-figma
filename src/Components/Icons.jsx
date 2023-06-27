import styled from '@emotion/styled';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdMenu, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

export const FacebookIcon = styled(FaFacebookF)`
  border: #fff 2px solid;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
`;

export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  color: #c7923e;
  font-size: 1.5rem;
`;

export const MenuIcon = styled(MdMenu)`
  color: #f1f2f3;
  font-size: 2.2rem;
`;

export const MenuIconClose = styled(IoClose)`
  color: #f1f2f3;
  font-size: 2.2rem;
`;

export const TwitterIcon = styled(FaTwitter)`
  border: #fff 2px solid;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
`;

export const LinkedInIcon = styled(FaLinkedinIn)`
  border: #fff 2px solid;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
`;

export const InstagramIcon = styled(AiFillInstagram)`
  border: #fff 2px solid;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
`;
