//Definir figura
var cuerpoFigura = new THREE.Shape();

cuerpoFigura.moveTo( 0,  0,  0);
cuerpoFigura.lineTo( 0,  0,  0);
cuerpoFigura.lineTo( 1,  0,  0);
cuerpoFigura.lineTo( 1,  1,  0);
cuerpoFigura.lineTo( 0,  1,  0);
cuerpoFigura.lineTo( 0,  0,  5);
cuerpoFigura.lineTo( 1,  0,  5);
cuerpoFigura.lineTo( 1,  1,  5);
cuerpoFigura.lineTo( 0,  1,  5);

cuerpoFigura.translate(0,3,0);

var cuerpoForma = new THREE.ShapeGeometry(cuerpoFigura);
var malla = new THREE.Mesh(cuerpoForma);
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 8;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
