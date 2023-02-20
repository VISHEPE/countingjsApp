
//initialize count
let numCount = document.getElementById("increment1");
 num = 0;
 let saveElement = document.getElementById("save-previous");

 //create function to be invoked by the btn
function incresingLap(){
	//increasing count
	num = num +1;
	numCount.innerText= num;
	

}
//saving count
function save(){
	let saveStr = num  + " - ";
	saveElement.innerText=saveElement.innerText + saveStr;
	//or
	//saveElement.innerText += saveStr;
	// you can use ''.textContent' to replace '.innerText'
	//console.log(num)
	//reseting count to zero
	numCount.innerText = 0;
	num = 0;
}



