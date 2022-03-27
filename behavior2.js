const navHover = () =>{
	const burger = document.querySelector('.burger');
	const mynav = document.querySelector('.mynav');
	const links = document.querySelectorAll('.mynav li');

	burger.addEventListener("click", ()=>{
		mynav.classList.toggle("open");
	//animation 
	burger.classList.toggle('toggle');
	});

}

navHover();

function requiredElement() {
	var prenom=document.formulaire.prenom.value;
	var nom=document.formulaire.nom.value;
	var x=document.formulaire.mail.value;  
	var pattern=/^[A-Za-z]+$/;
	var pattern2=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	var status=false;
	if(nom.match(pattern)){
		document.getElementById("nameLoc").innerHTML="valide";
		document.getElementById("nameLoc").style="color: green;";
		document.getElementById("check1").style="display: block;";
		document.getElementById("cross1").style="display: none;";
		status=true;
	}
	else{
		document.getElementById("nameLoc").innerHTML="*Pas valide, ne doit pas contenir des symbole ou des chiffre.";
		document.getElementById("nameLoc").style="color: red;";
		document.getElementById("check1").style="display: none;";
		document.getElementById("cross1").style="display: block;";
		status=false;
	}
	if (prenom.match(pattern)){
		document.getElementById("nickNameLoc").innerHTML="valide";
		document.getElementById("nickNameLoc").style="color: green;";
		document.getElementById("check2").style="display: block;";
		document.getElementById("cross2").style="display: none;";
		status=true;
	}
	else{
		document.getElementById("nickNameLoc").innerHTML="*Pas valide, ne doit pas contenir des symbole ou des chiffre.";
		document.getElementById("nickNameLoc").style="color: red;"
		document.getElementById("check2").style="display: none;";
		document.getElementById("cross2").style="display: block;";
		status=false;
	}
	if (x.match(pattern2)){
  		document.getElementById("mailLoc").innerHTML="valide";
  		document.getElementById("mailLoc").style="color: green;";
  		document.getElementById("check3").style="display: block;";
  		document.getElementById("cross3").style="display: none;";
  		status=true;
  	}
	else{  
  		document.getElementById("mailLoc").innerHTML="*Enter un email valide";
  		document.getElementById("mailLoc").style="color: red;";
  		document.getElementById("check3").style="display: none;";
  		document.getElementById("cross3").style="display: block;";
  		status=false;
  	}
   	if (nom.match(pattern) && prenom.match(pattern) && x.match(pattern2)){
  		status=true;
  	}
  	else{
  		status=false;
  	}
  	return status;
}


