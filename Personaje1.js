var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.sin( i * 0.3 ) * 17 + 63,
                     ( i - 4 ) * 4 ) );
}

var sombreroForma= new THREE.LatheGeometry(puntos);
var esferaForma = new THREE.SphereGeometry(.65);

var sombreroMaya = new THREE.Mesh(sombreroForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(sombreroMalla.geometry, sombreroMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);


var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh( arbolForma, material );


var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
