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

    it("does not allow adding an existing tag", async () => {
      const wrapper = mount(TagInputExample, {
        data() {
          return {
            tags: ['tag1']
          }
        }
      });

      wrapper.find('input').setValue('tag1');
      await wrapper.find('input').trigger('keydown.enter');
      await wrapper.vm.$forceUpdate();
      expect(wrapper.find('ul').html()).toBe('<ul class="tags-input-tag"><li>tag1 <button type="button" class="tags-input-remove">×</button></li></ul>');

      wrapper.find('input').setValue('tag2');
      await wrapper.find('input').trigger('keydown.enter');
      await wrapper.vm.$forceUpdate();
      expect(wrapper.find('ul').html()).toBe('<ul class="tags-input-tag"><li>tag1 <button type="button" class="tags-input-remove">×</button></li><li>tag2 <button type="button" class="tags-input-remove">×</button></li></ul>');
    });

    it("trims whitespace when adding tags", async () => {
      const wrapper = mount(TagInputExample, {
        data() {
          return {
            tags: ['tag1']
          }
        }
      });

      wrapper.find('input').setValue('  tag1  ');
      await wrapper.find('input').trigger('keydown.enter');
      await wrapper.vm.$forceUpdate();
      expect(wrapper.find('ul').html()).toBe('<ul class="tags-input-tag"><li>tag1 <button type="button" class="tags-input-remove">×</button></li></ul>');
    });

    it("does not allow empty strings", async () => {
      const wrapper = mount(TagInputExample, {
        data() {
          return {
            tags: ['tag1']
          }
        }
      });

      wrapper.find('input').setValue('    ');
      await wrapper.find('input').trigger('keydown.enter');
      await wrapper.vm.$forceUpdate();
      expect(wrapper.find('ul').html()).toBe('<ul class="tags-input-tag"><li>tag1 <button type="button" class="tags-input-remove">×</button></li></ul>');
    });

    // it("resets newTag after a valid tag is added", async () => {
    //   const wrapper = mount(TagInputExample);

    //   wrapper.find('input').setValue('new tag');
    //   await wrapper.find('input').trigger('keydown.enter');
    //   await wrapper.vm.$forceUpdate();
    //   expect(wrapper.find('input').element.value).toBe('');
    // });
});
