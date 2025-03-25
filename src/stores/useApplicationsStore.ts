import { create } from "zustand";
import { persist } from "zustand/middleware";

type ApplicationsStore = {
  applications: string[];
  addApplication: (item: string) => void;
  removeApplication: (index: number) => void;
  clearApplications: () => void;
};

export const useApplicationsStore = create<ApplicationsStore>()(
  persist(
    (set) => ({
      applications: [],
      addApplication: (application) =>
        set((state) => ({
          applications: [...state.applications, application],
        })),
      removeApplication: (index) =>
        set((state) => ({
          applications: state.applications.filter((_, i) => i !== index),
        })),
      clearApplications: () => set({ applications: [] }),
    }),
    {
      name: "applications-storage",
    }
  )
);
