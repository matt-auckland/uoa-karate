const getDefaultImageSource = (image) => {
  if (typeof image === "string") {
    return image;
  }

  if (image && typeof image === "object") {
    return image.source || image.src || "";
  }

  return "";
};

export const preloadImages = (images = [], getImageSource = getDefaultImageSource) => {
  if (typeof Image === "undefined" || !Array.isArray(images)) {
    return [];
  }

  const imageSources = [...new Set(images.map(getImageSource).filter(Boolean))];

  return imageSources.map((source) => {
    const preloadedImage = new Image();
    preloadedImage.src = source;
    return preloadedImage;
  });
};

export default {
  preloadImages,
};
