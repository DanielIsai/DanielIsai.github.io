var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 2,  0,  0 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 9,  0,  0 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3( 9,  2,  0 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3( 3,  2,  0 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 2,  3,  0 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 2,  5,  0 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3( 3,  6,  0 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3( 9,  6,  0 ) ); // Vértice 7
forma.vertices.push( new THREE.Vector3( 9,  8,  0 ) ); // Vértice 8
forma.vertices.push( new THREE.Vector3( 2,  8,  0 ) ); // Vértice 9
forma.vertices.push( new THREE.Vector3( 0,  6,  0 ) ); // Vértice 10
forma.vertices.push( new THREE.Vector3( 0,  2,  0 ) ); // Vértice 11

forma.vertices.push( new THREE.Vector3( 2,  0,  -2 ) ); // Vértice 12
forma.vertices.push( new THREE.Vector3( 9,  0,  -2 ) ); // Vértice 13
forma.vertices.push( new THREE.Vector3( 9,  2,  -2 ) ); // Vértice 14
forma.vertices.push( new THREE.Vector3( 3,  2,  -2 ) ); // Vértice 15
forma.vertices.push( new THREE.Vector3( 2,  3,  -2 ) ); // Vértice 16
forma.vertices.push( new THREE.Vector3( 2,  5,  -2 ) ); // Vértice 17
forma.vertices.push( new THREE.Vector3( 3,  6,  -2 ) ); // Vértice 18
forma.vertices.push( new THREE.Vector3( 9,  6,  -2 ) ); // Vértice 19
forma.vertices.push( new THREE.Vector3( 9,  8,  -2 ) ); // Vértice 20
forma.vertices.push( new THREE.Vector3( 2,  8,  -2 ) ); // Vértice 21
forma.vertices.push( new THREE.Vector3( 0,  6,  -2 ) ); // Vértice 22
forma.vertices.push( new THREE.Vector3( 0,  2,  -2 ) ); // Vértice 23




forma.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 0, 2, 3 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 0, 3, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 4, 11 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 11, 4, 10 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 10, 4, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 10, 5, 9 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 9, 5, 6 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 9, 6, 7 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 9, 7, 8 ) ); // Cara 9

forma.faces.push( new THREE.Face3( 8, 20, 7 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 7, 20, 19 ) ); // Cara 11
forma.faces.push( new THREE.Face3( 7, 6, 18 ) ); // Cara 12
forma.faces.push( new THREE.Face3( 19, 7, 18 ) ); // Cara 13
forma.faces.push( new THREE.Face3( 8, 20, 9 ) ); // Cara 14
forma.faces.push( new THREE.Face3( 20, 21, 9 ) ); // Cara 15
forma.faces.push( new THREE.Face3( 9, 21, 22 ) ); // Cara 16
forma.faces.push( new THREE.Face3( 9, 22, 10 ) ); // Cara 17
forma.faces.push( new THREE.Face3( 10, 22, 23 ) ); // Cara 18
forma.faces.push( new THREE.Face3( 11, 10, 23 ) ); // Cara 19
forma.faces.push( new THREE.Face3( 0, 11, 12 ) ); // Cara 20
forma.faces.push( new THREE.Face3( 11, 23, 12 ) ); // Cara 21

forma.faces.push( new THREE.Face3( 1, 0, 13 ) ); // Cara 15
forma.faces.push( new THREE.Face3( 0, 12, 13 ) ); // Cara 16
forma.faces.push( new THREE.Face3( 2, 1, 14 ) ); // Cara 17
forma.faces.push( new THREE.Face3( 14, 1, 13 ) ); // Cara 18
forma.faces.push( new THREE.Face3( 2, 3, 15 ) ); // Cara 19
forma.faces.push( new THREE.Face3( 15, 2, 14 ) ); // Cara 20 -0-

forma.faces.push( new THREE.Face3( 3, 4, 15 ) ); // Cara 20
forma.faces.push( new THREE.Face3( 15, 4, 16 ) ); // Cara 21
forma.faces.push( new THREE.Face3( 4, 5, 16 ) ); // Cara 22
forma.faces.push( new THREE.Face3( 16, 5, 17 ) ); // Cara 23
forma.faces.push( new THREE.Face3( 6, 5, 17 ) ); // Cara 24
forma.faces.push( new THREE.Face3( 6, 17, 18 ) ); // Cara 25 -0-


forma.faces.push( new THREE.Face3( 12, 13, 14 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 12, 14, 15 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 12, 15, 16 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 12, 16, 23 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 23, 16, 22 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 22, 16, 17 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 22, 17, 21 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 21, 17, 18 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 21, 18, 19 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 21, 19, 20 ) ); // Cara 9



forma.computeFaceNormals();
forma.computeBoundingSphere();


var malla = new THREE.Mesh( forma );

//----------------------------------------------------------------------------------------------------
//============================================== CUERPO ==============================================
//----------------------------------------------------------------------------------------------------

var cuerpoForma = new THREE.SphereGeometry(5);
cuerpoForma.translate(-4,3.8,0);
		
var cuerpoMalla = new THREE.Mesh(cuerpoForma);


//----------------------------------------------------------------------------------------------------
//============================================== ENSAMBLE ==============================================
//----------------------------------------------------------------------------------------------------

var MagnemiteForma = new THREE.Geometry();

MagnemiteForma.merge(malla.geometry, malla.matrix);
MagnemiteForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var MagnemiteMalla = new THREE.Mesh(MagnemiteForma, material);
MagnemiteMalla.rotateX( Math.PI + 0.5 );
MagnemiteMalla.rotateY( Math.PI + 0.5 );		
MagnemiteMalla.rotateZ( 0 );               