var cuelloForma = new THREE.CylinderGeometry(3, 3, 7);

var cuelloMalla = new THREE.Mesh(cuelloForma);




var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(cuelloForma, material);

var escena = new THREE.Scene();
escena.add(cuelloMalla);
//escena.add(troncoMalla);
//escena.add(esferaMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
