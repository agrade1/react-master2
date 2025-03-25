import { atom, AtomEffect } from "recoil";

function localStorageEffect<T>(key: string): AtomEffect<T> {
  return ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      try {
        setSelf(JSON.parse(savedValue));
      } catch (error) {
        console.error(`${key}에 저장된 값이 없거나 오류가 있습니다.`);
      }
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
}

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