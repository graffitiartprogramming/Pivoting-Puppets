
    AFRAME.registerComponent("animate-thwomp", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp3.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp5.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp9.png"
          )
        );
                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp11.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp13.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp13.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp13.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp12.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp11.png"
          )
        );
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp10.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp9.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp8.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp7.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp6.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp5.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp4.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp3.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/Pivoting-Puppets/thwomp2.png"
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
