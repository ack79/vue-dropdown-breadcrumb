import { shallowMount } from "@vue/test-utils";
import VueBreadcrumbDropdown from "../src/VueBreadcrumbDropdown.vue";

describe("VueBreadcrumbDropdown.vue", () => {
  it('Components props set correctly', () => {
		let testProps = [
			{
				label: "Test 1",
				link: "https://test1.com",
				isDropdown: false,
				list: null,
			},
			{
				label: "Test 2",
				isDropdown: true,
				link: "https://test2.com",
				list: [
					{
						label: "Sublink Test",
						link: "https://sublink.com",
					},
				],
			},
			{
				label: "Active Link",
				isDropdown: false,
				list: null,
			},
		]
		const wrapper = shallowMount(VueBreadcrumbDropdown, {
			propsData: {
				links: testProps
			}
		})

		expect(wrapper.vm.links).toBe(testProps)
		expect(wrapper.vm.links[1].isDropdown).toBe(testProps[1].isDropdown)
		expect(wrapper.vm.links[2].list).toBe(testProps[2].list)
		//failed test
		//expect(wrapper.vm.links[0].isDropdown).toBe(testProps[1].isDropdown)
	})
});
