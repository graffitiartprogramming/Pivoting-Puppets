
    AFRAME.registerComponent("animate-giraffe", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe2.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe3.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe4.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe5.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe6.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe5.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe4.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe3.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/giraffe2.png"
          )
        );

        
        

        this.el.addEventListener("loaded", (e) => {
          let mesh = this.el.getObject3D("mesh");
          this.material = mesh.material;

          var i = 0;
          this.id = setInterval((e) => {
            if (i >= this.pngArray.length) i = 0;
            this.material.map = this.pngArray[i++];
            this.material.needsUpdate = true;
          }, 150);
        });
      },
      remove: function () {
        clearInterval(this.id);
        // free the memory
        for (let i = 0; i < this.pngArray.length; i++) {
          this.pngArray[i].dispose();
        }
      },
    });
