
    AFRAME.registerComponent("animate-crab", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/crab1.png?v=1690830503072"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/crab2.png?v=1690830503526"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/crab3.png?v=1690830503936"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/crab4.png?v=1690830504379"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/crab3.png?v=1690830503936"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/crab2.png?v=1690830503526"
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
          }, 200);
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
