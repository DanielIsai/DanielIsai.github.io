var P1cuelloForma = new THREE.CylinderGeometry(1, 1, 10);
var P1cuello2Forma = new THREE.CylinderGeometry(1, 1, 10);
var P1pataForma = new THREE.CylinderGeometry(1.5, 1.5, 10);
var P1cuerpoForma = new THREE.SphereGeometry(3);
var P1cabeza1Forma = new THREE.SphereGeometry(2.5);
var P1cabeza2Forma = new THREE.SphereGeometry(2.5);
var P1baseForma = new THREE.CylinderGeometry(5, 5, 1);

P1cuello2Forma.rotateZ( Math.PI/4);
P1cuello2Forma.translate(-3,3,0);
P1cuelloForma.translate(0,3,0);
P1baseForma.translate(0,-8,0);
P1pataForma.translate(0,-4,0);
P1cabeza1Forma.translate(0,9,0);
P1cabeza2Forma.translate(-7,7,0);

var P1cuelloMalla = new THREE.Mesh(P1cuelloForma);
var P1cuello2Malla = new THREE.Mesh(P1cuello2Forma);
var P1cuerpoMalla= new THREE.Mesh(P1cuerpoForma);
var P1baseMalla= new THREE.Mesh(P1baseForma);
var P1pataMalla= new THREE.Mesh(P1pataForma);
var P1cabeza1Malla = new THREE.Mesh(P1cabeza1Forma);
var P1cabeza2Malla = new THREE.Mesh(P1cabeza2Forma);

var P1arbolForma = new THREE.Geometry();

P1arbolForma.merge(P1cuelloMalla.geometry, P1cuelloMalla.matrix);
P1arbolForma.merge(P1cuello2Malla.geometry, P1cuello2Malla.matrix);
P1arbolForma.merge(P1cuerpoMalla.geometry, P1cuerpoMalla.matrix);
P1arbolForma.merge(P1baseMalla.geometry, P1baseMalla.matrix);
P1arbolForma.merge(P1pataMalla.geometry, P1pataMalla.matrix);
P1arbolForma.merge(P1cabeza1Malla.geometry, P1cabeza1Malla.matrix);
P1arbolForma.merge(P1cabeza2Malla.geometry, P1cabeza2Malla.matrix);




var P1material = new THREE.MeshNormalMaterial();
var P1arbolMalla = new THREE.Mesh(P1arbolForma, P1material);

