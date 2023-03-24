import { IBaseTemplate } from './Navbar';

const navbar: IBaseTemplate = {
  image: '/logo-blue.svg',
  items: [
    "Home",
    "About us",
    "Our services",
    "Blog",
  ],
  height: 20,
  width: 30,
};

export const mockNavbarTemplateProps = {
  navbar,
};