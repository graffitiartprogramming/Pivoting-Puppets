
    AFRAME.registerComponent("animate-thwomp", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp3.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp5.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp9.png"
          )
        );
                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp11.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp13.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp13.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp13.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp12.png"
          )
        );

                this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp11.png"
          )
        );
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp10.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp9.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp8.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp7.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp6.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp5.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp4.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp3.png"
          )
        );

                
                        this.pngArray.push(
          loader.load(
            "https://graffitiartprogramming.github.io/pivoting-puppets/thwomp2.png"
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
