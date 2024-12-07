//your JS code here. If required.
function handlePromise(text, delay){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(text);
		},delay)
	})
}

document.getElementById("btn").addEventListener("click",async ()=> {
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;

	let output = await handlePromise(text, delay);
	document.getElementById("output").innerHTML = output;



})
