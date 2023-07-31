export const preloadImage = (url: string, cb?: () => any) => {
  const img = new Image();
  img.src = url;

  if (cb) cb();
};
