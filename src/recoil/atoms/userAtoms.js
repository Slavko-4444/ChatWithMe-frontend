import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    token: "",
  },
});

export const authStatusAtom = atom({
  key: "authStatusAtom",
  default: {
    successMessage: "",
    errorMessage: "",
    isAuthenticated: false,
  },
});
