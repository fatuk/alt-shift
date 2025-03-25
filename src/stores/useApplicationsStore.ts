import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Application } from "stores/types/Application";

type ApplicationsStore = {
  applications: Application[];
  addApplication: (content: string) => void;
  removeApplication: (id: string) => void;
  clearApplications: () => void;
};

export const useApplicationsStore = create<ApplicationsStore>()(
  persist(
    (set) => ({
      applications: [],
      addApplication: (content) =>
        set((state) => ({
          applications: [
            ...state.applications,
            {
              id: nanoid(),
              content,
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      removeApplication: (id) =>
        set((state) => ({
          applications: state.applications.filter((item) => item.id !== id),
        })),
      clearApplications: () => set({ applications: [] }),
    }),
    {
      name: "applications-storage",
    }
  )
);
