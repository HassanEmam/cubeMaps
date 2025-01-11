/**
 * Resize a base64 image using Canvas API.
 * @param {string} base64Str - The base64 string of the image.
 * @param {number} targetWidth - Desired width.
 * @param {number} targetHeight - Desired height.
 * @returns {Promise<string>} - A promise that resolves to the resized base64 image string.
 */
export const resizeBase64Image = (base64Str, targetWidth, targetHeight) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Create a canvas with the target dimensions
      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // Draw the image on the canvas
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      // Get the resized image as base64
      const resizedBase64 = canvas.toDataURL("image/jpeg");
      resolve(resizedBase64);
    };
    img.onerror = (err) => reject(err);
    img.src = base64Str;
  });
};
