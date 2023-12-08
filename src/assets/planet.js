import * as THREE from "three";

alert("ok");

var renderer;
var camera;
var scene;
var planet;

function tree() {
  for (let index = 0; index < 3; index++) {
    var forestCenter = new THREE.Vector3();
    forestCenter.x = Math.floor(Math.random() * 40) - 20;
    forestCenter.y = Math.floor(Math.random() * 40) - 20;
    forestCenter.z = Math.floor(Math.random() * 40) - 20;
    forestCenter.clampLength(15, 15);

    for (let index = 0; index < 2000; index++) {
      var three = new THREE.Group();
      var f = new THREE.BoxGeometry(1, 0.5, 0.5);
      var mate = new THREE.MeshStandardMaterial({
        color: 0x7d6634,
        metalness: 0.0,
        flatShading: true,
        roughness: 1,
      });
      var d = new THREE.Mesh(f, mate);
      d.position.x = 0;
      three.add(d);

      f = new THREE.BoxGeometry(1, 2, 2);
      var mate = new THREE.MeshStandardMaterial({
        color: 0x386637,
        metalness: 0.0,
        flatShading: true,
        roughness: 1,
      });
      d = new THREE.Mesh(f, mate);
      d.position.x = 1;
      three.add(d);

      f = new THREE.BoxGeometry(0.5, 1, 1);
      d = new THREE.Mesh(f, mate);
      d.position.x = 1.75;
      three.add(d);
      three.position.x = Math.floor(Math.random() * 40) - 20;
      three.position.y = Math.floor(Math.random() * 40) - 20;
      three.position.z = Math.floor(Math.random() * 40) - 20;

      three.position.clampLength(15, 15);
      three.lookAt(planet.position);
      three.rotateY(Math.PI / 2);
      three.rotateX(Math.random() * Math.PI);

      let scale = Math.random()/2+0.7
      three.scale.set(scale, scale, scale)

      
      let e = Math.random() * 15;

      if (e > three.position.distanceTo(forestCenter)) {
        planet.add(three);
      }
    }
  }

  for (let index = 0; index < 2; index++) {
    var forestCenter = new THREE.Vector3();
    forestCenter.x = Math.floor(Math.random() * 40) - 20;
    forestCenter.y = Math.floor(Math.random() * 40) - 20;
    forestCenter.z = Math.floor(Math.random() * 40) - 20;
    forestCenter.clampLength(15, 15);

    for (let index = 0; index < 2000; index++) {
      var three = new THREE.Group();
      var f = new THREE.BoxGeometry(1, 0.5, 0.5);
      var mate = new THREE.MeshStandardMaterial({
        color: 0x7d6634,
        metalness: 0.0,
        flatShading: true,
        roughness: 1,
      });
      var d = new THREE.Mesh(f, mate);
      d.position.x = 0;
      three.add(d);

      f = new THREE.BoxGeometry(1, 1.5, 1.5);
      var mate = new THREE.MeshStandardMaterial({
        color: 0x3e5b3d,
        metalness: 0.0,
        flatShading: true,
        roughness: 1,
      });

      d = new THREE.Mesh(f, mate);
      d.position.x = 1;
      three.add(d);

      f = new THREE.BoxGeometry(1, 1, 1);
      d = new THREE.Mesh(f, mate);
      d.position.x = 2;
      three.add(d);

      f = new THREE.BoxGeometry(1, 0.5, 0.5);
      d = new THREE.Mesh(f, mate);
      d.position.x = 3;
      three.add(d);

      three.position.x = Math.floor(Math.random() * 40) - 20;
      three.position.y = Math.floor(Math.random() * 40) - 20;
      three.position.z = Math.floor(Math.random() * 40) - 20;

      three.position.clampLength(15, 15);
      three.lookAt(planet.position);
      three.rotateY(Math.PI / 2);
      three.rotateX(Math.random() * Math.PI);

      let scale = Math.random()/2+0.7
      three.scale.set(scale, scale, scale)

      let e = Math.random() * 15;

      if (e > three.position.distanceTo(forestCenter)) {
        planet.add(three);
      }
    }
  }
}

function planet() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // ---------------- CAMERA ----------------
  camera = new THREE.OrthographicCamera(
    -window.innerWidth / 38,
    window.innerWidth / 38,
    window.innerHeight / 38,
    -window.innerHeight / 38
  );
  camera.position.set(40, 0, 0);
  camera.rotation.y = Math.PI / 2;

  planet = new THREE.Group();

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(4, 5, 2);
  planet.add(directionalLight);
  const directionalLightOposite = new THREE.DirectionalLight(0xffffff, 0.2);
  directionalLightOposite.position.set(-4, -5, -2);
  planet.add(directionalLightOposite);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const geometry = new THREE.SphereGeometry(15, 30);
  var mat = new THREE.MeshStandardMaterial({
    color: 0x73a572,
    metalness: 0.0,
    flatShading: false,
    roughness: 1,
    envMaps: "reflection",
  });

  const sphere = new THREE.Mesh(geometry, mat);

  tree();

  planet.add(sphere);
  var planetGroup = new THREE.Group();
  planetGroup.add(planet);
  scene.add(planetGroup);
  scene.add(camera);

  scene.background = new THREE.Color(0xadcbfd);

  animate();
}

var mouseDown = false;
var lastX = null;
var lastY = null;

document.onmousedown = () => {
  mouseDown = true;
};

document.onmouseup = () => {
  mouseDown = false;
};

document.onmousemove = (event) => {
  if (mouseDown && lastX) {
    planet.rotation.y -= (lastX - event.clientX) / 100;
    planet.parent.rotation.z += (lastY - event.clientY) / 100;

    if (planet.parent.rotation.z > 1.25 || planet.parent.rotation.z < -1.25) {
      planet.parent.rotation.z -= (lastY - event.clientY) / 100;
    }
  }
  lastX = event.clientX;
  lastY = event.clientY;
};

function animate() {
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}
