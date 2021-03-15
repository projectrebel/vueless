<template>
    <img alt="Vue logo" src="./assets/vueless-logo.png" />

    <h1>Example</h1>
    <tag-input-example />

    <!-- <password-complexity
        :password="input.password"
        :confirmation="input.confirmation"
        v-slot="{ matching, complexity, valid }"
    >
        <div class="wrapper">
            <div class="field">
                <label for="password">Password</label>
                <input v-model="input.password" id="password" />
            </div>
            <div class="field">
                <label for="confirmation">Confirmation</label>
                <input v-model="input.confirmation" id="confirmation" />
            </div>
            <div class="complexity-field">
                <div class="complexity" :class="complexityStyle(complexity)" />
            </div>
            <div class="field">
                <button :disabled="!valid">Submit</button>
            </div>
        </div>
        <p>Matches: {{ matching }}</p>
        <p>Complexity: {{ complexity }}</p>
        <p>Valid: {{ valid }}</p>
    </password-complexity> -->
</template>

<script>
import { reactive } from "vue";
import { PasswordComplexity } from "./components/passwords/passwords.js";
import { TagInput } from "./components/tags/tags.js";
import TagInputExample from "./components/tags/TagInputExample.vue";

export default {
    components: {
        PasswordComplexity,
        TagInput,
        TagInputExample,
    },

    setup() {
        const tags = reactive(["testing", "design"]);

        const input = reactive({
            password: "",
            confirmation: "",
        });

        const complexityStyle = (complexity) => {
            if (complexity >= 3) {
                return "high";
            }
            if (complexity >= 2) {
                return "mid";
            }
            if (complexity >= 1) {
                return "low";
            }
        };

        return {
            input,
            complexityStyle,
            tags,
        };
    },
};
</script>

<style>
#app {
<<<<<<< HEAD
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
=======
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.complexity {
    transition: 0.2s;
    height: 10px;
}
.high {
    width: 100%;
    background: lime;
}

.mid {
    width: 66%;
    background: yellow;
}
.low {
    width: 33%;
    background: red;
>>>>>>> 5a25d194b1bee43ebc3dd6329966bf89c4a02928
}
</style>
