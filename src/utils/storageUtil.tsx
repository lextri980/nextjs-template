export default class StorageUtil {
  constructor() {}

  getLocal(item: string) {
    const localItem = localStorage.getItem(item);
    return localItem;
  }

  setLocal = (itemName: string, item: any) => {
    localStorage.setItem(itemName, item);
  };

  getCookie = (item: string) => {
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

  setCookie = (itemName: string, item: any) => {
    document.cookie = `${itemName}=${item}`;
  };

  removeStorage = (item: string) => {
    localStorage.removeItem(item);
    document.cookie = `${item}=`;
  };

  removeManyStorage = (array: string[]) => {
    array.forEach((item) => {
      localStorage.removeItem(item);
      document.cookie = `${item}=`;
    });
  };
}
