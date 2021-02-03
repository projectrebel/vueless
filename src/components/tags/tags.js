import { defineComponent, ref } from "vue";

export let TagInput = defineComponent({
  name: "TagInput",

  props: {
    modelValue: {
      type: Array,
    },
  },

  emits: ['update:modelValue', "input"],

  setup(props, context) {
    const newTag = ref('');

    function addTag(tag) {
      context.emit(
        "input",
        [...props.modelValue, tag]
      );
    }

    function removeTag(tag) {
      context.emit(
        "update:modelValue",
        props.modelValue.filter((t) => t !== tag)
      );
    }

    function input(event) {
      newTag.value = event.target.value;
    }

    function keydown(event) {
      if (event.keyCode === 13) {
        addTag(newTag.value);
      }
    }

    return () =>
      context.slots.default({
        tags: props.modelValue,
        addTag,
        removeTag: removeTag,
        inputEvents: { input, keydown }
      });
  },
});
