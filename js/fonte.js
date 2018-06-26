$(document).ready(function()
{
	var s;
	
	// AUMENTANDO A FONTE 
	$(".incfont").click(function()
	{
		var size = $("html").css('font-size');
		
		size = size.replace('px', '');
		size = parseInt(size) + 1.4;
		
		$("html").animate({'font-size' : size + 'px'});
		
		s = size + 'px';
		window.sessionStorage.setItem('tamanho_fonte' , s);   // variável (tamanho_fonte) recebe o valor de (s)
		// armazenando na minha (sessionStorage) a variável (tamanho_fonte)
	});
	
	// DIMINUINDO A FONTE 
	$(".decfont").click(function()
	{
		var size = $("html").css('font-size');
		
		size = size.replace('px' , '');
		size = parseInt(size) - 1.4;
		
		$("html").animate({'font-size' : size + 'px'});
		
		s = size + 'px';
		window.sessionStorage.setItem('tamanho_fonte' , s); 
	});
	
	// VOLTANDO A FONTE AO SEU TAMANHO NORMAL
	$("#resfont").click(function()
	{
		$("html").animate({'font-size' : '14px'});
		
		s = size + 'px';
		window.sessionStorage.setItem('tamanho_fonte' , '14px');   //setItem = guarda o tamanho da fonte
	});										
	
	function recuperar()
	{
		var tamanho_fonte = window.sessionStorage.getItem('tamanho_fonte');	//getItem = recupera o tamanho da fonte
		if (tamanho_fonte == null)
			tamanho_fonte='14px';
		$("html").animate({'font-size' : tamanho_fonte});	
	}
	window.onload=recuperar();
});
	