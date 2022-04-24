//function that chech length of name and shortened it or not
export const nameCut = (text: string) => {
    const lengthOfText: number = 12;
    return text.length >= lengthOfText ? `${text.slice(0, lengthOfText)}...` : text;
  };