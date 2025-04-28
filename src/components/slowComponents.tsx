const waitForRender = (miliseconds: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < miliseconds) now = Date.now();
};

export const FirstSlowComponent = () => {
  waitForRender(500);
  return null;
};

export const SecondSlowComponent = () => {
  waitForRender(500);
  return null;
};
