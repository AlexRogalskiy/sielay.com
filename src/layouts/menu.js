import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaHome,
  FaInfo,
  FaNewspaper,
} from 'react-icons/fa'

export const menuItems = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    Icon: FaHome,
    inverted: true,
  },
  {
    name: 'Blog',
    path: '/blog',
    Icon: FaNewspaper,
    inverted: true,
  },
  {
    name: 'About',
    path: '/about/',
    exact: true,
    Icon: FaInfo,
    inverted: true,
  },
  // { name: 'Blog', path: '/blog/', exact: false, Icon: 'newspaper' },
  {
    name: 'Instagram',
    path: 'https://instagram.com/sielay',
    iconOnly: true,
    Icon: FaInstagram,
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/sielay/',
    iconOnly: true,
    Icon: FaLinkedin,
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/sielay',
    iconOnly: true,
    Icon: FaTwitter,
  },
  {
    name: 'YouTube',
    path: 'https://www.youtube.com/channel/UCwGCL1LGlODVG_HyXqzGYcg',
    iconOnly: true,
    Icon: FaYoutube,
  },
]
