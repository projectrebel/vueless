import { computed, defineComponent } from "vue";

export function isMatching(password, confirmation) {
  if (!password || !confirmation) {
    return false;
  }

  return password === confirmation;
}

export function calculateComplexity(value) {
  if (!value) {
    return 0;
  }

  if (value.length >= 10) {
    return 3;
  }

  if (value.length >= 7) {
    return 2;
  }

  if (value.length >= 5) {
    return 1;
  }

  return 0;
}

export let PasswordComplexity = defineComponent({
  props: {
    password: {
      type: String,
    },

    confirmation: {
      type: String,
    },

    minimumComplexity: {
      type: Number,
      default: 3,
    },
  },

  setup(props, { slots }) {
    const matching = computed(() => isMatching(props.password, props.confirmation));
    const complexity = computed(() => calculateComplexity(props.password));
    const valid = computed(() => complexity.value >= props.minimumComplexity && matching.value);

    return () =>
      slots.default({
        // data
        complexity: complexity.value,
        matching: matching.value,
        valid: valid.value
      });
  },
});
