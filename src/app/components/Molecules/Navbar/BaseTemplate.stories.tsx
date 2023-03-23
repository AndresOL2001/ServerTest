import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar, { IBaseTemplate } from './Navbar';
import { mockNavbarTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'Navbar/Main',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavbarTemplateProps.navbar,
} as IBaseTemplate;