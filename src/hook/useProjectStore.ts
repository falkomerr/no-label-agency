import { create } from "zustand";

interface ProjectState {
    currentProject: any;
    setProject: (project: any) => void;
}

const useProjectStore = create<ProjectState>((set) => ({
    currentProject: null,
    setProject: (project: any) => set({ currentProject: project })
}))

export default useProjectStore;