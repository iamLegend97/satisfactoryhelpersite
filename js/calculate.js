/////////////////CLASSES//////////////
//resources used to craft items (can be any item)
class resource
{
	String name;
	Number amount;
	//constructor
	constructor(String name, Number amount)
	{
		this.name = name;
		this.amount = amount;
	}
	//accessors
	function getAmount()
	{
		return amount;
	}
	function getName()
	{
		return name;
	}
	//setter
	function setAmount(int amount)
	{
		this.amount = amount;
	}
}

//items in the game
class item
{
	String name;
	String craftedIn;      		//machine used to make the item
	Number baseProductionRate;  //how many per minute
	Number producedPerProcess;  //how many items produced per feeder item
	var resourcesNeeded = [];   //list of all resources down to the base unit used to make the item

	//accessors
	function getResourcesNeeded()
	{
		return resourcesNeeded;
	}
	function getBaseProductionRate()
	{
		return baseProductionRate;
	}
	function getProducedPerProcess()
	{
		return producedPerProcess;
	}
	function getCraftIn()
	{
		return craftedIn;
	}
	function getName()
	{
		return name;
	}

	//constructor
	constructor(string name)
	{
		this.name = name;
		//assign item properties
		switch (name){
			case "Not Specified":
				craftedIn = "Not Specified";
				baseProductionRate = 0;
				producedPerProcess = 0;
				break;
			case "Iron Ore":
				craftedIn = "Miner MK1";
				baseProductionRate = 30;
				break;
			case "Copper Ore":
				craftedIn = "Miner MK1";
				baseProductionRate = 30;
				break;
			case "Limestone":
				craftedIn = "Miner MK1";
				baseProductionRate = 30;
				break;
			case "Coal":
				craftedIn = "Miner MK1";
				baseProductionRate = 30;
				break;
			case "Iron Ingot":
				craftedIn = "Smelter";
				baseProductionRate = 30;
				resourcesNeeded.Add(new resource("Iron Ore", 1));
				producedPerProcess = 1;
				break;
			case "Copper Ingot":
				craftedIn = "Smelter";
				baseProductionRate = 30;
				resourcesNeeded.Add(new resource("Copper Ore", 1));
				producedPerProcess = 1;
				break;
			case "Iron Plate":
				craftedIn = "Constructor";
				baseProductionRate = 15;
				resourcesNeeded.Add(new resource("Iron Ingot", 2));
				resourcesNeeded.Add(new resource("Iron Ore",2));
				producedPerProcess = 1;
				break;
			case "Iron Rod":
				craftedIn = "Constructor";
				baseProductionRate = 15;
				resourcesNeeded.Add(new resource("Iron Ingot", 1));
				resourcesNeeded.Add(new resource("Iron Ore", 1));
				producedPerProcess = 1;
				break;
			case "Wire":
				craftedIn = "Constructor";
				baseProductionRate = 45;
				resourcesNeeded.Add(new resource("Copper Ingot", 1));
				resourcesNeeded.Add(new resource("Copper Ore", 1));
				producedPerProcess = 3;
				break;
			case "Cable":
				craftedIn = "Constructor";
				baseProductionRate = 15;
				resourcesNeeded.Add(new resource("Wire", 2));
				resourcesNeeded.Add(new resource("Copper Ingot", 2));
				resourcesNeeded.Add(new resource("Copper Ore", 2));
				producedPerProcess = 1;
				break;
			case "Screws":
				craftedIn = "Constructor";
				baseProductionRate = 90;
				resourcesNeeded.Add(new resource("Iron Ingot", 2));
				resourcesNeeded.Add(new resource("Iron Ore", 2));
				producedPerProcess = 12;
				break;
			case "Screws (from rods)":
				craftedIn = "Constructor";
				baseProductionRate = 90;
				resourcesNeeded.Add(new resource("Iron Rod", 1));
				resourcesNeeded.Add(new resource("Iron Ingot", 1));
				resourcesNeeded.Add(new resource("Iron Ore", 1));
				producedPerProcess = 6;
				break;
			case "Concrete":
				craftedIn = "Constructor";
				baseProductionRate = 15;
				resourcesNeeded.Add(new resource("Limestone", 3));
				producedPerProcess = 1;
				break;
			case "Biomass (Leaves)":
				craftedIn = "Constructor";
				baseProductionRate = 90;
				resourcesNeeded.Add(new resource("Leaves", 10));
				producedPerProcess = 6;
				break;
			case "Biomass (Wood)":
				craftedIn = "Constructor";
				baseProductionRate = 375;
				resourcesNeeded.Add(new resource("Wood", 5));
				producedPerProcess = 25;
				break;
			case "Biomass (Mycelia)":
				craftedIn = "Constructor";
				baseProductionRate = 150;
				resourcesNeeded.Add(new resource("Mycelia", 10));
				producedPerProcess = 10;
				break;
			case "Biomass (Alien Carapace)":
				craftedIn = "Constructor";
				baseProductionRate = 1500;
				resourcesNeeded.Add(new resource("Alien Carapace", 1));
				producedPerProcess = 100;
				break;
			case "Biofuel":
				craftedIn = "Constructor";
				baseProductionRate = 30;
				resourcesNeeded.Add(new resource("Biomass", 4));
				producedPerProcess = 2;
				break;
			case "Reinforced Iron Plate":
				craftedIn = "Assembler";
				baseProductionRate = 5;
				resourcesNeeded.Add(new resource("Iron Plate", 4));
				resourcesNeeded.Add(new resource("Screws", 24));
				resourcesNeeded.Add(new resource("Iron Ingot", 12));
				resourcesNeeded.Add(new resource("Iron Ore", 12));
				producedPerProcess = 1;
				break;
			case "Reinforced Iron Plate (Hard Drive 1)":
				craftedIn = "Assembler";
				baseProductionRate = 7.5;
				resourcesNeeded.Add(new resource("Iron Plate", 10));
				resourcesNeeded.Add(new resource("Screws", 24));
				resourcesNeeded.Add(new resource("Iron Ingot", 24));
				resourcesNeeded.Add(new resource("Iron Ore", 24));
				producedPerProcess = 3;
				break;
			case "Rotor":
				craftedIn = "Assembler";
				baseProductionRate = 6;
				resourcesNeeded.Add(new resource("Iron Rod", 3));
				resourcesNeeded.Add(new resource("Screws", 22));
				resourcesNeeded.Add(new resource("Iron Ingot", 7));
				resourcesNeeded.Add(new resource("Iron Ore", 7));
				//leftover 2 screws
				producedPerProcess = 1;
				break;
			case "Modular Frame":
				craftedIn = "Assembler";
				baseProductionRate = 4;
				resourcesNeeded.Add(new resource("Reinforced Iron Plate", 3));
				resourcesNeeded.Add(new resource("Iron Rod", 6));
				resourcesNeeded.Add(new resource("Screws", 72));
				resourcesNeeded.Add(new resource("Iron Ingot", 38));
				resourcesNeeded.Add(new resource("Iron Ore", 38));
				producedPerProcess = 1;
				break;
			case "Fabric":
				craftedIn = "Assembler";
				baseProductionRate = 15;
				resourcesNeeded.Add(new resource("Mycelia", 1));
				resourcesNeeded.Add(new resource("Leaves", 2));
				producedPerProcess = 1;
				break;

			default:
				craftedIn = "Item not found";
				baseProductionRate = 0;
				producedPerProcess = 0;
				break;
		}
	}
}



//global variable that gets set to true after it has been run
var runPrev = false;

//main calculation function
function calculate(){
	//document.getElementById("powerInfo").innerHTML = "test";
	runPrev = true;
	
	var amountPerMin = [];
	var textBoxes = [
		document.getElementById("inputBox0").value,
		document.getElementById("inputBox1").value,
		document.getElementById("inputBox2").value,
		document.getElementById("inputBox3").value,
		document.getElementById("inputBox4").value,
		document.getElementById("inputBox5").value,
		document.getElementById("inputBox6").value,
		document.getElementById("inputBox7").value,
		document.getElementById("inputBox8").value,
		document.getElementById("inputBox9").value
	];
	
	
	for(var i = 0; i < 10; i++)
	{
		if (!(textBoxes[i] == "" || textBoxes[i].length == 0 || textBoxes[i] == null))
		{
			//user entered something in textbox i so get it
			amountPerMin.push(textBoxes[i]);
			//console.log(String(amountPerMin[i]));
		}
		else
		{
			//nothing was entered in textbox i so set equal to zero
			amountPerMin.push(0);
		}
	}
	
	
	
	
	
	
	
}

