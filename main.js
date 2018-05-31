window.onload = function (e){
 // e.preventDefault();
var beer = function (nameBeer,commentBeer,rateBeer) {
	this.nameBeer = nameBeer;
	this.commentBeer = commentBeer;
	this.rateBeer = rateBeer;
}

var listeBeer = [];
var indiceBeer =0;

$(".send").click(function(e){
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
	var i = $(this).parent().children('.indice').html();
	listeBeer.splice(i,1);
	$(this).parent().remove();
	renum();
	color();
}); 

function ajouter1(beer) {
		var alt="this.src='encours.jpg'";
		var li = "<li><img src='" + beer.nameBeer + ".jpg'";
		li += " onerror=this.src='encours.jpg'> <br/>";
		li += beer.nameBeer + "<br/>";
		li += beer.commentBeer + "<br/>";
		li += beer.rateBeer + "<br/>";
		li += "<span class='indice'>"+ indiceBeer + "</span><br/>";
		li += "<input id = 'del' type='button' class='delete btn btn-warning' name='supp' value ='supp'></li>";
		$("ul").append(li);
}

function ajouter(beer) {
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
		// $("ul").append(li);
}

function renum () {
	var lg = listeBeer.length;
	var ind = $(".indice");

	for (var i = 0; i < lg; i++) {
		ind[i].innerHTML=i;
	}
	indiceBeer = lg;
}

function color() {

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