
// Define a global array to track selected images
const selectedImages = [];

AFRAME.registerComponent("random-artwork", {
  init: function () {
    // Define an array of image URLs
    const imageArray = [
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/001.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/002.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/003.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/004.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/005.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/006.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/007.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/008.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/009.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/010.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/011.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/012.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/013.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/014.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/015.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/016.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/017.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/018.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/019.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/020.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/021.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/022.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/023.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/024.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/025.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/026.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/027.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/028.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/029.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/030.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/031.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/032.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/033.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/034.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/035.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/036.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/037.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/038.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/039.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/040.jpg',

      'https://graffitiartprogramming.github.io/Pivoting-Puppets/041.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/042.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/043.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/044.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/045.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/046.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/047.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/048.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/049.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/050.jpg',
      
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/051.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/052.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/053.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/054.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/055.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/056.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/057.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/058.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/059.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/060.jpg',
      
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/061.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/062.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/063.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/064.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/065.jpg',
      'https://graffitiartprogramming.github.io/Pivoting-Puppets/066.jpg',

      // Add more image URLs as needed
    ];

    // Get a reference to the <a-image> element within the entity
    const imageElement = this.el.querySelector('a-image');

    // Check if the entity contains an <a-image> element and the image array is not empty
    if (imageElement && imageArray.length > 0) {
      // Filter out images that have already been selected
      const availableImages = imageArray.filter((image) => !selectedImages.includes(image));

      // Check if there are available images
      if (availableImages.length > 0) {
        // Randomly select an image URL from the available images
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const selectedImage = availableImages[randomIndex];

        // Add the selected image to the global array
        selectedImages.push(selectedImage);

        // Create an Image object to get the image's dimensions
        const img = new Image();
        img.src = selectedImage;

        img.onload = () => {
          // Get the image's original width and height
          const imgWidth = img.width;
          const imgHeight = img.height;

          // Calculate the scale factor to maintain the aspect ratio
          const scaleFactor = imgHeight / imgWidth;

          // Set the <a-image> component's src and width attributes
          imageElement.setAttribute('src', selectedImage);
          imageElement.setAttribute('width', '1'); // Adjust the width as needed

          // Set the height based on the aspect ratio
          imageElement.setAttribute('height', `${1 * scaleFactor}`); // Adjust the height as needed
        };
      }
    }
  }
});