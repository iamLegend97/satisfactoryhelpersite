//populate column with dropdown menus
var col = document.getElementById("optionBoxesCol");
for(var i = 0; i < 10; i++){
	var optionBox = document.createElement("select");
	optionBox.className = "form-control form-control-sm itemOptionBox";
	optionBox.id = "itemChoice" + i;
	optionBox.style.marginBottom = "18px";
	col.appendChild(optionBox);

	//list of all automatable items
	var option0 = document.createElement("option");
	option0.id = "optionBox" + i + "." + 1;
	option0.innerHTML = "Biofuel";
	var option1 = document.createElement("option");
	option1.id = "optionBox" + i + "." + 1;
	option1.innerHTML = "Biomass (Alien Carapace)";
	var option2 = document.createElement("option");
	option2.id = "optionBox" + i + "." + 2;
	option2.innerHTML = "Biomass (Leaves)";
	var option3 = document.createElement("option");
	option3.id = "optionBox" + i + "." + 3;
	option3.innerHTML = "Biomass (Mycelia)";
	var option4 = document.createElement("option");
	option4.id = "optionBox" + i + "." + 4;
	option4.innerHTML = "Biomass (Wood)";
	var option5 = document.createElement("option");
	option5.id = "optionBox" + i + "." + 5;
	option5.innerHTML = "Cable";
	var option6 = document.createElement("option");
	option6.id = "optionBox" + i + "." + 6;
	option6.innerHTML = "Concrete";
	var option7 = document.createElement("option");
	option7.id = "optionBox" + i + "." + 7;
	option7.innerHTML = "Copper Ingot";
	var option8 = document.createElement("option");
	option8.id = "optionBox" + i + "." + 8;
	option8.innerHTML = "Fabric";
	var option9 = document.createElement("option");
	option9.id = "optionBox" + i + "." + 9;
	option9.innerHTML = "Iron Ingot";
	var option10 = document.createElement("option");
	option10.id = "optionBox" + i + "." + 10;
	option10.innerHTML = "Iron Plate";
	var option11 = document.createElement("option");
	option11.id = "optionBox" + i + "." + 11;
	option11.innerHTML = "Iron Rod";
	var option12 = document.createElement("option");
	option12.id = "optionBox" + i + "." + 12;
	option12.innerHTML = "Modular Frame";
	var option13 = document.createElement("option");
	option13.id = "optionBox" + i + "." + 13;
	option13.innerHTML = "Reinforced Iron Plate";
	var option14 = document.createElement("option");
	option14.id = "optionBox" + i + "." + 14;
	option14.innerHTML = "Rotor";
	var option15 = document.createElement("option");
	option15.id = "optionBox" + i + "." + 15;
	option15.innerHTML = "Steel Ingot";
	var option16 = document.createElement("option");
	option16.id = "optionBox" + i + "." + 16;
	option16.innerHTML = "Screws";
	var option17 = document.createElement("option");
	option17.id = "optionBox" + i + "." + 17;
	option17.innerHTML = "Wire";
	var option18 = document.createElement("option");
	option18.id = "optionBox" + i + "." + 18;
	option18.innerHTML = "Steel Beam";
	var option19 = document.createElement("option");
	option19.id = "optionBox" + i + "." + 19;
	option19.innerHTML = "Steel Pipe";
	var option20 = document.createElement("option");
	option20.id = "optionBox" + i + "." + 20;
	option20.innerHTML = "Encased Industrial Beam";
	var option21 = document.createElement("option");
	option21.id = "optionBox" + i + "." + 21;
	option21.innerHTML = "Stator";
	var option22 = document.createElement("option");
	option22.id = "optionBox" + i + "." + 22;
	option22.innerHTML = "Motor";
	var option23 = document.createElement("option");
	option23.id = "optionBox" + i + "." + 23;
	option23.innerHTML = "Heavy Modular Frame";
	/*
	var option24 = document.createElement("option");
	option24.id = "optionBox" + i + "." + 24;
	option24.innerHTML = "Crude Oil";
	var option25 = document.createElement("option");
	option25.id = "optionBox" + i + "." + 25;
	option25.innerHTML = "Plastic";
	var option26 = document.createElement("option");
	option26.id = "optionBox" + i + "." + 26;
	option26.innerHTML = "Fuel";
	var option27 = document.createElement("option");
	option27.id = "optionBox" + i + "." + 27;
	option27.innerHTML = "Rubber";
	*/
	optionBox.appendChild(option0);
	optionBox.appendChild(option1);
	optionBox.appendChild(option2);
	optionBox.appendChild(option3);
	optionBox.appendChild(option4);
	optionBox.appendChild(option5);
	optionBox.appendChild(option6);
	optionBox.appendChild(option7);
	optionBox.appendChild(option8);
	optionBox.appendChild(option8);
	optionBox.appendChild(option9);
	optionBox.appendChild(option10);
	optionBox.appendChild(option11);
	optionBox.appendChild(option12);
	optionBox.appendChild(option13);
	optionBox.appendChild(option14);
	optionBox.appendChild(option15);
	optionBox.appendChild(option16);
	optionBox.appendChild(option17);
	optionBox.appendChild(option18);
	optionBox.appendChild(option19);
	optionBox.appendChild(option20);
	optionBox.appendChild(option21);
	optionBox.appendChild(option22);
	optionBox.appendChild(option23);
	/*
	optionBox.appendChild(option24);
	optionBox.appendChild(option25);
	optionBox.appendChild(option26);
	optionBox.appendChild(option27);
	*/
}
//keeps items in alphabetical order
$(function() {
	for(var i = 0; i < 10; i++){
		// choose target dropdown
	var select = $("#itemChoice" + i);
	select.html(select.find('option').sort(function(x, y) {
	// to change to descending order switch "<" for ">"
	return $(x).text() > $(y).text() ? 1 : -1;
	}));

	// select default item after sorting (first item)
	$("#itemChoice" + i).get(0).selectedIndex = 0;
	var spec = "Option " + i;
	$("#itemChoice" + i).prepend("<option selected='selected'>" + spec + "</option>");
	}
	
});