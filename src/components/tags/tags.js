import { defineComponent } from "vue";

export let TagInput = defineComponent({
  name: "TagInput",

  props: {
    modelValue: {
      type: Array,
    },
  },

  emits: ['update:modelValue'],

  setup(props, context) {

    function removeTag(tag) {
      context.emit(
        "update:modelValue",
        props.modelValue.filter((t) => t !== tag)
      );
    }

    return () =>
      context.slots.default({
        tags: props.modelValue,
        removeTag: removeTag,
      });
  },
});
