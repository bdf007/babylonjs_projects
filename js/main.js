/// <reference path='./vendor/babylon.d.ts' />

//get our canvas
const canvas = document.getElementById("renderCanvas");

//create a BabylonJS engine
const engine = new BABYLON.Engine(canvas, true);

function createCamera(scene) {
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    0,
    0,
    15,
    BABYLON.Vector3.Zero(),
    scene
  );
  //let user move our camera
  camera.attachControl(canvas);

  //limit camera movement
  camera.lowerRadiusLimit = 1.5;
  camera.upperRadiusLimit = 10;
}

function createLight(scene) {
  const light = new BABYLON.PointLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.5;
  light.groundColor = new BABYLON.Color3(0, 0, 1);
}
//create a sphere
function createSphere(scene) {
  const sphereMaterial = new BABYLON.StandardMaterial("sphereMaterial", scene);
  sphereMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/sun.jpg",
    scene
  );
  sphereMaterial.diffuseColor = BABYLON.Color3.Black();
  sphereMaterial.specularColor = BABYLON.Color3.Black();
  const sphere = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { segments: 16, diameter: 2 },
    scene
  );
  sphere.material = sphereMaterial;
  sphere.position = new BABYLON.Vector3(0, 0.8, 0);
  sphere.scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
}

//create a wall1
function createWall1(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/brown_rock.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 2,
    },
    scene
  );
  box.material = wallMaterial;
  // box.rotation.x = 2;
  // box.rotation.y = 10;
  box.position = new BABYLON.Vector3(0, 0, 0.8);
  box.scaling = new BABYLON.Vector3(1, 1, 0.2);
}

//create a wall2
function createWall2(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/brown_rock.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 2,
    },
    scene
  );
  box.material = wallMaterial;
  // box.rotation.x = 2;
  // box.rotation.y = 10;
  box.position = new BABYLON.Vector3(0.8, 0, 0);
  box.scaling = new BABYLON.Vector3(0.2, 1, 1);
}
//create a wall3
function createWall3(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/dark_rock.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 2,
    },
    scene
  );
  box.material = wallMaterial;
  box.position = new BABYLON.Vector3(0, -1.1, 0);
  box.scaling = new BABYLON.Vector3(1, 0.1, 1);
}

//create a table
function createTablePlate(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/wood.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 1,
    },
    scene
  );
  box.material = wallMaterial;
  box.position = new BABYLON.Vector3(0, -0.5, 0);
  box.scaling = new BABYLON.Vector3(1, 0.1, 1);
  // box.rotation.y = 20;
}
function createTableFeetOne(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/wood.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 0.6,
    },
    scene
  );
  box.material = wallMaterial;
  box.position = new BABYLON.Vector3(0.45, -0.8, 0.45);
  box.scaling = new BABYLON.Vector3(0.1, 1, 0.1);
  // box.rotation.y = 20;
}
function createTableFeetTwo(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/wood.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 0.6,
    },
    scene
  );
  box.material = wallMaterial;
  box.position = new BABYLON.Vector3(0.45, -0.8, -0.45);
  box.scaling = new BABYLON.Vector3(0.1, 1, 0.1);
  // box.rotation.y = 20;
}
function createTableFeetThree(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/wood.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 0.6,
    },
    scene
  );
  box.material = wallMaterial;
  box.position = new BABYLON.Vector3(-0.45, -0.8, 0.45);
  box.scaling = new BABYLON.Vector3(0.1, 1, 0.1);
  // box.rotation.y = 20;
}
function createTableFeetFour(scene) {
  const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/wood.png",
    scene
  );
  wallMaterial.diffuseColor = BABYLON.Color3.Black();
  wallMaterial.specularColor = BABYLON.Color3.Black();
  const box = BABYLON.MeshBuilder.CreateBox(
    "wallMaterial",
    {
      size: 0.6,
    },
    scene
  );
  box.material = wallMaterial;
  box.position = new BABYLON.Vector3(-0.45, -0.8, -0.45);
  box.scaling = new BABYLON.Vector3(0.1, 1, 0.1);
  // box.rotation.y = 20;
}

function createScene() {
  //create a 3D scene
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color3.Black();

  //create a camera
  createCamera();

  //create a light
  createLight(scene);

  //create a sphere
  createSphere(scene);

  //create Wall
  createWall1(scene);

  //create Wall2
  createWall2(scene);

  //create Wall3
  createWall3(scene);

  //create table
  createTablePlate(scene);
  createTableFeetOne(scene);
  createTableFeetTwo(scene);
  createTableFeetThree(scene);
  createTableFeetFour(scene);

  return scene;
}

// create our scene
const scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

//the canvas/window resize event handler
window.addEventListener("resize", function () {
  engine.resize();
});

//create a camera
//   //   const camera = new BABYLON.FreeCamera(
//   //     "camera",
//   //     new BABYLON.Vector3(0, 0, -5),
//   //     scene
//   //   );
//   //   const camera = new BABYLON.UniversalCamera(
//   //     "camera",
//   //     new BABYLON.Vector3(0, 0, -10),
//   //     scene
//   //   );
//   //   const camera = new BABYLON.FollowCamera(
//   //     "camera",
//   //     new BABYLON.Vector3(25, -25, -25),
//   //     scene
//   //   );
//   //   camera.radius = 30;
//   //   camera.attachControl(canvas, true);

//create a light
//   //   const light = new BABYLON.HemisphericLight(
//   //     "light",
//   //     new BABYLON.Vector3(0, 1, 0),
//   //     scene
//   //   );
//   //   const light = new BABYLON.DirectionalLight(
//   //     "light",
//   //     new BABYLON.Vector3(5, -1, 0),
//   //     scene
//   //   );

//   //create a box
//   const box = BABYLON.MeshBuilder.CreateBox(
//     "box",
//     {
//       size: 1,
//     },
//     scene
//   );
//   box.rotation.x = 2;
//   box.rotation.y = 3;

//   camera.lockedTarget = box;

//   //create a sphere
//   const sphere = new BABYLON.MeshBuilder.CreateSphere(
//     "sphere",
//     { segments: 32, diameter: 2 },
//     scene
//   );
//   sphere.position = new BABYLON.Vector3(3, 0, 0);
//   sphere.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);

//   //create plane
//   const plane = new BABYLON.MeshBuilder.CreatePlane("plane", {}, scene);
//   plane.position = new BABYLON.Vector3(-3, 0, 0);

//   //create a line
//   const points = [
//     new BABYLON.Vector3(2, 0, 0),
//     new BABYLON.Vector3(2, 1, 1),
//     new BABYLON.Vector3(2, 1, 0),
//   ];
//   const lines = BABYLON.MeshBuilder.CreateLines(
//     "lines",
//     {
//       points,
//     },
//     scene
//   );

//   //create a material
//   const material = new BABYLON.StandardMaterial("material", scene);
//   material.diffuseColor = new BABYLON.Color3(1, 0, 0);
//   material.emissiveColor = new BABYLON.Color3(0, 1, 0);

//   box.material = material;

//   const material2 = new BABYLON.StandardMaterial("material2", scene);
//   material2.diffuseTexture = new BABYLON.Texture(
//     "assets/images/dark_rock.png",
//     scene
//   );

//   sphere.material = material2;
