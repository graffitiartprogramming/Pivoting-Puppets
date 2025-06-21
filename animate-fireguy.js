
    AFRAME.registerComponent("animate-fireguy", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy1.png?v=1692736111376"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy2.png?v=1692736111816"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy3.png?v=1692736112260"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy4.png?v=1692736112612"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy5.png?v=1692736112998"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy4.png?v=1692736112612"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy3.png?v=1692736112260"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/fireguy2.png?v=1692736111816"
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
