var P3puntos = [];
for ( var i = 0; i < 4; i ++ ) {
    P3puntos.push( new THREE.Vector2(
                     Math.sin( i * 10 ) * 2 + 1,
                     ( i - 4 ) *5) );
}

var P3sombreroForma= new THREE.LatheGeometry(P3puntos);
var P3esferaForma = new THREE.SphereGeometry(4.5);
var P3baseForma = new THREE.CylinderGeometry(4, 4, 1);

P3sombreroForma.translate(0,2,0);
P3baseForma.translate(0,-17,0);

var P3sombreroMalla = new THREE.Mesh(P3sombreroForma);
var P3esferaMalla = new THREE.Mesh(P3esferaForma);
var P3baseMalla= new THREE.Mesh(P3baseForma);


var P3arbolForma = new THREE.Geometry();

P3arbolForma.merge(P3sombreroMalla.geometry, P3sombreroMalla.matrix);
P3arbolForma.merge(P3esferaMalla.geometry, P3esferaMalla.matrix);
P3arbolForma.merge(P3baseMalla.geometry, P3baseMalla.matrix);

var P3material = new THREE.MeshNormalMaterial();
var P3arbolMalla = new THREE.Mesh( P3arbolForma, P3material );
