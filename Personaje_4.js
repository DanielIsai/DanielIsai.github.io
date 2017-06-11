var P4figura = new THREE.Shape();

P4figura.lineTo(0,0);
P4figura.lineTo(1,0);
P4figura.lineTo(1,1);
P4figura.lineTo(2,1);
P4figura.lineTo(2,2);


P4figura.lineTo(3,2);
P4figura.lineTo(3,1);
P4figura.lineTo(4,1);
P4figura.lineTo(4,0);
P4figura.lineTo(6,0);

P4figura.lineTo(6,2);
P4figura.lineTo(8,2);
P4figura.lineTo(8,0);
P4figura.lineTo(10,0);
P4figura.lineTo(10,1);

P4figura.lineTo(11,1);
P4figura.lineTo(11,2);
P4figura.lineTo(12,2);
P4figura.lineTo(12,1);
P4figura.lineTo(13,1);

P4figura.lineTo(13,0);
P4figura.lineTo(14,0);
P4figura.lineTo(14,8);
P4figura.lineTo(13,8);
P4figura.lineTo(13,11);

P4figura.lineTo(12,11);
P4figura.lineTo(12,12);
P4figura.lineTo(11,12);
P4figura.lineTo(11,13);
P4figura.lineTo(9,13);


P4figura.lineTo(9,14);
P4figura.lineTo(5,14);
P4figura.lineTo(5,13);
P4figura.lineTo(3,13);
P4figura.lineTo(3,12);

P4figura.lineTo(2,12);
P4figura.lineTo(2,11);
P4figura.lineTo(1,11);
P4figura.lineTo(1,8);
P4figura.lineTo(0,8);




var P4extrudeSettings = {
	steps: 2,
	amount: 6,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};




var P4forma = new THREE.ExtrudeGeometry( P4figura,P4extrudeSettings);

var P4material = new THREE.MeshNormalMaterial();
var P4malla = new THREE.Mesh( P4forma, P4material );

