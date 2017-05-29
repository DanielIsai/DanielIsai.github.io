

THREE.ImageUtils.crossOrigin = '';
var A_A_textura   = THREE.ImageUtils.loadTexture('espacio.jpg');
var A_A_material  = new THREE.MeshBasicMaterial( {map: A_A_textura} );
	 
var A_A_figura = new THREE.Shape();


A_A_figura.lineTo(0,0);A_A_figura.lineTo(1,0);A_A_figura.lineTo(1,2);A_A_figura.lineTo(2,2);A_A_figura.lineTo(2,1);
A_A_figura.lineTo(3,1);A_A_figura.lineTo(3,2);A_A_figura.lineTo(4,2);A_A_figura.lineTo(4,1);A_A_figura.lineTo(5,1);
A_A_figura.lineTo(5,2);A_A_figura.lineTo(6,2);A_A_figura.lineTo(6,0);A_A_figura.lineTo(7,0);A_A_figura.lineTo(7,4);
A_A_figura.lineTo(6,4);A_A_figura.lineTo(6,5);A_A_figura.lineTo(7,5);A_A_figura.lineTo(7,7);A_A_figura.lineTo(6,7);
A_A_figura.lineTo(6,6);A_A_figura.lineTo(4,6);A_A_figura.lineTo(4,7);A_A_figura.lineTo(3,7);A_A_figura.lineTo(3,6);
A_A_figura.lineTo(1,6);A_A_figura.lineTo(1,7);A_A_figura.lineTo(0,7);A_A_figura.lineTo(0,5);A_A_figura.lineTo(1,5);
A_A_figura.lineTo(1,4);A_A_figura.lineTo(0,4);

var A_A_extrudeSettings = {
	steps: 2,
	amount: 1,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};




var A_A_forma = new THREE.ExtrudeGeometry( A_A_figura,A_A_extrudeSettings);	
var A_A_malla = new THREE.Mesh( A_A_forma, A_A_material );
 
