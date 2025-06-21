AFRAME.registerComponent("animate-random", {
  init: function () {
    // List of available animation functions
    const animationFunctions = [
      "animate-snake",
    "animate-aligator",
    "animate-dinosaur",
    "animate-dragonfly",
    "animate-crab",
    "winter-puppet-1",
    "winter-puppet-2",
    "winter-puppet-3",
    "winter-puppet-4",
    "animate-blueguy",
    "animate-orangeguy",
    "animate-ant",
    "animate-frog",
    "animate-fireguy",
    "animate-giraffe",
    "animate-peyton-carrot",
    "animate-peyton-flower",
    "animate-pritchard-frog",
    "animate-pritchard-bat",
    "animate-fish",
    "animate-bear",
    "animate-horseshoecrab",
    ];

    // Randomly choose an animation function
    const randomIndex = Math.floor(Math.random() * animationFunctions.length);
    const randomAnimation = animationFunctions[randomIndex];

    // Apply the randomly chosen animation function
    this.el.setAttribute(randomAnimation, {});
  }
});