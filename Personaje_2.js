var figura = new THREE.Shape();


figura.lineTo(0,0);
figura.lineTo(1,0);
figura.lineTo(1,2);
figura.lineTo(2,2);
figura.lineTo(2,1);

figura.lineTo(3,1);
figura.lineTo(3,2);
figura.lineTo(4,2);
figura.lineTo(4,1);
figura.lineTo(5,1);

figura.lineTo(5,2);
figura.lineTo(6,2);
figura.lineTo(6,0);
figura.lineTo(7,0);
figura.lineTo(7,4);

figura.lineTo(6,4);
figura.lineTo(6,5);
figura.lineTo(7,5);
figura.lineTo(7,7);
figura.lineTo(6,7);

figura.lineTo(6,6);
figura.lineTo(4,6);
figura.lineTo(4,7);
figura.lineTo(3,7);
figura.lineTo(3,6);

figura.lineTo(1,6);
figura.lineTo(1,7);
figura.lineTo(0,7);
figura.lineTo(0,5);
figura.lineTo(1,5);

figura.lineTo(1,4);
figura.lineTo(0,4);


var extrudeSettings = {
	steps: 2,
	amount: 1,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};


//var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );



//var forma = new THREE.ShapeGeometry(figura);

var forma = new THREE.ExtrudeGeometry( figura,extrudeSettings);

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );















