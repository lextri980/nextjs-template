export const getLocal = (item: string) => {
  const localItem = localStorage.getItem(item);
  return localItem;
};

export const setLocal = (itemName: string, item: any) => {
  localStorage.setItem(itemName, item);
};

export const getCookie = (item: string) => {
  let name = item + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let splitedCookie = decodedCookie.split(";");
  for (let i = 0; i < splitedCookie.length; i++) {
    let cookie = splitedCookie[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

export const setCookie = (itemName: string, item: any) => {
  document.cookie = `${itemName}=${item}`;
};

export const removeStorage = (item: string) => {
  localStorage.removeItem(item);
  document.cookie = `${item}=`;
};

export const removeManyStorage = (array: string[]) => {
  array.forEach((item) => {
    localStorage.removeItem(item);
    document.cookie = `${item}=`;
  });
};
