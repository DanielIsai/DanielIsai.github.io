var cuelloForma = new THREE.CylinderGeometry(1, 1, 10);
var cuello2Forma = new THREE.CylinderGeometry(1, 1, 10);
var cuerpoForma = new THREE.SphereGeometry(3);
var baseForma = new THREE.CylinderGeometry(5, 5, 1);

cuello2Forma.rotateX( Math.PI/4 );
cuelloForma.translate(0,3,0);

var cuelloMalla = new THREE.Mesh(cuelloForma);
var cuello2Malla = new THREE.Mesh(cuello2Forma);
var cuerpoMalla= new THREE.Mesh(cuerpoForma);
var baseMalla= new THREE.Mesh(baseForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(cuelloMalla.geometry, cuelloMalla.matrix);
arbolForma.merge(cuell2oMalla.geometry, cuello2Malla.matrix);
arbolForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
arbolForma.merge(baseMalla.geometry, baseMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);



var escena = new THREE.Scene();
escena.add(arbolMalla);
//escena.add(troncoMalla);
//escena.add(esferaMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
