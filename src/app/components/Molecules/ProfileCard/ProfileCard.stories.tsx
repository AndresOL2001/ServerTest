import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileCard from './ProfileCard';
import { UserInfo } from '../../typing';
import { mockNavbarTemplateProps } from './ProfileCard.mocks';

export default {
  title: 'Molecules/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Main = Template.bind({});
Main.args = {
  ...mockNavbarTemplateProps.profileCard,
} as UserInfo;
