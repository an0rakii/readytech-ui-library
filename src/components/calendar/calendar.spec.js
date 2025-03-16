import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import RtCalendar from "./calendar.vue";

describe("RtCalendar", () => {
  it("renders correctly", () => {
    const wrapper = mount(RtCalendar);
    expect(wrapper.exists()).toBe(true);
  });

  it("accepts a modelValue prop and updates when changed", async () => {
    const wrapper = mount(RtCalendar, {
      props: {
        modelValue: "2024-12-01",
      },
    });

    expect(wrapper.vm.selectedDate).toBe("2024-12-01");
    await wrapper.setProps({ modelValue: "2024-12-02" });
    expect(wrapper.vm.selectedDate).toBe("2024-12-02");
  });

  it("emits update:modelValue when a date is selected", async () => {
    const wrapper = mount(RtCalendar);

    wrapper.vm.selectedDate = "2024-12-10";
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["2024-12-10"]);
  });

  it("emits date-click when a date is clicked", () => {
    const onDateClick = vi.fn();
    const wrapper = mount(RtCalendar, {
      listeners: {
        "date-click": onDateClick,
      },
    });

    wrapper.vm.onDateClick("2024-12-15");
    expect(onDateClick).toHaveBeenCalledWith("2024-12-15");
  });
});