import { defineComponent } from "vue";

export let TagInput = defineComponent({
  name: 'TagInput',
  
  props: {
    modelValue: {
      type: Array,
    },
  },

  setup(props, { slots }) {
    return () => slots.default({
      tags: props.modelValue
    });
  },
});
