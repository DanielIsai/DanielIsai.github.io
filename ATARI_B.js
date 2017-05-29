


THREE.ImageUtils.crossOrigin = '';
var A_B_textura   = THREE.ImageUtils.loadTexture('amar.jpg');
var A_B_material  = new THREE.MeshBasicMaterial( {map: A_B_textura} );
	 
var A_B_figura = new THREE.Shape();


A_B_figura.lineTo(0,0);A_B_figura.lineTo(1,0);A_B_figura.lineTo(1,2);A_B_figura.lineTo(2,2);A_B_figura.lineTo(2,1);
A_B_figura.lineTo(3,1);A_B_figura.lineTo(3,2);A_B_figura.lineTo(4,2);A_B_figura.lineTo(4,1);A_B_figura.lineTo(5,1);
A_B_figura.lineTo(5,2);A_B_figura.lineTo(6,2);A_B_figura.lineTo(6,0);A_B_figura.lineTo(7,0);A_B_figura.lineTo(7,4);
A_B_figura.lineTo(6,4);A_B_figura.lineTo(6,5);A_B_figura.lineTo(7,5);A_B_figura.lineTo(7,7);A_B_figura.lineTo(6,7);
A_B_figura.lineTo(6,6);A_B_figura.lineTo(4,6);A_B_figura.lineTo(4,7);A_B_figura.lineTo(3,7);A_B_figura.lineTo(3,6);
A_B_figura.lineTo(1,6);A_B_figura.lineTo(1,7);A_B_figura.lineTo(0,7);A_B_figura.lineTo(0,5);A_B_figura.lineTo(1,5);
A_B_figura.lineTo(1,4);A_B_figura.lineTo(0,4);

var A_B_extrudeSettings = {
	steps: 2,
	amount: 1,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};




var A_B_forma = new THREE.ExtrudeGeometry( A_B_figura,A_B_extrudeSettings);	
var A_B_malla = new THREE.Mesh( A_B_forma, A_B_material );
 
