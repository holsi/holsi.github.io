
	var imagePrefix = "assets/media/img/skyBox/";
	var skyBoxDirections  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.BoxGeometry( 900, 900, 900 );    

	var materialArray = [];
	for (var i=0; i<6; i++)
	    materialArray.push( new THREE.MeshBasicMaterial({
	        map: THREE.ImageUtils.loadTexture( imagePrefix + skyBoxDirections[i] + imageSuffix ),
	        side: THREE.BackSide
	    }));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	skyBox.rotateY(Math.PI/2);
	scene.add(skyBox);
	skyBox.visible = false;


	// var imagePrefix = "assets/textures/general/";
	// var directions  = ["posx", "negx", "posy", "negy", "posz", "negz"];
	// var imageSuffix = ".jpg";
	// var skyGeometry = new THREE.CubeGeometry( 600, 600, 600 ); 
	// var materialArray = [];
	// for (var i = 0; i < 6; i++)
	// materialArray.push( new THREE.MeshBasicMaterial({
	//   map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
	//   side: THREE.BackSide
	// }));
	// var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	// skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	// skyBox.position.set(50,70,-50);
	// scene.add( skyBox );
	// house.remove(giardino);
	// giardino = createMesh(new THREE.PlaneGeometry(400,400,100,100),"grass.jpg");

	// repeatX = 5;
	// repeatY = 5;
	// giardino.material.side=THREE.DoubleSide;
	// giardino.material.map.repeat.set(repeatX, repeatY);
	// giardino.position.set(50,45,-8);
	// house.add(giardino);