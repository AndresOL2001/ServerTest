import { INavbar } from './Navbar';

const navbar: INavbar = {
  logo: '/logo-blue.svg',
  items: [
    "Home",
    "About us",
    "Our services",
    "Blog",
  ],
  height: 50,
  width: 150,
};

export const mockNavbarTemplateProps = {
  navbar,
};