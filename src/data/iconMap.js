import {
  BsArrowDownShort,
  BsArrowUpShort,
  BsCircle,
  BsClock,
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsPin,
  BsPlusLg,
  BsWhatsapp,
} from 'react-icons/bs';

import { FaChild,FaUsers,FaUser ,FaStar  } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';

export const iconMap = {
  icon: BsCircle, // delete
  message: BsWhatsapp,


  arrowDown: BsArrowDownShort,
  arrowUp: BsArrowUpShort,
  arrowFaq: BsPlusLg,

  clock: BsClock,
  location: BsPin,
  tel: BsPhone,

  instagram: BsInstagram,
  facebook: BsFacebook,

  child:FaChild,
  users:FaUsers,
  user:FaUser,
  star:FaStar,
};
