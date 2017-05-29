


THREE.ImageUtils.crossOrigin = '';
var A_V_textura   = THREE.ImageUtils.loadTexture('erdes.jpg');
var A_V_material  = new THREE.MeshBasicMaterial( {map: textura} );
	 
var A_V_figura = new THREE.Shape();


A_V_figura.lineTo(0,0);A_V_figura.lineTo(1,0);A_V_figura.lineTo(1,2);A_V_figura.lineTo(2,2);A_V_figura.lineTo(2,1);
A_V_figura.lineTo(3,1);A_V_figura.lineTo(3,2);A_V_figura.lineTo(4,2);A_V_figura.lineTo(4,1);A_V_figura.lineTo(5,1);
A_V_figura.lineTo(5,2);A_V_figura.lineTo(6,2);A_V_figura.lineTo(6,0);A_V_figura.lineTo(7,0);A_V_figura.lineTo(7,4);
A_V_figura.lineTo(6,4);A_V_figura.lineTo(6,5);A_V_figura.lineTo(7,5);A_V_figura.lineTo(7,7);A_V_figura.lineTo(6,7);
A_V_figura.lineTo(6,6);A_V_figura.lineTo(4,6);A_V_figura.lineTo(4,7);A_V_figura.lineTo(3,7);A_V_figura.lineTo(3,6);
A_V_figura.lineTo(1,6);A_V_figura.lineTo(1,7);A_V_figura.lineTo(0,7);A_V_figura.lineTo(0,5);A_V_figura.lineTo(1,5);
A_V_figura.lineTo(1,4);A_V_figura.lineTo(0,4);

var A_V_extrudeSettings = {
	steps: 2,
	amount: 1,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};




var A_V_forma = new THREE.ExtrudeGeometry( A_V_figura,A_V_extrudeSettings);	
var A_V_malla = new THREE.Mesh( A_V_forma, A_V_material );
 
