import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar, { INavbar } from './Navbar';
import { mockNavbarTemplateProps } from './Navbar.mocks';

export default {
  title: 'Navbar/Main',
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
  userNav: false,
} as INavbar;

export const TopBar = Template.bind({});
TopBar.args = {
  ...mockNavbarTemplateProps.navbar,
  backgroundColor: '#1B3156',
  userNav: true,
} as INavbar;