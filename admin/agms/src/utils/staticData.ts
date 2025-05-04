import { CgGym, CgProfile } from 'react-icons/cg';
import {  FaUserFriends } from 'react-icons/fa';
import { FaArrowUpRightDots, FaBowlFood } from 'react-icons/fa6';
import { GiTeacher, GiWeightLiftingUp } from 'react-icons/gi';
import { GrHomeRounded } from 'react-icons/gr';
import { MdCardMembership } from 'react-icons/md';

export const navItems = [
  { name: 'home', path: '/', icon: GrHomeRounded },
  { name: 'equipment', path: '/equipment', icon: CgGym },
  { name: 'trainer', path: '/trainer', icon: GiTeacher },
  { name: 'membership', path: '/membership', icon: MdCardMembership },
  { name: 'food', path: '/food', icon: FaBowlFood },
  { name: 'workout', path: '/workout', icon: GiWeightLiftingUp },
  { name: 'client', path: '/client', icon: FaUserFriends },
  { name: 'revenue', path: '/revenue', icon: FaArrowUpRightDots },
  // { name: 'profile', path: '/profile', icon: CgProfile }
];
