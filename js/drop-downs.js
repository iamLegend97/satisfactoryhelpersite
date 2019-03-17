//populate column with dropdown menus
var col = document.getElementById("optionBoxesCol");
for(var i = 0; i < 10; i++){
	var optionBox = document.createElement("select");
	optionBox.className = "form-control form-control-sm itemOptionBox";
	optionBox.id = "itemChoice" + i;
	optionBox.style.marginBottom = "18px";
	col.appendChild(optionBox);

	//must change i for any added items
	//please keep items in alphabetical order
	var option0 = document.createElement("option");
	option0.id = "optionBox" + i + "." + 0;
	option0.label = "None";
	var option1 = document.createElement("option");
	option1.id = "optionBox" + i + "." + 1;
	option1.label = "Biofuel";
	var option2 = document.createElement("option");
	option2.id = "optionBox" + i + "." + 2;
	option2.label = "Biomass (Alien Carapace)";
	var option3 = document.createElement("option");
	option3.id = "optionBox" + i + "." + 3;
	option3.label = "Biomass (Leaves)";
	var option4 = document.createElement("option");
	option4.id = "optionBox" + i + "." + 4;
	option4.label = "Biomass (Mycelia)";
	var option5 = document.createElement("option");
	option5.id = "optionBox" + i + "." + 5;
	option5.label = "Biomass (Wood)";
	var option6 = document.createElement("option");
	option6.id = "optionBox" + i + "." + 6;
	option6.label = "Cable";
	var option7 = document.createElement("option");
	option7.id = "optionBox" + i + "." + 7;
	option7.label = "Concrete";
	var option8 = document.createElement("option");
	option8.id = "optionBox" + i + "." + 8;
	option8.label = "Copper Ingot";
	var option9 = document.createElement("option");
	option9.id = "optionBox" + i + "." + 9;
	option9.label = "Fabric";
	var option10 = document.createElement("option");
	option10.id = "optionBox" + i + "." + 10;
	option10.label = "Iron Ingot";
	var option11 = document.createElement("option");
	option11.id = "optionBox" + i + "." + 11;
	option11.label = "Iron Plate";
	var option12 = document.createElement("option");
	option12.id = "optionBox" + i + "." + 12;
	option12.label = "Iron Rod";
	var option13 = document.createElement("option");
	option13.id = "optionBox" + i + "." + 13;
	option13.label = "Modular Frame";
	var option14 = document.createElement("option");
	option14.id = "optionBox" + i + "." + 14;
	option14.label = "Reinforced Iron Plate";
	var option15 = document.createElement("option");
	option15.id = "optionBox" + i + "." + 15;
	option15.label = "Rotor";
	var option16 = document.createElement("option");
	option16.id = "optionBox" + i + "." + 16;
	option16.label = "Screw";
	var option17 = document.createElement("option");
	option17.id = "optionBox" + i + "." + 17;
	option17.label = "Wire";
	
	optionBox.appendChild(option0);
	optionBox.appendChild(option1);
	optionBox.appendChild(option2);
	optionBox.appendChild(option3);
	optionBox.appendChild(option4);
	optionBox.appendChild(option5);
	optionBox.appendChild(option6);
	optionBox.appendChild(option7);
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
	
}