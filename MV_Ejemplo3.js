//Visualizar escena
var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.9, window.innerHeight*.9 );
document.body.appendChild( renderer.domElement );
renderer.render( escena, camara );

//Definir figura
var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 40);
figura.lineTo(40, 40);
figura.lineTo(10, 10);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

//Agregar a la escena
escena.add(malla);
renderer.render( escena, camara );
