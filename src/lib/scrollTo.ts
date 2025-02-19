export const scrollToForm = () => {
  const element = document.getElementById('form');

  if (element) {
    scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY,
    });
  }
};

export const scrollToCases = () => {
  const element = document.getElementById('footer');

  if (element) {
    scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY,
    });
  }
};
