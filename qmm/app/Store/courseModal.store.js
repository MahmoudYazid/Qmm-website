import { create } from "zustand";

export const useCourseModalStore = create((set) => ({
  state: "open",
  Data: {
    title: "test",
    level: "John Doe",
    category: "5h 30m",
    duration: "John Doe",
    lessonsCount: "5h 30m",
    instructor: "John Doe",
    rating: "5h 30m",
  },

  open: () => set({ state: "open"  }),
  close: () => set({ state: "close" }),
  ChangeTitle: () => set({ state: "close" }),

}));
