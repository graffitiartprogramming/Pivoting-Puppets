
    AFRAME.registerComponent("animate-peyton-flower", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower1.png?v=1692736404130"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower2.png?v=1692736404549"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower3.png?v=1692736404949"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower4.png?v=1692736405357"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower5.png?v=1692736405846"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower4.png?v=1692736405357"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower3.png?v=1692736404949"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/peytonflower2.png?v=1692736404549"
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
          }, 120);
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
