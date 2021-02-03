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

    it("removes tags with click the remove button", async () => {
      const wrapper = mount(TagInputExample, {
        data() {
          return {
            tags: ['tag1', 'tag2']
          }
        }
      });

      await wrapper.find('button').trigger('click');
      await wrapper.vm.$forceUpdate();
      expect(wrapper.html()).not.toContain('tag1');
      expect(wrapper.html()).toContain('tag2');

      await wrapper.find('button').trigger('click');
      await wrapper.vm.$forceUpdate();
      expect(wrapper.html()).not.toContain('tag1');
      expect(wrapper.html()).not.toContain('tag2');
    });

    it("adds tags when pressing enter", async () => {
      const wrapper = mount(TagInputExample);

      wrapper.find('input').setValue('new tag');
      await wrapper.find('input').trigger('keydown.enter');
      expect(wrapper.html()).toContain('new tag');
    });

    it("adds tags when clicking the submit button", async () => {
      const wrapper = mount(TagInputExample);

      wrapper.find('input').setValue('new tag');
      await wrapper.find('button[type=submit]').trigger('click');
      expect(wrapper.html()).toContain('new tag');
    });
});
