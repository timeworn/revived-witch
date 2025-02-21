// @ts-ignore
const baseImageUrl = "";

export const getImageUrl = (path: string | undefined): string => {
  return `${baseImageUrl}/${path}`;
};

export const getCubismUrl = (path: string | undefined): string => {
  return `/${path}`;
};
