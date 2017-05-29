

THREE.ImageUtils.crossOrigin = '';
var A_M_textura   = THREE.ImageUtils.loadTexture('morado.jpg');
var A_M_material  = new THREE.MeshBasicMaterial( {map: A_M_textura} );
	 
var A_M_figura = new THREE.Shape();


A_M_figura.lineTo(0,0);A_M_figura.lineTo(1,0);A_M_figura.lineTo(1,2);A_M_figura.lineTo(2,2);A_M_figura.lineTo(2,1);
A_M_figura.lineTo(3,1);A_M_figura.lineTo(3,2);A_M_figura.lineTo(4,2);A_M_figura.lineTo(4,1);A_M_figura.lineTo(5,1);
A_M_figura.lineTo(5,2);A_M_figura.lineTo(6,2);A_M_figura.lineTo(6,0);A_M_figura.lineTo(7,0);A_M_figura.lineTo(7,4);
A_M_figura.lineTo(6,4);A_M_figura.lineTo(6,5);A_M_figura.lineTo(7,5);A_M_figura.lineTo(7,7);A_M_figura.lineTo(6,7);
A_M_figura.lineTo(6,6);A_M_figura.lineTo(4,6);A_M_figura.lineTo(4,7);A_M_figura.lineTo(3,7);A_M_figura.lineTo(3,6);
A_M_figura.lineTo(1,6);A_M_figura.lineTo(1,7);A_M_figura.lineTo(0,7);A_M_figura.lineTo(0,5);A_M_figura.lineTo(1,5);
A_M_figura.lineTo(1,4);A_M_figura.lineTo(0,4);

var A_M_extrudeSettings = {
	steps: 2,
	amount: 1,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};




var A_M_forma = new THREE.ExtrudeGeometry( A_M_figura,A_M_extrudeSettings);	
var A_M_malla = new THREE.Mesh( A_M_forma, A_M_material );
 
