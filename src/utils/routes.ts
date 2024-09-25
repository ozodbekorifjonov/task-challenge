export const methodsRemoveMainPath = <T extends `/${string}`>(main: T) => {
  const mainPath = main;
  const removePath = (path: `${T}/${string}`) => {
    return path.replace(mainPath, '');
  };

  return { removePath };
};
