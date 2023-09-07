window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds in milliseconds
}


for (let i = 0; i < 5; i++) {
	promises.push( new Promise((resolve)=>{
		const randomTime = getRandomTime();
	setTimeout(()=>{
		resolve(`${i+1} promise resolved after ${randomTime/1000} seconds`);
	},randomTime)
}));
}

 Promise.any(promises).then( (data) =>{
	 let divElement = document.getElementById("output");
	 divElement.innerText = data;
 })


