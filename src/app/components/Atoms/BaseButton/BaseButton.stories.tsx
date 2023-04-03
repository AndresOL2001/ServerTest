import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseButton, { IBaseButton } from './BaseButton';
import { mockBaseButtonProps } from './BaseButton.mocks';

export default {
  title: 'atoms/BaseButton',
  component: BaseButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['normal', 'small', 'mini'],
      },
    },
    isDragging: { hidden: true },
  },
} as ComponentMeta<typeof BaseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Atoms: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const Base = Atoms.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseButtonProps.base,
} as IBaseButton;