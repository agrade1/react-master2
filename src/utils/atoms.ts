import { atom } from "recoil";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: string[]) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const wishListState = atom<string[]>({
    key: "wishListState",
    default: [],
    effects: [localStorageEffect("wishList")],
  });
  
  export const visitListState = atom<string[]>({
    key: "visitListState",
    default: [],
    effects: [localStorageEffect("visitList")],
  });
  
  export const likeListState = atom<string[]>({
    key: "likeListState",
    default: [],
    effects: [localStorageEffect("likeList")],
  });