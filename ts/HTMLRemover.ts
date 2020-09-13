 const removeTag = (str: string) : string => {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}


 const removeSpecial = (str: string) : string => {
  return str.replace(/&[^\s].*?;/g, "");
}

 const removeElement = (str: string, name: string) : string => {
  /**
   * Work in Progress
   */
  return str;
}

 const  removeBlockElements = (str : string) : string => {
  str = removeElement(str, "head");
  str = removeElement(str, "style");
  str = removeElement(str, "script");
  str = removeElement(str, "noscript");
  str = removeElement(str, "svg");
  return str;
}

const removeHtml = (str: string) : string => {
  str = removeSpecial(str);
  str = removeTag(str);
  str = removeBlockElements(str);
  return str;
}

export { removeTag };
