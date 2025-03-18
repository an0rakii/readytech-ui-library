import RtTooltip from "./tooltip.vue";
import RtButton from "../button/button.vue";
import RtIcon from "../icon/icon.vue";

export default {
  title: "Components/Tooltip",
  component: RtTooltip,
  argTypes: {
    type: { 
        control: { type: "select", options: ["text", "icon"] }, 
        default: "text",
    },
    text: { control: "text", defaultValue: "This is a tooltip" },
    position: {
      control: { type: "select", options: ["top", "bottom", "start", "end"] },
      defaultValue: "start",
    },
  },
};

const Template = (args) => ({
  components: { RtTooltip, RtButton, RtIcon },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; justify-content: center; align-items: center;">
      <RtTooltip v-bind="args">
        <RtButton color="primary">
            ?
        </RtButton>
      </RtTooltip>
    </div>
  `,
});

export const Top = Template.bind({});
Top.args = {
  text: "This is a tooltip",
  location: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  text: "Tooltip at bottom",
  location: "bottom",
};

export const Left = Template.bind({});
Left.args = {
  text: "Tooltip at the start",
  location: "start",
};

export const Right = Template.bind({});
Right.args = {
  text: "Tooltip at the end",
  location: "end",
};
