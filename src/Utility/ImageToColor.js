export function getDominantColorFromImage(imageUrl) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "Anonymous"; // Allow cross-origin image fetching if necessary
      image.src = imageUrl;
  
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  
        // Sample colors from the entire image (you can adjust the sample area as needed)
        const sampleSize = 10; // Number of pixels to sample
        const pixelData = ctx.getImageData(0, 0, sampleSize, sampleSize).data;
  
        // Calculate the average RGB values from the sampled pixels
        let sumR = 0,
          sumG = 0,
          sumB = 0;
        for (let i = 0; i < pixelData.length; i += 4) {
          sumR += pixelData[i];
          sumG += pixelData[i + 1];
          sumB += pixelData[i + 2];
        }
        const avgR = Math.round(sumR / (sampleSize * sampleSize));
        const avgG = Math.round(sumG / (sampleSize * sampleSize));
        const avgB = Math.round(sumB / (sampleSize * sampleSize));
  
        // Convert the average RGB color to hex
        const hexColor =
          "#" +
          ((1 << 24) | (avgR << 16) | (avgG << 8) | avgB).toString(16).slice(1);
  
        resolve(hexColor);
      };
  
      image.onerror = (error) => {
        reject(error);
      };
    });
  }
  
