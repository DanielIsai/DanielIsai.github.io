	var cabeza = new THREE.SphereGeometry(4.5,15,15);
	cabeza.translate(0,12,0);
	var cabezaM = new THREE.Mesh(cabeza);
      	var cono2 = new THREE.ConeGeometry( 1.3 , 4, 32 );
	cono2.rotateZ(Math.PI/2);
	var conoM2 = new THREE.Mesh(cono2.translate(-7,12,0));
	var cono3 = new THREE.ConeGeometry( 1.3 , 4, 32 );
	cono3.rotateZ(Math.PI/-2);
	var conoM3 = new THREE.Mesh(cono3.translate(7,12,0));	
	var cilindroMin = new THREE.CylinderGeometry( 2, 1.5, 2, 16 );
	cilindroMin.rotateZ(Math.PI/2);
	var cilindroMinM = new THREE.Mesh(cilindroMin.translate(-4.2,12,0));
	var cilindroMin2 = new THREE.CylinderGeometry( 2, 1.5, 2, 16 );
	cilindroMin2.rotateZ(Math.PI/-2);
	var cilindroMinM2 = new THREE.Mesh(cilindroMin2.translate(4.2,12,0));
			
	var Cabeza = new THREE.Geometry();
	var CabezaMaterial = new THREE.MeshNormalMaterial(  );
	Cabeza.merge(cabezaM.geometry, cabezaM.matrix);
	Cabeza.merge(conoM2.geometry, conoM2.matrix);
	Cabeza.merge(conoM3.geometry, conoM3.matrix);
	Cabeza.merge(cilindroMinM.geometry, cilindroMinM.matrix);
	Cabeza.merge(cilindroMinM2.geometry, cilindroMinM2.matrix);
	var CabezaM = new THREE.Mesh( Cabeza, CabezaMaterial )




	var cuerpo = new THREE.SphereGeometry(6.8,15,15);
	var cuerpoM = new THREE.Mesh(cuerpo);
	var cono = new THREE.ConeGeometry( 2.8, 10, 32 );
	cono.translate(0,13,0);
	var conoM = new THREE.Mesh(cono.rotateX(Math.PI));
	var cilindro = new THREE.CylinderGeometry( 4.5, 3, 2, 16 );
	cilindro.translate(0,7.2,0);
	var cilindroM = new THREE.Mesh(cilindro.rotateX(Math.PI));
	var cilindro2 = new THREE.CylinderGeometry( 4.5, 3, 2, 16 );
	cilindro2.translate(0,7.2,0);
	var cilindroM2 = new THREE.Mesh(cilindro2.rotateZ(Math.PI/2));
	var cilindro3 = new THREE.CylinderGeometry( 4.5, 3, 2, 16 );
	cilindro3.translate(0,7.2,0);
	var cilindroM3 = new THREE.Mesh(cilindro3.rotateZ(Math.PI/-2));

	var Principal = new THREE.Geometry();
	var PrincipalMaterial = new THREE.MeshNormalMaterial(  );
	Principal.merge(conoM.geometry, conoM.matrix);
	Principal.merge(cilindroM.geometry, cilindroM.matrix);	
	Principal.merge(cilindroM3.geometry, cilindroM3.matrix);	
	Principal.merge(cilindroM2.geometry, cilindroM2.matrix);	
	Principal.merge(cuerpoM.geometry, cuerpoM.matrix);
	var PrinM = new THREE.Mesh(Principal,PrincipalMaterial);




	var toro = new THREE.TorusGeometry( 6, 0.5, 10, 8 );
	toro.rotateY( Math.PI/2 );
        var toroM = new THREE.Mesh(toro.translate(10.5,0,0));
	var toro2 = new THREE.TorusGeometry( 4.5, 0.5, 10, 8 );
	toro2.rotateY( Math.PI/2 );
        var toroM2 = new THREE.Mesh(toro2.translate(13.5,0,0));
	var toro3 = new THREE.TorusGeometry( 3.5, 0.5, 10, 8 );
	toro3.rotateY( Math.PI/2 );
        var toroM3 = new THREE.Mesh(toro3.translate(16.5,0,0));
	var toro4 = new THREE.TorusGeometry( 6, 0.5, 10, 8 );
	toro4.rotateY( Math.PI/2 );
        var toroM4 = new THREE.Mesh(toro4.translate(-10.5,0,0));
	var toro5 = new THREE.TorusGeometry( 4.5, 0.5, 10, 8 );
	toro5.rotateY( Math.PI/2 );
        var toroM5 = new THREE.Mesh(toro5.translate(-13.5,0,0));
	var toro6 = new THREE.TorusGeometry( 3.5, 0.5, 10, 8 );
	toro6.rotateY( Math.PI/2 );
        var toroM6 = new THREE.Mesh(toro6.translate(-16.5,0,0));

	var manoI = new THREE.SphereGeometry(2.3,15,15);
	var manoIM = new THREE.Mesh(manoI.translate(21,0,0));
	var manoD = new THREE.SphereGeometry(2.3,15,15);
	var manoDM = new THREE.Mesh(manoD.translate(-21,0,0));
	
	var Brazos = new THREE.Geometry();
	var BrazosMaterial = new THREE.MeshNormalMaterial(  );;
	Brazos.merge(toroM.geometry, toroM.matrix);
	Brazos.merge(toroM2.geometry, toroM2.matrix);
	Brazos.merge(toroM3.geometry, toroM3.matrix);
	Brazos.merge(toroM4.geometry, toroM4.matrix);
	Brazos.merge(toroM5.geometry, toroM5.matrix);
	Brazos.merge(toroM6.geometry, toroM6.matrix);
	Brazos.merge(manoIM.geometry, manoIM.matrix);
	Brazos.merge(manoDM.geometry, manoDM.matrix);
	var BrazosM = new THREE.Mesh(Brazos, BrazosMaterial);



	var Saga = new THREE.Geometry();
	var SagaMaterial = new THREE.MeshNormalMaterial(  );
	Saga.merge(CabezaM.geometry, CabezaM.matrix);
	Saga.merge(PrinM.geometry, PrinM.matrix);
	Saga.merge(BrazosM.geometry, BrazosM.matrix);
	Saga.rotateX( Math.PI/8 );
	Saga.rotateY( Math.PI/-7 );
	
	var SagaM = new THREE.Mesh(Saga, SagaMaterial);

	
