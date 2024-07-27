import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    token: "",
    userName: null,
    id: null,
    email: null,
    image: null,
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
