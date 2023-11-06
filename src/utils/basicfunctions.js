const sliceString = (str) => {
  if (str.length > 100) {
    return str.slice(0, 100) + "...";
  }
  return str;
};

export { sliceString };
