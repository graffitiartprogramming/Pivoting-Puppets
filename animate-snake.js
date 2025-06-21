
    AFRAME.registerComponent("animate-snake", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        
        this.pngArray = [];
        
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/1.png?v=1690316749044"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/2.png?v=1690316749473"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/3.png?v=1690316749896"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/4.png?v=1690316750294"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/5.png?v=1690316750678"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/6.png?v=1690316751112"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/7.png?v=1690316751463"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/6.png?v=1690316751112"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/5.png?v=1690316750678"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/4.png?v=1690316750294"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/3.png?v=1690316749896"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/2.png?v=16903167494738"
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
          }, 100);
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
