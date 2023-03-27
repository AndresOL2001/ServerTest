import { ComponentMeta, ComponentStory } from '@storybook/react';
import Panel, { IPanel } from './Panel';
import { mockPanelProps } from './Panel.mocks';

export default {
  title: 'templates/Panel',
  component: Panel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Panel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Panel> = (args) => (
  <Panel {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPanelProps.base,
} as IPanel;