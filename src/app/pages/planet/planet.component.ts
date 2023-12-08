import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements AfterViewInit{

  public renderer!: THREE.WebGLRenderer;
  public camera!: THREE.OrthographicCamera;
  public scene!: THREE.Scene;
  public planet!: THREE.Group;
  @ViewChild('canvasAAfficher') el!: ElementRef;

  ngAfterViewInit() {

    this.start();

  }
  public tree() {
    for (let index = 0; index < 3; index++) {
      const forestCenter = new THREE.Vector3();
      forestCenter.x = Math.floor(Math.random() * 40) - 20;
      forestCenter.y = Math.floor(Math.random() * 40) - 20;
      forestCenter.z = Math.floor(Math.random() * 40) - 20;
      forestCenter.clampLength(15, 15);

      for (let index = 0; index < 2000; index++) {
        const three = new THREE.Group();
        let f = new THREE.BoxGeometry(1, 0.5, 0.5);
        let mate = new THREE.MeshStandardMaterial({
          color: 0x7d6634,
          metalness: 0.0,
          flatShading: true,
          roughness: 1,
        });
        let d = new THREE.Mesh(f, mate);
        d.position.x = 0;
        three.add(d);

        f = new THREE.BoxGeometry(1, 2, 2);
        mate = new THREE.MeshStandardMaterial({
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
        three.lookAt(this.planet.position);
        three.rotateY(Math.PI / 2);
        three.rotateX(Math.random() * Math.PI);

        const scale = Math.random() / 2 + 0.7;
        three.scale.set(scale, scale, scale);

        const e = Math.random() * 15;

        if (e > three.position.distanceTo(forestCenter)) {
          this.planet.add(three);
        }
      }
    }

    for (let index = 0; index < 2; index++) {
      const forestCenter = new THREE.Vector3();
      forestCenter.x = Math.floor(Math.random() * 40) - 20;
      forestCenter.y = Math.floor(Math.random() * 40) - 20;
      forestCenter.z = Math.floor(Math.random() * 40) - 20;
      forestCenter.clampLength(15, 15);

      for (let index = 0; index < 2000; index++) {
        const three = new THREE.Group();
        let f = new THREE.BoxGeometry(1, 0.5, 0.5);
        let mate = new THREE.MeshStandardMaterial({
          color: 0x7d6634,
          metalness: 0.0,
          flatShading: true,
          roughness: 1,
        });
        let d = new THREE.Mesh(f, mate);
        d.position.x = 0;
        three.add(d);

        f = new THREE.BoxGeometry(1, 1.5, 1.5);
        mate = new THREE.MeshStandardMaterial({
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
        three.lookAt(this.planet.position);
        three.rotateY(Math.PI / 2);
        three.rotateX(Math.random() * Math.PI);

        const scale = Math.random() / 2 + 0.7;
        three.scale.set(scale, scale, scale);

        const e = Math.random() * 15;

        if (e > three.position.distanceTo(forestCenter)) {
          this.planet.add(three);
        }
      }
    }
  }

  public start() {
    this.scene = new THREE.Scene();
    if (this.el) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.el.nativeElement});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // ---------------- CAMERA ----------------
    this.camera = new THREE.OrthographicCamera(
      -window.innerWidth / 25,
      window.innerWidth / 25,
      window.innerHeight / 25,
      -window.innerHeight / 25
    );
    this.camera.position.set(40, 0, 0);
    this.camera.rotation.y = Math.PI / 2;

    this.planet = new THREE.Group();

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(4, 5, 2);
    this.planet.add(directionalLight);
    const directionalLightOposite = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLightOposite.position.set(-4, -5, -2);
    this.planet.add(directionalLightOposite);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const geometry = new THREE.SphereGeometry(15, 30);
    let mat = new THREE.MeshStandardMaterial({
      color: 0x73a572,
      metalness: 0.0,
      flatShading: false,
      roughness: 1
    });

    const sphere = new THREE.Mesh(geometry, mat);

    this.tree();

    this.planet.add(sphere);
    const planetGroup = new THREE.Group();
    planetGroup.add(this.planet);
    this.scene.add(planetGroup);
    this.scene.add(this.camera);

    this.scene.background = new THREE.Color(0xadcbfd);

    this.animate();
  }
  }



  public animate() {
    if (this.renderer) {
    this.renderer.render(this.scene, this.camera);
    }
    if (this.planet.parent) {
    this.planet.parent.rotation.z += Math.PI / 40;
    this.planet.parent.rotation.x += Math.PI / 35;
    this.planet.parent.rotation.y += Math.PI / 60;
    }

    requestAnimationFrame(() => {this.animate()});
  }

}
