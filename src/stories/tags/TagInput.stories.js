import { TagInput } from '../../components/tags/tags.js';
import { TagInputExample } from '../../components/tags/TagInputExample.vue';

export default {
  title: 'Example/TagInput',
  component: TagInput,
  template: `
  <tag-input>
  </tag-input>
  `,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TagInput },
  template: '<my-button @click="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'TagInput',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'TagInput',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'TagInput',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'TagInput',
};
