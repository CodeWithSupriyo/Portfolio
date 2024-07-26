//THREE JS

//importing three js librairy
//importing three js sublibraries
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//making scene
const scene = new THREE.Scene()

//making a perspective camera.
//you can make any other type of camera also feel free to change the code
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//making the renderer
const renderer = new THREE.WebGLRenderer({
  //selecting the canvas element
  canvas: document.querySelector('#bg')
})

//seting the pixel ratio
renderer.setPixelRatio(window.devicePixelRatio)

//the size of the canvas
renderer.setSize(500, 500)

//making the ambient light to spade the whole light to whole canvas
const light = new THREE.AmbientLight(0x404040); // soft white light
light.position.set(0, 0, 0)
scene.add(light);

//making the point light to make the shapes more real
const pointLight = new THREE.PointLight(0xffffff, 2, 100);
pointLight.position.set(1, 1, 1);
scene.add(pointLight);

//you can yes the the light helper to change the direction of the point light
//const lightHelper = new THREE.PointLightHelper(pointLight)
//scene.add(lightHelper)

//making geometery
//declarying geometery
const torusGeometry = new THREE.TorusGeometry(0.2, 0.1, 100, 100);
const capsuleGeometry = new THREE.CapsuleGeometry(0.1, 0.4, 100, 500);
const material = new THREE.MeshPhongMaterial({ color: 0xF25A34 });
const capsuleMaterial = new THREE.MeshPhongMaterial({ color: 0xFF135C })
const torus = new THREE.Mesh(torusGeometry, material);
const capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial)
const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.7, 0)
const dodecahedronMeterial = new THREE.MeshPhongMaterial({ color: 0x0147CA })
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMeterial)

//adding the shapes to the scene
scene.add(dodecahedron, capsule, torus);

camera.position.z = 5;

torus.position.x = -0.8
torus.position.y = -0.5

capsule.position.x = 0.8
capsule.position.y = -0.5

function animate() {
  renderer.render(scene, camera);
  torus.rotation.x += 0.008;
  torus.rotation.y += 0.008;
  torus.rotation.z += 0.0005;

  capsule.rotation.x += 0.008;
  capsule.rotation.y += 0.008;
  capsule.rotation.z += 0.001;

  dodecahedron.rotation.x += 0.005;
  dodecahedron.rotation.y += 0.008;
  dodecahedron.rotation.z += 0.003;
}
renderer.setAnimationLoop(animate);

// remember these initial values
var tanFOV = Math.tan(((Math.PI / 180) * camera.fov / 2));
var windowHeight = 500;

window.addEventListener('resize', function()
{
  camera.aspect = 500 / 500;
  camera.fov = (360 / Math.PI) * Math.atan(tanFOV * (500 / 500));
  camera.updateProjectionMatrix();

  renderer.setSize(500, 500);
  renderer.render(scene, camera);
});


const lenis = new Lenis({})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function page1Animation() {
  const navBody1 = document.querySelector(".navBody1")
  const navBody2 = document.querySelector(".navBody2")
  const navBody3 = document.querySelector(".navBody3")
  const navBody4 = document.querySelector(".navBody4")

  const partActiveInNav = document.querySelector(".partActiveInNav")

  navBody1.addEventListener("click", () => {
    partActiveInNav.style.left = 413 + "px"
    gsap.to(partActiveInNav, {
      ease: Power4.easeInOut
    })
  })
  navBody2.addEventListener("click", () => {
    partActiveInNav.style.left = 525 + "px"
  })
  navBody3.addEventListener("click", () => {
    partActiveInNav.style.left = 635 + "px"
  })
  navBody4.addEventListener("click", () => {
    partActiveInNav.style.left = 755 + "px"
  })

  let tl = gsap.timeline()

  tl.from("nav h1 , nav h4", {
    y: -30,
    opacity: 0,
    delay: 0.7,
    duration: 1,
    stagger: 0.3
  })

  tl.from(".text .primary-text", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: Power2.easeOut
  })

  tl.from(".text .secondary", {
    x: -100,
    opacity: 0,
    duration: 0.7
  })
}

gsap.registerPlugin(ScrollTrigger)

const page2 = document.querySelector(".page-2")
console.log(page2.offsetWidth)

function getScrollAmount() {
  let page2Width = page2.offsetWidth
  return -(page2Width - window.innerWidth)
}

const tween = gsap.to(page2, {
  x: getScrollAmount,
  duration: 3,
  ease: "none"
})

ScrollTrigger.create({
  trigger: ".wrapperPage-2",
  start: "top 2%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 3,
  invalidateOnRefresh: true,
})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    maarkers: true,
    start: "top 50%",
    end: "top: 0",
    scrub: 5,
  }
})

const mainText = document.querySelector(".mainText")

tl2.from("#skillText", {
  y: 100,
  delay: 1,
  duration: 1.5,
})

tl2.from(mainText, {
  y: 100,
  duration: 1.5,
})

tl2.from(".page-2 .card-1", {
  y: -500,
  opacity: 0,
  duration: 3,
})

tl2.from(".page-2 .card-2", {
  y: 500,
  opacity: 0,
  duration: 0.9,
})

tl2.from(".page-2 .card-3", {
  y: -500,
  opacity: 0,
  duration: 0.9,
})

tl2.from(".page-2 .card-4", {
  y: 500,
  opacity: 0,
  duration: 0.9,
})

tl2.from(".page-2 .card-5", {
  y: -500,
  opacity: 0,
  duration: 0.9,
})

page1Animation()