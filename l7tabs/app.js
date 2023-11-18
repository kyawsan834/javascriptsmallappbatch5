// Get UI

let gettablinks  = document.getElementsByClassName('tablinks'),
	gettabpanels = document.getElementsByClassName('tab-panel'),
	getbtnclose = document.querySelectorAll('.btn-close');

		// console.log(gettablinks); 
		// console.log(gettablinks[0]);

		// console.log(gettabpanels);

		let tabpanels = Array.from(gettabpanels);
		console.log(tabpanels);

function gettab(evn,link){ 
	console.log(evn.target);
	console.log(evn.curreTarget);
	console.log(link); 

	// Remove Active
	for(var x=0; x<evn.length; x++){ 
		// console.log(x); //0 to 3

		// remove active 
		gettablinks[x].className = gettablinks.className.replace(' acitve', '');



	} 

	// Add active

	// evn.target.className = "tablinks active";
		// evn.target.className += " active";
		// evn.currentTarget.className += " active";
		// evn.target.className = evn.target.className.replace('tablinks','tablinks active');

		evn.target.classList.add('active');

		// Hide Panel
		tabpanels.forEach(function(tabpanel){

			tabpanel.style.display = "none";

		}); 

		// Show Panel
 		document.getElementById(link).style.display="block";

}  

document.getElementById("autoclick").click;