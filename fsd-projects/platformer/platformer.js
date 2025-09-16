$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(250, 500, 510, 50, "white");
createPlatform(900, 625, 100, 50, "whitw");
createPlatform(1200, 425, 5, 150, "white");
createPlatform(600, 400, 25, 5, "white");
createPlatform(750, 300, 75, 25, "white");
createPlatform(100, 400, 75, 25, "white");
createPlatform(700, 200, 25, 5, "white");
    // TODO 3 - Create Collectables

createCollectable("diamond", 125, 300, 0.5, 0.7);
createCollectable("grace", 590, 300, 0.5, 0.7);
createCollectable("kennedi", 690, 100, 0.5, 0.7);  
    // TODO 4 - Create Cannons

createCannon("top", 200, 1000);
createCannon("left", 250, 1000);
createCannon("top", 900, 750);
createCannon("top", 550, 750);
createCannon("right", 250, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
