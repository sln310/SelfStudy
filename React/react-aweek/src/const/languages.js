export const LANGUAGES = ["JavaScript", "C++", "Rudy", "Java", "PHP", "Go"];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};
