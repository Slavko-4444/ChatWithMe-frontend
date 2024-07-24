import { atom } from "recoil";

export const friendsListAtom = atom({
  key: "friendsListAtom",
  default: [],
});
export const activefriendsListAtom = atom({
  key: "activefriendsListAtom",
  default: [],
});

export const currentFriendAtom = atom({
  key: "currentFriendAtom",
  default: {
    userName: null,
    email: null,
    image: null,
    _id: null,
  },
});
