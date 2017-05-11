

//========================================================================================================================================================
//------------------------------------------------------------------- TORCHIT --------------------------------------------------------------------------
//========================================================================================================================================================


	//================= CABEZA Y CUERPO ========================================

		var cabezaForma = new THREE.SphereGeometry(1.05*5);
		var cuerpoTForma = new THREE.SphereGeometry(0.72*5);
		cabezaForma.translate(0,1.1*5,0);

		var cabezaMalla = new THREE.Mesh(cabezaForma);
		var cuerpoTMalla = new THREE.Mesh(cuerpoTForma);

	//======================= PATAS ===========================================

		
		var pataIForma =  new THREE.CylinderGeometry(0.065*5, 0.065*5, 0.72*5);
		var pataDForma =  new THREE.CylinderGeometry(0.065*5, 0.065*5, 0.72*5);
		pataDForma.translate(-0.25*5,-0.8*5,0);
		pataIForma.translate(0.25*5,-0.8*5,0);

		var pataDMalla = new THREE.Mesh(pataDForma);
		var pataIMalla = new THREE.Mesh(pataIForma);
       //----------------------------------------------------------------------------
		var pezunaDForma =  new THREE.CylinderGeometry(0.05*5, 0.05*5, 0.62*5);
		var pezunaIForma =  new THREE.CylinderGeometry(0.05*5, 0.05*5, 0.62*5);
		pezunaDForma.rotateZ( Math.PI/2 );
		pezunaDForma.rotateY( Math.PI/2.8 );
		pezunaDForma.translate(-0.29*5,-1.20*5,0.08*5);
		
		pezunaIForma.rotateZ( Math.PI/2 );
		pezunaIForma.rotateY( Math.PI-1.1 );
		pezunaIForma.translate(0.29*5,-1.20*5,0.08*5);
			
		var pezunaDMalla = new THREE.Mesh(pezunaDForma);
		var pezunaIMalla = new THREE.Mesh(pezunaIForma);
       //----------------------------------------------------------------------------
		var garraDForma =  new THREE.CylinderGeometry(0.05*5, 0.05*5, 0.4*5);
		var garraIForma =  new THREE.CylinderGeometry(0.05*5, 0.05*5, 0.4*5);
		
		garraDForma.rotateZ( Math.PI/2 );
		garraDForma.rotateY( Math.PI-1.3 );
		garraDForma.translate(-0.17*5,-1.20*5,0.17*5);
		
		garraIForma.rotateZ( Math.PI/2 );
		garraIForma.rotateY( Math.PI/2.5 );
		garraIForma.translate(0.17*5,-1.20*5,0.17*5);
			
		var garraDMalla = new THREE.Mesh(garraDForma);
		var garraIMalla = new THREE.Mesh(garraIForma);

	
//--------------------------------------- PLUMAS SUPERIORES ----------------------------------------

		var plumas = new THREE.Shape();

		plumas.moveTo(1*5, 1*5);
		plumas.lineTo(1.4*5, 1*5);
		plumas.lineTo(1.6*5, 1.2*5);
		plumas.lineTo(1.6*5, 1.6*5);
		plumas.lineTo(1.4*5, 1.4*5);
		plumas.lineTo(1.2*5, 1.8*5);
		plumas.lineTo(1*5, 1.49*5);
		plumas.lineTo(0.8*5, 1.6*5);
		plumas.lineTo(0.8*5, 1.2*5);
		plumas.lineTo(1*5, 1*5);

		
		var extrudeSettings = {
			steps: 1,
			amount: 0.1,
			bevelEnabled: true,
			bevelThickness: 0.1,
			bevelSize: 0.1,
			bevelSegments: 0.5};				

		var plumas = new THREE.ExtrudeGeometry( plumas,extrudeSettings );
		plumas.translate(-1.2*5,0.95*5,-0.5*5);
		
			
		var plumasMalla = new THREE.Mesh(plumas);
		



	//----------------------------------------------------------------------------------			
	//======================= UNION DE MALLAS ===========================================
	//-----------------------------------------------------------------------------------

		var TorchitForma = new THREE.Geometry();

		TorchitForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
		TorchitForma.merge(cuerpoTMalla.geometry, cuerpoTMalla.matrix);		
		TorchitForma.merge(pataDMalla.geometry, pataDMalla.matrix);
		TorchitForma.merge(pataIMalla.geometry, pataIMalla.matrix);
		TorchitForma.merge(pezunaDMalla.geometry, pezunaDMalla.matrix);
		TorchitForma.merge(pezunaIMalla.geometry, pezunaIMalla.matrix);
		TorchitForma.merge(garraDMalla.geometry, garraDMalla.matrix);
		TorchitForma.merge(garraIMalla.geometry, garraIMalla.matrix);
		TorchitForma.merge(plumasMalla.geometry, plumasMalla.matrix);

		
		var material = new THREE.MeshNormalMaterial();
		var TorchitMalla = new THREE.Mesh(TorchitForma, material);
                TorchitMalla.rotateX( Math.PI );
          	TorchitMalla.rotateY( Math.PI+0.5);		
	        TorchitMalla.rotateZ( Math.PI );			    