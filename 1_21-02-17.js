//Visualizar escena
var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.9, window.innerHeight*.9 );
document.body.appendChild( renderer.domElement );
renderer.render( escena, camara );

//Definir figura

  
  /*Ejemplo Cubo
  var forma = new THREE.BoxGeometry( 1, 1, 1 );
  var cubo  = new THREE.Mesh( forma );
  cubo.rotation.x += 0.1;
  cubo.rotation.y += 0.1;*/


var forma = new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 1,  0,  1 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  0, -1 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  0, -1 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  0,  1 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  1,  0 ) ); // Vértice 4

forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5

var material = new THREE.MeshNormalMaterial;
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);



//Agregar a la escena
escena.add( malla );
renderer.render( escena, camara );
