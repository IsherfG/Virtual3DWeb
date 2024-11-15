import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );

const group = new THREE.Group();
scene.add(group)
const cube1 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color : "blue"}))
const cube2 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color : "red"}))
cube1.position.x = 2
group.add(cube1)
group.add(cube2)
const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);

camera.position.z = 5;

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render( scene, camera );