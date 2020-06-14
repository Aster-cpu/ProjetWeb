var nbmo = 0;
var nbanim = 0;
function ajouter(){
	event.preventDefault();
	nbanim++;
	var table = document.getElementById("table");
	var nouvtd= document.createElement("td");
	var nouvanimal = document.createElement("tr");
	var nouvelocal = document.createElement("tr");
	var nouvdescri = document.createElement("tr");
	var nouvmil = document.createElement("tr");
	var nouvmort =  document.createElement("tr");

	var radios = document.getElementsByName('img');
	var valeur;
	var test = 0;
	var nb =0;
	for(var i = 0; i < radios.length; i++){
		 if(radios[i].checked){
		 valeur = radios[i].value;
		 nb = i+1
		 }
		 else{
		 	test++;
		 }
	}

	
	var e = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.jpg', 'img6.png'];
	var iImage = document.createElement('IMG');
	iImage.src = e[nb-1];
	iImage.id = 'img' +nb;



	if ((document.getElementById('milieu_animal').value) == 'Air'){
	nouvtd.id = 'nouv' + 1;
	}
	if ((document.getElementById('milieu_animal').value) == 'Terre'){
	nouvtd.id = 'nouv' + 2;
	}
	if ((document.getElementById('milieu_animal').value) == 'Mer'){
	nouvtd.id = 'nouv' + 3;
	}
	//var imagee = document.getElementById("image");
	var nouvim = document.createElement("img");
	nouvim.imgContent = iImage;
	//imagee.appendChild(iImage);

	var textemort = document.createTextNode((document.getElementById('nbmort_animal').value) + " morts/secondes");
	var texteanimal = document.createTextNode("Nom : " + document.getElementById('nom_animal').value);
	var textelocal = document.createTextNode("Localisation : " + document.getElementById('loca_animal').value);
	var textedescri = document.createTextNode(document.getElementById('descri_animal').value);
	var textemil = document.createTextNode("Milieu de vie : " + document.getElementById('milieu_animal').value);

	
	
	


	if(textemil.length != 0 && textemort.length != 0 && texteanimal.length != 0 && textelocal.length != 0 && textedescri.length != 0 && test != 6 && t==0){
		nouvanimal.appendChild(texteanimal);
		nouvelocal.appendChild(textelocal);
		table.appendChild(nouvtd);
		nouvdescri.appendChild(textedescri);
		nouvmil.appendChild(textemil);
		nouvmort.appendChild(textemort);
		nouvtd.appendChild(iImage);
		nouvtd.appendChild(nouvanimal);
		nouvtd.appendChild(nouvelocal);
		nouvtd.appendChild(nouvmil);
		nouvtd.appendChild(nouvdescri);
		nouvtd.appendChild(nouvmort);
		t = 5;
		nbmo = nbmo + parseInt((document.getElementById('nbmort_animal').value), 10)
	}

	



}

var t = 5;
ledecompte = document.getElementById("decompte")
setInterval(function(){
	if(t>0){
		--t;
		decompte.innerHTML = " (" + t + ")";
	}
}, 1000)



var mo = 0;
compte = document.getElementById("compte")
setInterval(function(){
		//parseInt((document.getElementById('nbmort_animal').value), 10)
		mo = mo + nbmo ;
		compte.innerHTML =  mo ;
	
}, 1000)



function supprimer(){

	var column = document.getElementsByTagName('td');
	if (column.length <= 0){
		alert("Aucun élément à supprimer");
	}
	else {
		for(var i = 0; i < nbanim; i++){
		var lastcolumn = column[column.length - 1];
		document.getElementById('table').removeChild(lastcolumn);
		mo = 0;
		nbmo = 0;
		
		}
		nbanim = 0;

	}

			
}


function openNav() {
        document.getElementById("sideNavigation").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    }
     
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}