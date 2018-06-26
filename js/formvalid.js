var nome = document.getElementById("nome");
var email = document.getElementById("email");
var rua = document.getElementById("rua");
var numero = document.getElementById("numero");
var cep = document.getElementById("cep");
var idade = document.getElementById("idade");
var cpf = document.getElementById("cpf");
var senha = document.getElementById("senha");
var csenha = document.getElementById("csenha");
var enviar = document.getElementById("enviar");
var estado = document.getElementById("estado");
var cidade = document.getElementById("cidade");
var js=document.getElementById("js");
var java=document.getElementById("java");
var ed=document.getElementById("ed");
var css=document.getElementById("css");
var masc=document.getElementById("smas");
var femi=document.getElementById("sfem");
var arr=[1,1,1,1,1,1,1,1,1]


function toup(nome){
	for(var i=0;i<nome.value.length;i++)
		if(nome.value[i]==' ')
			nome.value=nome.value.charAt(0).toUpperCase()+nome.value.slice(1,i+1)+nome.value.charAt(i+1).toUpperCase()+nome.value.slice(i+2);
}

nome.onblur=function(){
	if(nome.value[0]==" "||nome.value[nome.value.length-1]==" "||/\d/.test(nome.value)||!/\s/.test(nome.value)||nome.value.length<=0){arr[0]=1;document.getElementById("enome").innerHTML="Nome inválido ou incompleto."; }else{arr[0]=0; document.getElementById("enome").innerHTML="";}
	toup(nome);
}
email.onblur=function(){
if(email.value.indexOf("@")==-1||email.value.indexOf("@")==0||email.value.indexOf("@")==email.value.length-1||/\s/.test(email.value)){arr[1]=1;document.getElementById("eemail").innerHTML="Email inválido."; }else{arr[1]=0; document.getElementById("eemail").innerHTML="";}
email.value=email.value.toLowerCase();
}
rua.onblur=function(){
	if(rua.value.length<=0){arr[2]=1;document.getElementById("erua").innerHTML="Insira nome da rua."; }else{arr[2]=0; document.getElementById("erua").innerHTML="";}
	toup(rua);
	}
numero.onblur=function(){
	if(/\D/.test(numero.value)||/\s/.test(numero.value)||numero.value.length<=0){arr[3]=1;document.getElementById("enumero").innerHTML="Número inválido"; }else{arr[3]=0; document.getElementById("enumero").innerHTML="";}
}
cep.onblur=function(){
	if(cep.value.indexOf(".")!=2||cep.value.indexOf("-")!=6||cep.value.length!=10||cep.value.replace(/\D/g,'').length!=8){arr[4]=1;document.getElementById("ecep").innerHTML="CEP inválido."; }else{arr[4]=0; document.getElementById("ecep").innerHTML="";}
}
cep.onkeydown=function(){
	if(event.keyCode!=8&&event.keyCode!=46){
	if(cep.value.length==2)cep.value+='.';
	if(cep.value.length==6)cep.value+='-';	
	}	
}
cep.onkeyup=function(){
	if(cep.value.length>10)cep.value=cep.value.slice(0,10);
}
idade.onblur=function(){
	if(idade.value.length<=0||/\D/.test(idade.value)||/\s/.test(idade.value)||idade.value<0){arr[5]=1;document.getElementById("eidade").innerHTML="Idade inválida"; }else{arr[5]=0; document.getElementById("eidade").innerHTML=""};
}
cpf.onblur=function(){
	if(cpf.value.indexOf(".")!=3||cpf.value.lastIndexOf(".")!=7||cpf.value.indexOf("-")!=11||cpf.value.length!=14||cpf.value.replace(/\D/g,'').length!=11||!testaCPF(cpf.value.replace(/\D/g,''))){arr[6]=1;document.getElementById("ecpf").innerHTML="CPF inválido.";}else{arr[6]=0; document.getElementById("ecpf").innerHTML=""};
}
cpf.onkeydown=function(){
	if(event.keyCode!=8&&event.keyCode!=46){
	if(cpf.value.length==3)cpf.value+='.';
	if(cpf.value.length==7)cpf.value+='.';	
	if(cpf.value.length==11)cpf.value+='-';	
	}
}
cpf.onkeyup=function(){
	if(cpf.value.length>14)cpf.value=cpf.value.slice(0,14);
}
senha.onblur=function(){
if(senha.value.length<8){arr[7]=1;document.getElementById("esenha").innerHTML="Senha muito curta (Mínimo de 8 dígitos)."; }else{arr[7]=0; document.getElementById("esenha").innerHTML="";}
}
csenha.onblur=function(){
	if(csenha.value!=senha.value){arr[8]=1;document.getElementById("ecsenha").innerHTML="Senhas diferentes.";}else{arr[8]=0; document.getElementById("ecsenha").innerHTML="";}
}
enviar.onclick=function(){
	var t=0;
	for(var i=0;i<9;i++)
		if(arr[i])t=1;
	if(t){
		document.getElementById("errors").innerHTML="Dados incompletos ou inválidos.";
	}
	else{
		document.getElementById("snome").innerHTML+=" "+nome.value;
		document.getElementById("sendereco").innerHTML+=" "+rua.value+", nº "+numero.value+", "+cidade.value+" - "+estado.value;
		document.getElementById("semail").innerHTML+=" "+email.value;
		document.getElementById("scep").innerHTML+=" "+cep.value;
		document.getElementById("scpf").innerHTML+=" "+cpf.value;
		document.getElementById("sidade").innerHTML+=" "+idade.value;
		document.getElementById("ssexo").innerHTML+=" "+(masc.checked?"Masculino":"")+(femi.checked?"Feminino":"");
		document.getElementById("scheck").innerHTML+=" "+(js.checked?"JS":"")+" "+(java.checked?"Java":"")+" "+(ed.checked?"ED":"")+" "+(css.checked?"CSS":"");
		document.getElementById("confirm").style.display="block";
		document.getElementById("cadastro").style.display="none";
		document.getElementById("coment").innerHTML+=document.getElementById("comment").value;
	}
}
estado.onchange=function(){
	switch(estado.value){
		case 'SP':cidade.innerHTML='<option>Fernandópolis</option><option>Jales</option><option>Santa Fé do Sul</option>'; break;
		case 'PR':cidade.innerHTML='<option>Curitiba</option><option>Londrina</option><option>Sertaneja</option>'; break;
		case 'RJ':cidade.innerHTML='<option>Niterói</option><option>Rio de Janeiro</option><option>Volta Redonda</option>'; break;
	}
}
function testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
	if (strCPF == "00000000000") return false;
    
	for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
	
	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}