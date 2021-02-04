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

    function addTag() {
      let newTagTrimmed = newTag.value.trim();
      if (newTagTrimmed.length == 0 || props.modelValue.find(t => t === newTagTrimmed)) {
        return false;
      }

      context.emit(
        "input",
        [...props.modelValue, newTagTrimmed]
      );
      newTag.value = '';
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
        addTag();
      }
    }

    return () => 
      context.slots.default({
        tags: props.modelValue,
        addTag,
        removeTag: removeTag,
        inputAttributes: { modelValue: newTag.value },
        inputEvents: { input, keydown }
      });
  },
});
