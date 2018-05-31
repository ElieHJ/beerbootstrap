window.onload = function (e){

var beer = function (nameBeer,commentBeer,rateBeer) {
//Objet
	this.nameBeer = nameBeer;
	this.commentBeer = commentBeer;
	this.rateBeer = rateBeer;
}

var listeBeer = [];
var indiceBeer =0;

$(".send").click(function(e){
// Evenement pour ajouter un element dansle tableau et affichage à l'ecran
	e.preventDefault();
	if (($("#nameBeer").val() > "") && ($("#comment").val() > "")) { 
		listeBeer[indiceBeer] = new beer($("#nameBeer").val(),$("#comment").val(),$("#rate").val());
		ajouter(listeBeer[indiceBeer] );
		color();
		$("#formulaire")[0].reset();
		$(".indice").hide();
		indiceBeer ++;
	}
});

$(document).on('click', '.delete', function() {
//Supression d'un element dans le tableau et dans l'affichage HTML
	var i = $(this).parent().children('.indice').html();
	listeBeer.splice(i,1);
	$(this).parent().remove();
	renum();
	color();
}); 

function ajouter(beer) {
// fonction de creation d'un element dans le HTML par construction 
	var alt="this.src='encours.jpg'";
	var data = "<div class='col-auto'>";
	var li = "<img src='" + beer.nameBeer + ".jpg'";
		li += " onerror=this.src='encours.jpg'> <br/>";
		li += beer.nameBeer + "<br/>";
		li += beer.commentBeer + "<br/>";
		li += beer.rateBeer + "<br/>";
		li += "<span class='indice'>"+ indiceBeer + "</span><br/>";
		li += "<input id = 'del' type='button' class='delete btn btn-warning' name='supp' value ='supp'>";
	data += li;
	data += "</div>";
	$("#beer").append(data);
}

function renum () {
// renumerotation des indices
	var lg = listeBeer.length;
	var ind = $(".indice");

	for (var i = 0; i < lg; i++) {
		ind[i].innerHTML=i;
	}
	indiceBeer = lg;
}

function color() {
// Fonction permettant de changer la couleur de fond d'un element
$('.indice').each(function() {
	if ($(this).html()%2) {
		$(this).parent().addClass('color');
	}
	else {
		$(this).parent().removeClass('color');
	}
});

}
}