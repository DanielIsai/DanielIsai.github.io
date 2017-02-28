//Definir figura
var figura = new THREE.Shape();

figura.moveTo( 0,  0,  0);
figura.lineTo( 0,  0,  0);
figura.lineTo( 1,  0,  0);
figura.lineTo( 1,  1,  0);
figura.lineTo( 0,  1,  0);
figura.lineTo( 0,  0,  5);
figura.lineTo( 1,  0,  5);
figura.lineTo( 1,  1,  5);
figura.lineTo( 0,  1,  5);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 10;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
