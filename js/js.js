var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $btnPadrao = $("#btnPadrao");
var $elemento = $("body .content").find("*"); //encontra todos os elementos dentro do #content
var fonts = 14;
function obterTamanhoFonte() {
  for (var i = 0; i < $elemento.length; i++) {
   // fonts.push(parseFloat($elemento.eq(i).css('font-size')));
  }
}
obterTamanhoFonte();
$btnAumentar.on('click', function() {
	fonts++;
	$('html,body').css('font-size', fonts);
   
});

$btnDiminuir.on('click', function() {
fonts--;
	$('html,body').css('font-size', fonts);
});

$btnPadrao.on('click', function() {
 	$('html,body').css('font-size', '14px');
});