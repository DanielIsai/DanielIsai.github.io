	var cuerpo = new THREE.SphereGeometry(6,15,15);
	var cuerpoM = new THREE.Mesh(cuerpo);

	var cilindro = new THREE.CylinderGeometry( 4.5, 3, 2, 16 );
	cilindro.translate(0,6.5,0);
	var cilindroM = new THREE.Mesh(cilindro);
	var cono = new THREE.ConeGeometry( 2.8, 10, 32 );
	cono.translate(0,12,0);
	var conoM = new THREE.Mesh(cono);
	var bola = new THREE.SphereGeometry(1,15,15);
	bola.translate(0,17,0);
	var bolaM = new THREE.Mesh(bola);

	var Punta = new THREE.Geometry();
	Punta.merge(cilindroM.geometry, cilindroM.matrix);
	Punta.merge(conoM.geometry, conoM.matrix);
	Punta.merge(bolaM.geometry, bolaM.matrix);
	var PuntaM = new THREE.Mesh(Punta);
	
	var Punta2 = new THREE.Geometry();
	Punta2.merge(cilindroM.geometry, cilindroM.matrix);
	Punta2.merge(conoM.geometry, conoM.matrix);
	Punta2.merge(bolaM.geometry, bolaM.matrix);
	Punta2.rotateZ(Math.PI/2)		
	var PuntaM2 = new THREE.Mesh(Punta2);
	
	var Punta3 = new THREE.Geometry();
	Punta3.merge(cilindroM.geometry, cilindroM.matrix);
	Punta3.merge(conoM.geometry, conoM.matrix);
	Punta3.merge(bolaM.geometry, bolaM.matrix);
	Punta3.rotateZ(Math.PI/-2)		
	var PuntaM3 = new THREE.Mesh(Punta3);
	
		
	var toro = new THREE.TorusGeometry( 6, 0.7, 10, 8 );
	toro.translate(0,0,7);
	toro.rotateX( Math.PI/2 );
        
	var toro2 = new THREE.TorusGeometry( 4, 0.7, 10, 8 );
	toro2.translate(0,0,10);
	toro2.rotateX( Math.PI/2 );
        
	var toro3 = new THREE.TorusGeometry( 2, 0.7, 10, 8 );
	toro3.translate(0,0,13);
	toro3.rotateX( Math.PI/2 );
        
	var conomini = new THREE.ConeGeometry( 1, 4, 32 );
	conomini.translate(0,17,0);
	conomini.rotateX( Math.PI );
        	
	var toroM = new THREE.Mesh( toro );
	var toroM2 = new THREE.Mesh( toro2 );
	var toroM3 = new THREE.Mesh( toro3 );
	var conominiM = new THREE.Mesh( conomini );
	
	var Reliquia = new THREE.Geometry();
	var ReliquiaMaterial = new THREE.MeshNormalMaterial(  );
	Reliquia.merge(cuerpoM.geometry, cuerpoM.matrix);
	Reliquia.merge(PuntaM.geometry, PuntaM.matrix);
	Reliquia.merge(PuntaM2.geometry, PuntaM2.matrix);
	Reliquia.merge(PuntaM3.geometry, PuntaM3.matrix);
	
	Reliquia.merge(toroM.geometry, toroM.matrix);
	Reliquia.merge(toroM2.geometry, toroM2.matrix);		
	Reliquia.merge(toroM3.geometry, toroM3.matrix);		
	Reliquia.merge(conominiM.geometry, conominiM.matrix);	
	Reliquia.rotateX( Math.PI/8 );
	Reliquia.rotateY( Math.PI/-8 );
	var ReliquiaM = new THREE.Mesh( Reliquia, ReliquiaMaterial )
	
