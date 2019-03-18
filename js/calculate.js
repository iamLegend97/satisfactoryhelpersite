///////////////////////////////////////////////////
/*
Created by Kyle Henry
Performs calculations on sets of data from the game "Satisfactory"
*/
///////////////////////////////////////////////////

/////////////////CLASSES//////////////
//resources used to craft items (can be any item)
class ResourceRate
{
	//string name;
	//double rate;

	constructor(name, rate)
	{
		this.name = name;
		this.rate = rate;
	}

	//accessors
	get Name()
	{
		return this.name;
	}
	get Rate()
	{
		return this.rate;
	}

	//setters
	set Rate(r)
	{
		this.rate = r;
	}
	
	/////FIXME/////
	/*
	public Image getImage()
	{
		Image itemImage;
		if (File.Exists("../../resources/splashes/" + name + ".png"))
		{
			itemImage = Image.FromFile("../../resources/splashes/" + name + ".png");
		}
		else
		{
			itemImage = Image.FromFile("../../resources/splashes/default_no_image.png");
		}
		Image resizedImage = new Bitmap(itemImage, new Size(75, 75));
		return resizedImage;
	}
	*/
}

class resource
{
	//constructor
	constructor(name, amount)
	{
		this.name = name;
		this.amount = amount;
	}
	//accessors
	get Amount()
	{
		return this.amount;
	}
	get Name()
	{
		return this.name;
	}
	//setter
	set Amount(a)
	{
		this.amount = a;
	}
}

//items in the game
class item
{
	//accessors
	get ResourcesNeeded()
	{
		return this.resourcesNeeded;
	}
	get BaseProductionRate()
	{
		return this.baseProductionRate;
	}
	get ProducedPerProcess()
	{
		return this.producedPerProcess;
	}
	get CraftIn()
	{
		return this.craftedIn;
	}
	get Name()
	{
		return this.name;
	}

	//constructor
	constructor(name)
	{
		this.name = name;
		this.craftedIn = "";		//machine used to make the item
		this.baseProductionRate;	//how many per minute
		this.producedPerProcess; 	//how many items produced per feeder item
		this.resourcesNeeded = [];	//list of all resources down to the base unit used to make the item
		
		//assign item properties
		switch (name){
			case "Not Specified":
				this.craftedIn = "Not Specified";
				this.baseProductionRate = 0;
				this.producedPerProcess = 0;
				break;
			case "Iron Ore":
				this.craftedIn = "Miner MK1";
				this.baseProductionRate = 30;
				break;
			case "Copper Ore":
				this.craftedIn = "Miner MK1";
				this.baseProductionRate = 30;
				break;
			case "Limestone":
				this.craftedIn = "Miner MK1";
				this.baseProductionRate = 30;
				break;
			case "Coal":
				this.craftedIn = "Miner MK1";
				this.baseProductionRate = 30;
				break;
			case "Iron Ingot":
				this.craftedIn = "Smelter";
				this.baseProductionRate = 30;
				this.resourcesNeeded.push(new resource("Iron Ore", 1));
				this.producedPerProcess = 1;
				break;
			case "Copper Ingot":
				this.craftedIn = "Smelter";
				this.baseProductionRate = 30;
				this.resourcesNeeded.push(new resource("Copper Ore", 1));
				this.producedPerProcess = 1;
				break;
			case "Iron Plate":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 15;
				this.resourcesNeeded.push(new resource("Iron Ingot", 2));
				this.resourcesNeeded.push(new resource("Iron Ore",2));
				this.producedPerProcess = 1;
				break;
			case "Iron Rod":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 15;
				this.resourcesNeeded.push(new resource("Iron Ingot", 1));
				this.resourcesNeeded.push(new resource("Iron Ore", 1));
				this.producedPerProcess = 1;
				break;
			case "Wire":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 45;
				this.resourcesNeeded.push(new resource("Copper Ingot", 1));
				this.resourcesNeeded.push(new resource("Copper Ore", 1));
				this.producedPerProcess = 3;
				break;
			case "Cable":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 15;
				this.resourcesNeeded.push(new resource("Wire", 2));
				this.resourcesNeeded.push(new resource("Copper Ingot", 2));
				this.resourcesNeeded.push(new resource("Copper Ore", 2));
				this.producedPerProcess = 1;
				break;
			case "Screws":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 90;
				this.resourcesNeeded.push(new resource("Iron Ingot", 2));
				this.resourcesNeeded.push(new resource("Iron Ore", 2));
				this.producedPerProcess = 12;
				break;
			case "Screws (from rods)":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 90;
				this.resourcesNeeded.push(new resource("Iron Rod", 1));
				this.resourcesNeeded.push(new resource("Iron Ingot", 1));
				this.resourcesNeeded.push(new resource("Iron Ore", 1));
				this.producedPerProcess = 6;
				break;
			case "Concrete":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 15;
				this.resourcesNeeded.push(new resource("Limestone", 3));
				this.producedPerProcess = 1;
				break;
			case "Biomass (Leaves)":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 90;
				this.resourcesNeeded.push(new resource("Leaves", 10));
				this.producedPerProcess = 6;
				break;
			case "Biomass (Wood)":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 375;
				this.resourcesNeeded.push(new resource("Wood", 5));
				this.producedPerProcess = 25;
				break;
			case "Biomass (Mycelia)":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 150;
				this.resourcesNeeded.push(new resource("Mycelia", 10));
				this.producedPerProcess = 10;
				break;
			case "Biomass (Alien Carapace)":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 1500;
				this.resourcesNeeded.push(new resource("Alien Carapace", 1));
				this.producedPerProcess = 100;
				break;
			case "Biofuel":
				this.craftedIn = "Constructor";
				this.baseProductionRate = 30;
				this.resourcesNeeded.push(new resource("Biomass", 4));
				this.producedPerProcess = 2;
				break;
			case "Reinforced Iron Plate":
				this.craftedIn = "Assembler";
				this.baseProductionRate = 5;
				this.resourcesNeeded.push(new resource("Iron Plate", 4));
				this.resourcesNeeded.push(new resource("Screws", 24));
				this.resourcesNeeded.push(new resource("Iron Ingot", 12));
				this.resourcesNeeded.push(new resource("Iron Ore", 12));
				this.producedPerProcess = 1;
				break;
			case "Reinforced Iron Plate (Hard Drive 1)":
				this.craftedIn = "Assembler";
				this.baseProductionRate = 7.5;
				this.resourcesNeeded.push(new resource("Iron Plate", 10));
				this.resourcesNeeded.push(new resource("Screws", 24));
				this.resourcesNeeded.push(new resource("Iron Ingot", 24));
				this.resourcesNeeded.push(new resource("Iron Ore", 24));
				this.producedPerProcess = 3;
				break;
			case "Rotor":
				this.craftedIn = "Assembler";
				this.baseProductionRate = 6;
				this.resourcesNeeded.push(new resource("Iron Rod", 3));
				this.resourcesNeeded.push(new resource("Screws", 22));
				this.resourcesNeeded.push(new resource("Iron Ingot", 7));
				this.resourcesNeeded.push(new resource("Iron Ore", 7));
				//leftover 2 screws
				this.producedPerProcess = 1;
				break;
			case "Modular Frame":
				this.craftedIn = "Assembler";
				this.baseProductionRate = 4;
				this.resourcesNeeded.push(new resource("Reinforced Iron Plate", 3));
				this.resourcesNeeded.push(new resource("Iron Rod", 6));
				this.resourcesNeeded.push(new resource("Screws", 72));
				this.resourcesNeeded.push(new resource("Iron Ingot", 38));
				this.resourcesNeeded.push(new resource("Iron Ore", 38));
				this.producedPerProcess = 1;
				break;
			case "Fabric":
				this.craftedIn = "Assembler";
				this.baseProductionRate = 15;
				this.resourcesNeeded.push(new resource("Mycelia", 1));
				this.resourcesNeeded.push(new resource("Leaves", 2));
				this.producedPerProcess = 1;
				break;

			default:
				this.craftedIn = "Item not found";
				this.baseProductionRate = 0;
				this.producedPerProcess = 0;
				break;
		}
	}
}

//production buildings in the game
class building
{
	//string name;
	//double powerUsage;  //in MW
	//string producing;

	//constructor
	constructor(nameGiven)
	{
		this.name = nameGiven;
		this.producing = "";
		switch (nameGiven)
		{

			case "Miner MK1":
				this.powerUsage = 5;
				break;
			case "Smelter":
				this.powerUsage = 4;
				break;
			case "Constructor":
				this.powerUsage = 4;
				break;
			case "Assembler":
				this.powerUsage = 15;
				break;

			default:
				this.powerUsage = 0;
				break;
		}
	}
	//accessors
	get Name()
	{
		return this.name;
	}
	get PowerUsage()
	{
		return this.powerUsage;
	}

	//setters
	set Producing(producingGiven)
	{
		this.producing = producingGiven;
	}

	applyClock(clock)
	{
		this.powerUsage = 4 * Math.pow(clock, 1.636);
	}

}

class buildingCount
{
	//used for storing a building count
	//string name;
	//int amount;

	//constructor
	constructor(nameGiven)
	{
		this.name = nameGiven;
		this.amount = 1;
	}

	//accessors
	get Name()
	{
		return this.name;
	}
	get Amount()
	{
		return this.amount;
	}


	//setters
	set Name(nameGiven)
	{
		this.name = nameGiven;
	}
	set Amount(amountGiven)
	{
		this.amount = amountGiven;
	}
	
	/////FIXME////
	/*
	public Image getImage()
	{
		Image buildingImage;
		if (File.Exists("../../resources/splashes/" + name + ".png"))
		{
			buildingImage = Image.FromFile("../../resources/splashes/" + name + ".png");
		}
		else
		{
			buildingImage = Image.FromFile("../../resources/splashes/default_no_image.png");
		}
		Image resizedImage = new Bitmap(buildingImage, new Size(75, 75));
		return resizedImage;
	}
	*/
}

//power generation buildings in the game
class generator
{
	//string name;
	//double powerGen;
	//double productionRate;  //used for clocking
	//constructor
	constructor(nameGiven)
	{
		this.name = nameGiven;
		if(nameGiven == "Biomass Burner")
		{
			this.powerGen = 20;
			this.productionRate = 1;
		}
		else if(nameGiven == "Coal Generator")
		{
			this.powerGen = 50;
			this.productionRate = 1;
		}
		else
		{
			this.powerGen = 0;
			this.productionRate = 0;
		}
	}

	//accessors
	get Name()
	{
		return this.name;
	}
	get PowerGen()
	{
		return this.powerGen;
	}
	
	//////FIXME//////
	/*
	public Image getImage()
	{
		Image generatorImage;
		if (File.Exists("../../resources/splashes/" + name + ".png"))
		{
			generatorImage = Image.FromFile("../../resources/splashes/" + name + ".png");
		}
		else
		{
			generatorImage = Image.FromFile("../../resources/splashes/default_no_image.png");
		}
		Image resizedImage = new Bitmap(generatorImage, new Size(75, 75));
		return resizedImage;
	}
	*/
}


//global variable that gets set to true after calc has been run
var runPrev = false;

//main calculation function
function calculate(){
	//console.log("calculate called");
	runPrev = true;
	
	var amountPerMin = [];
	var textBoxes = [
		parseInt(document.getElementById("inputBox0").value, 10),
		parseInt(document.getElementById("inputBox1").value, 10),
		parseInt(document.getElementById("inputBox2").value, 10),
		parseInt(document.getElementById("inputBox3").value, 10),
		parseInt(document.getElementById("inputBox4").value, 10),
		parseInt(document.getElementById("inputBox5").value, 10),
		parseInt(document.getElementById("inputBox6").value, 10),
		parseInt(document.getElementById("inputBox7").value, 10),
		parseInt(document.getElementById("inputBox8").value, 10),
		parseInt(document.getElementById("inputBox9").value, 10)
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
	
	var items = [];
	var itemBoxes = [
		$('#itemChoice0 :selected').text(),
		$('#itemChoice1 :selected').text(),
		$('#itemChoice2 :selected').text(),
		$('#itemChoice3 :selected').text(),
		$('#itemChoice4 :selected').text(),
		$('#itemChoice5 :selected').text(),
		$('#itemChoice6 :selected').text(),
		$('#itemChoice7 :selected').text(),
		$('#itemChoice8 :selected').text(),
		$('#itemChoice9 :selected').text(),
	];
	//console.log(itemBoxes);
	for(var r = 0; r < 10; r++)
	{
		if (!(itemBoxes[r] == "" || itemBoxes[r].length == 0 || itemBoxes[r] == null))
		{
			//user entered something in textbox i so get it
			items.push(new item(itemBoxes[r]));
			//console.log(String(amountPerMin[i]));
		}
		else
		{
			//nothing was entered in textbox i so set equal to zero
			items.push(new item("Not Specified"));
		}
	}
	
	//console.log("performing calculations");
	//console.log(items);
	//perform calculations
	var totalResourcePerMin = new Array();
	//List<resource> totalOverhead = new List<resource>();    //CHANGE THIS FOR OVERCLOCKING
	for(var q = 0; q < items.length; q++)
	{
		//make sure the user entered an amount for this item (non-negative)
		if(amountPerMin[q] > 0)
		{
			//get the ratio of deisred production:base production
			var baseRate = items[q].BaseProductionRate;
			var requestedRate = amountPerMin[q];
			var productionRatio = requestedRate / baseRate;

			//readjust the amout of materials used in the process for each resource
			var tempResources = items[q].ResourcesNeeded;
			var tempResourcePerMin = [];
			for (var j = 0; j < tempResources.length; j++)
			{
				var tempAmount = tempResources[j].Amount;
				//get the base resource per min required to run the base process
				var baseAmountPerMin = tempAmount * baseRate;
				var neededAmountPerMin = baseAmountPerMin * productionRatio;

				if(tempResourcePerMin.length == 0)
				{
					//if the list is empty we can just add this resource into the list
					tempResourcePerMin.push(new ResourceRate(tempResources[j].Name, neededAmountPerMin));
				}
				else
				{
					//otherwise we need to check if there are any resources of this type in the list yet
					var isInList = false;
					for(var k = 0; k < tempResourcePerMin.length; k++)
					{
						if (tempResourcePerMin[k].Name == tempResources[j].Name)
						{
							isInList = true;
							tempResourcePerMin[k].Rate(tempResourcePerMin[k].Rate + neededAmountPerMin);
							break;
						}
					}
					if (!isInList)
					{
						tempResourcePerMin.push(new ResourceRate(tempResources[j].Name, neededAmountPerMin));
					}
				}
			}

			//now add resources per minute to the total
			//need to check if the list is empty, or if there are any existing members with the names in tempResourcePerMin
			if(totalResourcePerMin.length == 0)
			{
				//list is empty
				totalResourcePerMin = tempResourcePerMin;
			}
			else
			{
				for(var m = 0; m < tempResourcePerMin.length; m++)
				{
					var isInList2 = false;
					for (var n = 0; n < totalResourcePerMin.length; n++)
					{
						//check if the resource exists in the list yet
						if (totalResourcePerMin[n].Name == tempResourcePerMin[m].Name)
						{
							isInList2 = true;
							totalResourcePerMin[n].Rate = totalResourcePerMin[n].Rate + tempResourcePerMin[m].Rate;
							break;
						}
					}
					if (!isInList2)
					{
						//doesnt exist yet so add it
						totalResourcePerMin.push(tempResourcePerMin[m]);
					}
				}
			}
			var topLevelResource = new ResourceRate(items[q].Name, requestedRate);
			var isInList3 = false;
			for (var t = 0; t < totalResourcePerMin.length; t++)
			{
				//check if the resource exists in the list yet
				if (totalResourcePerMin[t].Name == topLevelResource.Name)
				{
					isInList3 = true;
					totalResourcePerMin[t].Rate(totalResourcePerMin[t].Rate + topLevelResource.Rate);
					break;
				}
			}
			if (!isInList3)
			{
				//doesnt exist yet so add it
				totalResourcePerMin.push(topLevelResource);
			}
		}
	}
	
	//console.log("calculations done");
	//console.log(totalResourcePerMin);
	
	if (runPrev)
	{
		//clear items/buildings images from prev run
		var prevItems = document.getElementsByClassName("splash");
		while(prevItems.length > 0)
			prevItems[0].parentNode.removeChild(prevItems[0]);
	}

	//making new item labels and images
	for (var l = 0; l < totalResourcePerMin.length; l++)
	{
		//identify column
		var col = document.getElementById("itemsCol" + (l%5));

		//create container
		var container = document.createElement("div");
		container.className = "splash"

		//create image
		var tempItemImage = document.createElement("img");
		tempItemImage.id = "itemImage" + l;
		var path = "resources/splashes/" + totalResourcePerMin[l].Name + ".png";
		tempItemImage.src = path;
		tempItemImage.onerror = function(){
			document.getElementById("itemImage" + l).src = "resources/splashes/Not Specified.png";
		}
		
		//create image caption
		var tempItemImageCap = document.createElement("figcaption");
		tempItemImageCap.id = "itemImgCap" + l;
		tempItemImageCap.innerHTML = totalResourcePerMin[l].Rate + " " + totalResourcePerMin[l].Name + "/min";
		
		//console.log(tempItemImage.src);
		//do appending
		container.appendChild(tempItemImage);
		container.appendChild(tempItemImageCap);
		col.appendChild(container);
	}

	//now we have all the resource rates needed to make the requested item rate
	//calculate the production needed to make that happen
	//make a list to hold all the builds that will be needed
	var buildings = [];
	var totalPowerConsumption = 0;

	//get the number of buildings needed to meet the item rate
	var currIt = 0;
	for (r = 0; r < totalResourcePerMin.length; r++)
	{
		var itemName = totalResourcePerMin[r].Name;
		var Item = new item(itemName);
		var numMachinesNeeded = Math.floor(totalResourcePerMin[r].Rate / Item.BaseProductionRate);
		
		var lastMachineRate = 0;
		var lastMachineUnderclock = 0;
		var uneven = false;    //set to true if the item rate isnt evenly divisable by the baserate
		if ((totalResourcePerMin[r].Rate % Item.BaseProductionRate) != 0)
		{
			uneven = true;
			numMachinesNeeded += 1;
			lastMachineRate = totalResourcePerMin[r].Rate % Item.BaseProductionRate;
			lastMachineUnderclock = lastMachineRate / Item.BaseProductionRate;
		}
		for(var b = 0; b < numMachinesNeeded; b++)
		{
			buildings.push(new building(Item.CraftIn));
			buildings[currIt].Producing = itemName;
			if(b == numMachinesNeeded - 1 && uneven)
			{
				//we are at the last item so set the underclock rate
				buildings[b].applyClock(lastMachineUnderclock);
			}
			currIt += 1;
		}
	}
	for(i = 0; i < buildings.length; i++)
	{
		//calculate total power consumption from all machines
		totalPowerConsumption += buildings[i].PowerUsage;
	}
	
	//console.log(buildings);
	
	//assign total power consumption to text area
	var truncatedPowerConsump = totalPowerConsumption.toFixed(3);
	var powerLabel = truncatedPowerConsump.toString();
	var powerCol = document.getElementById("powerInfo");
	powerCol.innerHTML = powerLabel + "MW";

	//make a list of amount of all machines
	var buildingCounts = [];
	for (i = 0; i < buildings.length; i++)
	{
		if(buildingCounts.length == 0)
		{
			buildingCounts.push(new buildingCount(buildings[i].Name));
		}
		else
		{
			var inList4 = false;
			for(j = 0; j < buildingCounts.length; j++)
			{
				if (buildings[i].Name == buildingCounts[j].Name)
				{
					/*
					console.log("Current buildings name: ");
					console.log(buildings[i].Name);
					console.log("Current buildingcountsname: ");
					console.log(buildingCounts[j].Name);
					*/
					inList4 = true;
					buildingCounts[j].Amount += 1;
					break;
				}
			}
			if (!inList4)
			{
				//console.log("new push");
				buildingCounts.push(new buildingCount(buildings[i].Name));
			}
		}
	}

	//place images and labels for all buildings in buildingCounts
	//console.log(buildingCounts);
	for (l = 0; l < buildingCounts.length; l++)
	{
		//identify column
		var col2 = document.getElementById("buildingsCol" + (l%4));

		//create container
		var container2 = document.createElement("div");
		container2.className = "splash"
		container2.style.marginTop = "20px";

		//create image
		var tempBuildingImage = document.createElement("img");
		tempBuildingImage.id = "buildingImage" + l;
		var path2 = "resources/splashes/" + buildingCounts[l].Name + ".png";
		
		tempBuildingImage.src = path2;
		tempBuildingImage.onerror = function(){
			document.getElementById("buildingImage" + l).src = "resources/splashes/Not Specified.png";
		}
		
		//create image caption
		var tempBuildingImageCap = document.createElement("figcaption");
		tempBuildingImageCap.id = "buildingImgCap" + l;
		tempBuildingImageCap.innerHTML = buildingCounts[l].Amount + " " + buildingCounts[l].Name;
		
		//console.log(tempItemImage.src);
		//do appending
		container2.appendChild(tempBuildingImage);
		container2.appendChild(tempBuildingImageCap);
		col2.appendChild(container2);
	}
}