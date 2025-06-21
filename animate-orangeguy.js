
    AFRAME.registerComponent("animate-orangeguy", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/orangeguy1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/orangeguy2.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/orangeguy3.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/orangeguy2.png"
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
          }, 110);
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
