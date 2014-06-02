$(function() {
    $.get('logos_footer.html', function(codiguito){
    	$('footer').append(codiguito);

    });
    $.get('usuario.json', function(info) {
    	var avatar   = new image();
    	avatar.src   = info.avatar;
    	avatar.title = info.nombre+' '+info.apellido;

    	$('#avatar').append(avatar);
    });
});
 var base_url = "https://query.yahooapis.com/v1/public/yql?";


function obtenerGeoInformacion(lat, lon) {
	var query 'SELECT * FROM geo.placefinder WHERE text="'+lat+'', ' '+lon+'" AND gflags="R"';
	query = encodeURIComponent();

	$.ajax({
		url: base_url+"q="+query,
		dataType : 'jsonp',
		jsonpCallback: 'procesarGeoInfo',
		data: {
			format: 'json'
		} 
	}); 

}

function procesarGeoInfo(datos) {
	var res    = datos.query.results.Result;
	var barrio = res.neighborhood;
	var ciudad = res.city;
	var pais   = res.contry;
	var woeid  = res.woeid;

	$('#geo').preappend('<p><strong>'+barrio+'</strong><br>'+ciudad+','+pais+'</p>');

	obtenerClima(woeid);

}

function obtenerClima(woeid) {
	var query 'SELECT * FROM weather.forcast WHERE woeid="'+woeid+'"and u="c"';
	query = encodeURIComponent();

	$.ajax({
		url: base_url+"q="+query,
		dataType : 'jsonp',
		jsonpCallback: 'procesarClima',
		data: {
			format: 'json'
		} 
	}); 

}

function procesarClima(datos){
	var clima = datos.query.results.chanel;
	var temp  = clima.item.condition.temp;
	var unit  = clima.units.temperature;
	var code  = clima.item.condition.code;
	var img   = new image();
	img.src   = "http://l.yimg.com/a/i/us/we/52/"+code+".gif"

	$('#clima')
	     .append(img)
	     .append(temp+' '+unit+'º');

}