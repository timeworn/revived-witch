// @ts-ignore
const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_CDN;

export const getImageUrl = (path: string | undefined): string => {
  return `${baseImageUrl}/${path}`;
};

export const getCubismUrl = (path: string | undefined): string => {
  return `/${path}`;
};
