import { create } from "zustand";

export const useCourseModalStore = create((set) => ({
  state: "close",
  Data: {
    title: "test",
    level: "John Doe",
    category: "5h 30m",
    duration: "John Doe",
    lessonsCount: "5h 30m",
    instructor: "John Doe",
    rating: "5h 30m",
  },
   CurrentPage:"Mainpage",
   ChangeCurrentPage: (page) => set({ CurrentPage: page }),
  SetData: (data) => set({ Data: data }),
  open: () => set({ state: "open"  }),
  close: () => set({ state: "close" }),

}));
