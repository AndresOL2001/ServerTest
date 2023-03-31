import { INavbar } from './Navbar';

const navbar: INavbar = {
  logo: '/logo-blue.svg',
  showLogo: true,
  items: [
    "Home",
    "About us",
    "Our services",
    "Blog",
  ],
  userInfo: {
    id: '0', 
    username: 'Johnathan',
    occupation: 'Software Engineer',
  }
};

export const mockNavbarTemplateProps = {
  navbar,
};