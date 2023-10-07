// Registeammunition component in Collider.js
AFRAME.registerComponent("flying-dragons", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.flyingDragons(id, position);
      }
    },
    flyingDragons: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#terrain");
  
      //creating the dragon model entity
      var dragonEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      dragonEl.setAttribute("id", id);
  
      dragonEl.setAttribute("position", position);
      dragonEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      //set the gLTF model attribute
      dragonEl.setAttribute("gltf-model", "./assets/models/dragon_animation_flying/scene.gltf");
  
      //set animation mixer of models with animation
      dragonEl.setAttribute("animation-mixer", {});
  
      //set the static body of the physic system
      dragonEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });
  
      //set the game play attribute
      dragonEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      //append the dragon entity as the child of the terrain entity
      terrainEl.appendChild(dragonEl);
    },
  });