import { TagInput } from "./tags.js";
import TagInputExample from "./TagInputExample.vue";
import { mount } from "@vue/test-utils";

describe("TagInput", () => {
    it("is named correctly", () => {
      expect(TagInput.name).toBe('TagInput')
    });

    it("exposes values via props", () => {
      const wrapper = mount(TagInputExample, {
        data() {
          return {
            tags: ['tag1', 'tag2']
          }
        }
      });

      expect(wrapper.html()).toContain('tag1');
      expect(wrapper.html()).toContain('tag2');
    });
});
