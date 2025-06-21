
    AFRAME.registerComponent("disco-floor", {
      
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco1-modified.png?v=1693273022002"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco2-modified.png?v=1693273021520"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco3-modified.png?v=1693273501778"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco4-modified.png?v=1693273020900"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco5-modified.png?v=1693273020354"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco6-modified.png?v=1693273019937"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco7-modified.png?v=1693273019392"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/disco8-modified.png?v=1693273022508"
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
