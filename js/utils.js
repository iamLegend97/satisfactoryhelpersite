//ensures input is a number for use in the textboxes
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

/*
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize(){
	console.log("Width: " + window.innerWidth);
	console.log("Height: " + window.innerHeight);
	console.log("==================");
}
*/