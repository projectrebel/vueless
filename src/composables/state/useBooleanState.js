import { readonly, ref } from "vue";

export function useBooleanState(initialState) {
  const state = ref(initialState);
  const toggleState = (newState = null) => {
    if (newState) {
      state.value = newState;
    } else {
      state.value = !state.value;
    }
  };

  return [ readonly(state), toggleState ];
}
