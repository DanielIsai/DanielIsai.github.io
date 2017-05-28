var P2figura = new THREE.Shape();


P2figura.lineTo(0,0);
P2figura.lineTo(1,0);
P2figura.lineTo(1,2);
P2figura.lineTo(2,2);
P2figura.lineTo(2,1);

P2figura.lineTo(3,1);
P2figura.lineTo(3,2);
P2figura.lineTo(4,2);
P2figura.lineTo(4,1);
P2figura.lineTo(5,1);

P2figura.lineTo(5,2);
P2figura.lineTo(6,2);
P2figura.lineTo(6,0);
P2figura.lineTo(7,0);
P2figura.lineTo(7,4);

P2figura.lineTo(6,4);
P2figura.lineTo(6,5);
P2figura.lineTo(7,5);
P2figura.lineTo(7,7);
P2figura.lineTo(6,7);

P2figura.lineTo(6,6);
P2figura.lineTo(4,6);
P2figura.lineTo(4,7);
P2figura.lineTo(3,7);
P2figura.lineTo(3,6);

P2figura.lineTo(1,6);
P2figura.lineTo(1,7);
P2figura.lineTo(0,7);
P2figura.lineTo(0,5);
P2figura.lineTo(1,5);

P2figura.lineTo(1,4);
P2figura.lineTo(0,4);


var P2extrudeSettings = {
	steps: 2,
	amount: 1,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};




var P2forma = new THREE.ExtrudeGeometry( P2figura,P2extrudeSettings);

var P2material = new THREE.MeshNormalMaterial();
var P2malla = new THREE.Mesh( P2forma, P2material );
