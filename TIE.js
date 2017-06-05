

var cabinaForma = new THREE.SphereGeometry(1*3);
var cabinaMalla = new THREE.Mesh(cabinaForma);

var ala1Forma = new THREE.CylinderGeometry(1.5*3, 1.5*3, 0.25*3, 6);
ala1Forma.rotateZ( Math.PI/2);
ala1Forma.translate(-1.5*3,0,0);
var ala1Malla = new THREE.Mesh(ala1Forma);

var ala2Forma = new THREE.CylinderGeometry(1.5*3, 1.5*3, 0.25*3, 6);
ala2Forma.rotateZ( Math.PI/2);
ala2Forma.translate(1.5*3,0,0);
var ala2Malla = new THREE.Mesh(ala2Forma);


var soporteForma = new THREE.CylinderGeometry(0.3*3, 0.3*3, 3*3);
soporteForma.rotateZ( Math.PI/2);
var soporteMalla = new THREE.Mesh(soporteForma);  


var TIEForma = new THREE.Geometry();

TIEForma.merge(cabinaMalla.geometry, cabinaMalla.matrix);
TIEForma.merge(ala1Malla.geometry, ala1Malla.matrix);
TIEForma.merge(ala2Malla.geometry, ala2Malla.matrix);
TIEForma.merge(soporteMalla.geometry, soporteMalla.matrix);


var TIE = new THREE.Mesh(TIEForma, new THREE.MeshNormalMaterial());





