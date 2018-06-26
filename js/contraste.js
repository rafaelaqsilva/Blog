$(document).ready(function()
{
	var cor_de_fundo, cor_fonte;
	
	// alto contraste
		$(".altocontraste").click(function()
		{
				$('#conteudo').css('background','black');
				$('#conteudo').css('color','white');
				$('#menu').css('background','black');
				$('#home').css('color','#fff');
				$('#sobre').css('color','#fff');
				$('#contato').css('color','#fff');
				$('#topo').css('background','black');
				$('#topoo').css('color','white');			
			window.sessionStorage.setItem('fundo',"black");
			window.sessionStorage.setItem('fonte',"#fff");
		});
		
	//contraste normal
		$(".normalcontraste").click(function()
		{
				$('#conteudo').css('background','#eee');
				$('#conteudo').css('color','#000');
				$('#menu').css('background','#ddd');
				$('#home').css('color','#000');
				$('#sobre').css('color','#000');
				$('#contato').css('color','#000');
				$('#topo').css('background','#eee');
				$('#topoo').css('color','#000');			
			window.sessionStorage.setItem('fundo',"#eee");   //variável: fundo  recebe "#eee"
			window.sessionStorage.setItem('fonte',"#000");
		});								
	
	function recuperar_fundo()
	{
			cor_de_fundo = window.sessionStorage.getItem('fundo') ;     // cor_de_fundo	
			cor_fonte = window.sessionStorage.getItem('fonte');
		// jquery
		$('#conteudo').css('background',cor_de_fundo);
		$('#conteudo').css('color',cor_fonte);
		$('#menu').css('background',cor_de_fundo);
		$('#home').css('color',cor_fonte);
		$('#sobre').css('color',cor_fonte);
		$('#contato').css('color',cor_fonte);
		$('#topo').css('background',cor_de_fundo);
		$('#topo').css('color',cor_fonte);
		
	// javascript puro
	/*
		document.getElementById('conteudo').style.background = cor_de_fundo;
		document.getElementById('conteudo').style.color = cor_fonte;
		document.getElementById('menu').style.background = cor_de_fundo;
		document.getElementById('home').style.color = cor_fonte;
		document.getElementById('sobre').style.color = cor_fonte;
		document.getElementById('contato').style.color = cor_fonte;
		document.getElementById('topo').style.color = cor_fonte;
		document.getElementById('topo').style.background = cor_de_fundo;
	*/
	}
	window.onload = recuperar_fundo();
});