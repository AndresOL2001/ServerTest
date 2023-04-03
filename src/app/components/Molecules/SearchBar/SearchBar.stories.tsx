import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar, { ISearchBar } from './SearchBar';
import { mockNavbarTemplateProps } from './SearchBar.mocks';

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Main = Template.bind({});
Main.args = {
  ...mockNavbarTemplateProps.profileCard,
} as ISearchBar;
