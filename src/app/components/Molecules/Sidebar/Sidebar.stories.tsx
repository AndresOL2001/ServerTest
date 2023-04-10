import { ComponentMeta, ComponentStory } from "@storybook/react";
import SidebarTemplate, { ISidebar } from "./Sidebar";
import { mockBaseTemplateProps } from "./Sidebar.mocks";
export default {
  title: "templates/Molecules/Sidebar",
  component: SidebarTemplate,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarTemplate> = (args) => <SidebarTemplate {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as ISidebar;
