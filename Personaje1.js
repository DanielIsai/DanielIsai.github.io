//Definir figura


var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 0,  0,  0 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  0,  0 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3( 1,  1,  0 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3( 0,  1,  0 ) ); // Vértice 3

forma.vertices.push( new THREE.Vector3( 0,  0,  1 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 1,  0,  1 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3( 1,  1,  1 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3( 0,  1,  1 ) ); // Vértice 7



forma.faces.push( new THREE.Face4( 0, 1, 2, 3 ) ); // Cara 0
forma.faces.push( new THREE.Face4( 4, 5, 6, 7 ) ); // Cara 1
forma.faces.push( new THREE.Face4( 0, 1, 5, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face4( 6, 7, 2, 3 ) ); // Cara 3
forma.faces.push( new THREE.Face4( 5, 6, 1, 2 ) ); // Cara 4
forma.faces.push( new THREE.Face4( 4, 7, 0, 3 ) ); // Cara 5

forma.computeBoundingSphere();

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);

//Visualizar escena
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.9, window.innerHeight*.9 );

document.body.appendChild( renderer.domElement );
renderer.render( escena, camara );
