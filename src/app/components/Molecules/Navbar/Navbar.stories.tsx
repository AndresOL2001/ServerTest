import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar, { INavbar } from './Navbar';
import { mockNavbarTemplateProps } from './Navbar.mocks';

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const Main = Template.bind({});
Main.args = {
  ...mockNavbarTemplateProps.navbar,
  backgroundColor: '#ffff',
  isUserNav: false,
  primary: true,
} as INavbar;

export const TopBar = Template.bind({});
TopBar.args = {
  ...mockNavbarTemplateProps.navbar,
  logoUrl: '/logo-white.svg',
  backgroundColor: '#1B3156',
  isUserNav: true,
  primary: true,
} as INavbar;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockNavbarTemplateProps.navbar,
  logoUrl: '/logo-white.svg',
  showLogo: false,
  navItems: [
    "Aviada careers",
    "Our culture",
    "Benefits and perks",
    "Hiring process",
    "Openings",
    "Send your resume",
  ],
  backgroundColor: '#1B3156',
  isUserNav: false,
  primary: false,
} as INavbar;

export const BlogNav = Template.bind({});
BlogNav.args = {
  ...mockNavbarTemplateProps.navbar,
  showLogo: false,
  navItems: [
    "Todo",
    "Cultura Laboral",
    "Desarollo",
    "Management 3.0",
    "UX/UI",
  ],
  backgroundColor: '#1B3156',
  isUserNav: false,
  primary: false,
  showSearchBar: true,
} as INavbar;