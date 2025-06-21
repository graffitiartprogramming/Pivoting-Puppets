
// Define a global array to track selected images
const selectedImages = [];

AFRAME.registerComponent("random-artwork", {
  init: function () {
    // Define an array of image URLs
    const imageArray = [
      'https://graffitiartprogramming.github.io/pivoting-puppets/001.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/002.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/003.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/004.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/005.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/006.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/007.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/008.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/009.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/010.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/011.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/012.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/013.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/014.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/015.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/016.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/017.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/018.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/019.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/020.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/021.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/022.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/023.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/024.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/025.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/026.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/027.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/028.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/029.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/030.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/031.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/032.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/033.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/034.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/035.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/036.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/037.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/038.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/039.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/040.jpg',

      'https://graffitiartprogramming.github.io/pivoting-puppets/041.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/042.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/043.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/044.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/045.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/046.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/047.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/048.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/049.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/050.jpg',
      
      'https://graffitiartprogramming.github.io/pivoting-puppets/051.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/052.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/053.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/054.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/055.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/056.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/057.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/058.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/059.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/060.jpg',
      
      'https://graffitiartprogramming.github.io/pivoting-puppets/061.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/062.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/063.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/064.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/065.jpg',
      'https://graffitiartprogramming.github.io/pivoting-puppets/066.jpg',

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