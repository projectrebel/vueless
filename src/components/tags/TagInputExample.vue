<template>
    <tag-input v-model="tags" v-slot="slot">
        <span class="tags-input-tag">
            <span v-for="(tag, index) in slot.tags" :key="index">
                {{ tag }}
            </span>
            <button type="button" class="tags-input-remove">&times;</button>
        </span>
        <input class="tags-input-text" placeholder="Add tag..." />
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
    }
};
</script>
