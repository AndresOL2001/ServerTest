import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import RuloBoton from '../app/components/RuloBoton';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RuloBoton',
  component: RuloBoton,
} as ComponentMeta<typeof RuloBoton>;

const Template: ComponentStory<typeof RuloBoton> = (args) => <RuloBoton label="Button" href="#" {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { className: "primary" };
export const Secondary = Template.bind({});
Secondary.args = { className: "secondary" };
export const Alert = Template.bind({});
Alert.args = { className: "alert" };
export const Success = Template.bind({});
Success.args = { className: "success" };

