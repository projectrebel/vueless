<template>
    <tag-input v-model="tags" v-slot="slot" @input="updateTags">
        <ul class="tags-input-tag">
            <li v-for="(tag, index) in slot.tags" :key="index">
                {{ tag }}
                <button @click="slot.removeTag(tag)" type="button" class="tags-input-remove">&times;</button>
            </li>
        </ul>
        <input class="tags-input-text" placeholder="Add tag..." @input="slot.inputEvents.input" @keydown.enter="slot.inputEvents.keydown" />
        <button type="submit" @click="slot.addTag()">Add</button>
    </tag-input>
</template>

<script>
import { TagInput } from "./tags";

export default {
    name: "TagInputExample",
    components: {
        TagInput,
    },
    data() {
        return {
            tags: ['testing', 'design']
        }
    },
    methods: {
        updateTags(event) {
            this.tags = event;
        }
    }
};
</script>
