import { ComponentMeta, ComponentStory } from '@storybook/react';
import RuloCard, { IRuloCard } from './RuloCard';
import { mockRuloCardProps } from './RuloCard.mocks';

export default {
  title: 'cards/RuloCard',
  component: RuloCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RuloCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RuloCard> = (args) => (
  <RuloCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRuloCardProps.base,
} as IRuloCard;


