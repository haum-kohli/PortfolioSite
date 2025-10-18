import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();



const camera = new THREE.PerspectiveCamera(75, w / h, 1, 1000);
camera.position.z = 50
const renderer = new THREE.WebGLRenderer({antialias: true });
renderer.setSize(w, h);
renderer.setClearColor (0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);


const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 2.5 );
				light.position.set( 0.5, 1, 0.75 );
				scene.add( light );


                
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update()








const groundGeometry = new THREE.PlaneGeometry(200,200,302,302);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x153100,
    side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.position.set (0,-2,0)
groundMesh.receiveShadow = true;
scene.add(groundMesh);






function animate(t=0) {
    requestAnimationFrame(animate);

  


   controls.update();
renderer.render(scene, camera);}

animate();



