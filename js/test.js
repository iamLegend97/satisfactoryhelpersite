function test(){
	//get pure input
	document.getElementById("inputBox0").value;
	
	//identify column
	var col = document.getElementById("itemsCol" + 0);
	
	//create container
	var container = document.createElement("div");
	container.className = "splash"
	
	//create image
	var tempItemImage = document.createElement("img");
	tempItemImage.id = "itemImage" + 0;
	tempItemImage.src = "resources/splashes/Alien Carapace.png";
	tempItemImage.alt = "ImageNotFound";
	
	//create image caption
	var tempItemImageCap = document.createElement("figcaption");
	tempItemImageCap.id = "itemImgCap" + 0;
	tempItemImageCap.innerHTML = "test";
	
	//do appending
	container.appendChild(tempItemImage);
	container.appendChild(tempItemImageCap);
	col.appendChild(container);
}
	