const getacctitles = document.getElementsByClassName('acctitle');
// console.log(getacctitles);  //HTML Collectoin
const getactivecontents = document.querySelectorAll('.acccontent');
// console.log(getcontents);  //NodeList 

// console.log(getacctitles.length); //4 

// console.log(getacctitles[0]);
// console.log(getacctitles[1]);
// console.log(getacctitles[2]);
// console.log(getacctitles[3]);

for(var x = 0; x<getacctitles.length; x++){

	// console.log(x);  //0 to 3 
	// console.log(getacctitles[x]);

	getacctitles[x].addEventListener('click',function(e){

		console.log('hay');

		// console.log(e);  
		// console.log(e.target); //current h1
		// console.log(this);


		// e.target.classList.toggle('active');
		this.classList.toggle('active'); 

				         // acctitle   acccontent
		const getcontent = this.nextElementSibling;
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight + "px");

		// getcontent.style.height=getcontent.scrollHeight+"px"; 

		if(getcontent.style.height){
			// remove  

			getcontent.style.height=null;   // beware can't set 0


		}else{
			// add 

			getcontent.style.height=getcontent.scrollHeight+"px"; 

		}

	}); 

	if(getacctitles[x].classList.contains("active")){
		getactivecontents[x].style.height=getactivecontents[x].scrollHeight+"px";
	}

}