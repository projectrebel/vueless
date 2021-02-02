import { TagInput } from "./tags.js";
import { mount } from "@vue/test-utils";

describe("TagInput", () => {
    it("is name correctly", () => {
      // console.log(Object.keys(TagInput));
      // const wrapper = mount(TagInput, {
        
      // });

      expect(TagInput.name).toBe('TagInput')
    });
});
