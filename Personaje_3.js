var cuelloForma = new THREE.CylinderGeometry(1, 1, 7);
var cuerpoForma = new THREE.SphereGeometry(3);

var cuelloMalla = new THREE.Mesh(cuelloForma);
var cuerpoMalla= new THREE.Mesch(cuerpoForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(cuelloMalla.geometry, cuelloMalla.matrix);
arbolForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);

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
