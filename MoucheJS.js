var t = 0;
var nbmort = 0;
lecompteur = document.getElementById("compteur");
compteur.innerHTML = nbmort;
setInterval(function(){
	if(t>3152){
		t=0;
		nbmort=nbmort+1;
		compteur.innerHTML = " " + nbmort;
	}
	++t;
}, 1000)