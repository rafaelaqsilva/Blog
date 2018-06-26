	var a = Math.ceil(Math.random() * 10);	  //Math.ceil = transforma o número em inteiro
					//(Math.random() * 10) = gera um número aleatório de 0 (zero) até 9
	var b = Math.ceil(Math.random() * 10);
	
	var c = a + b;
	
//var k = Math.ceil(Math.random() * 10 + 1) //gera um número randomico que elimina o 0 zero, ou seja, gera a partir do 1
	
	function perguntar()
	{
		document.write("Qual o valor de " + a + " + " + b +"? ");
		document.write("<input id='CaptchaInput' type='text' maxlength='2' size='2'/>");
	}
	
	function validar()
	{
		var d = document.getElementById('CaptchaInput').value;
			if (d == c) 
				return true;
			alert("Tente outra vez");
				return false;
	}
	
	