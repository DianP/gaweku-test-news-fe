export const getFavicon = (url: string): string => {
  const domain = new URL(url).hostname.replace('www.', '');
  const size = 32;

  const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

  return favicon;
};
