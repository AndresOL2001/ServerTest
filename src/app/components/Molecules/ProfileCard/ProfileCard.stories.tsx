import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileCard, { IProfileCard } from './ProfileCard';
import { mockNavbarTemplateProps } from './ProfileCard.mocks';

export default {
  title: 'Cards/Profile',
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
} as IProfileCard;
