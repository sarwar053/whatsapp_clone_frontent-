import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginStore = create(persist((set) => ({
    step: 1,
    userPhoneData: null,
    setStep: (step) => set({ step }),
    setUserPhoneDate: (data) => set({ userPhoneData: data }),
    reset: () => set({ step: 1, userPhoneData: null }),
}),
{
    name: "login-store",
    partialize: (state) => ({
        step: state.step,
        userPhoneData: state.userPhoneData,
    }),
}

)
);

export default useLoginStore
