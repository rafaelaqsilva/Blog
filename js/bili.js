function fonte(e){
    var elemento = document.getElementById("contener");
    var atual = elemento.style.fontSize;
    
    if(e == 'a'){
        atual = parseInt(atual)+2+'px';
    }else if(e =='b'){
        atual = parseInt(atual)-2+'px';
    }else if(e =='c'){
        atual = 18+'px';
    }
    elemento.style.fontSize=atual;
}

function alto_contraste(){
    document.getElementById("contener").style.background = "#000";
    document.getElementById("contener").style.color = "#fff";
}

function cor_normal(){
    document.getElementById("contener").style.background = "#fff";
    document.getElementById("contener").style.color = "#000";
}