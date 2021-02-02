
var divGlobal = document.querySelector("#global");


var imgAnim = document.querySelector("#accueilArbracine").style;
var texteFuturAnim = document.querySelector("#futur").style;
var textePasseAnim = document.querySelector("#passe").style;

var navStyle = document.querySelector("#menu").style;

navStyle.display = "none";

var texteMenuAnim1 = document.querySelector("#menu a:nth-of-type(1) li").style;
var texteMenuAnim2 = document.querySelector("#menu a:nth-of-type(2) li").style;
var texteMenuAnim3 = document.querySelector("#menu a:nth-of-type(3) li").style;

var fleche = document.querySelector("#retourAccueil").style;

var isBlock = true;

pauseAnim();


retourAccueil.style.animationPlayState = "paused";

document.querySelector("#passe").addEventListener("click", function(){

    imgAnim.animationName = "backgroundPasse";
    imgAnim.animationPlayState = "running";
    
    texteFuturAnim.animationPlayState = "running";
    textePasseAnim.animationPlayState = "running";
    setTimeout(apparitionMenuPasse, 2500);
    setTimeout(pauseAnim, 2000);
   
    

});

document.querySelector("#futur").addEventListener("click", function(){

    imgAnim.animationName = "backgroundFutur";
    imgAnim.animationPlayState = "running";
    
    texteFuturAnim.animationPlayState = "running";
    textePasseAnim.animationPlayState = "running";
    setTimeout(apparitionMenuFutur, 2500);
    setTimeout(pauseAnim, 2000);

});



function pauseAnim(){

    imgAnim.animationPlayState = "paused";
    
    texteFuturAnim.animationPlayState = "paused";
    textePasseAnim.animationPlayState = "paused";
    
    retourAccueil.style.animationPlayState = "paused";

    if(isBlock == false){
        texteFuturAnim.display = "none";
        textePasseAnim.display = "none";
    } else{
        texteFuturAnim.display = "block";
        textePasseAnim.display = "block";
    }
    
    
    texteMenuAnim1.animationPlayState = "paused";
    texteMenuAnim2.animationPlayState = "paused";
    texteMenuAnim3.animationPlayState = "paused";
    
    
}

function apparitionMenuPasse(){
    
    retourAccueil.style.animationPlayState = "running";
    setTimeout(pauseAnim, 999);

    //Code qui modifie les href des liens
    document.querySelector("#menu a:nth-of-type(1)").href = "passe.html#ecranHistoire";
    document.querySelector("#menu a:nth-of-type(2)").href = "passe.html#ecranMecaniques";
    document.querySelector("#menu a:nth-of-type(3)").href = "passe.html#ecranEquipe";

    
    navStyle.marginLeft = "28em";
    navStyle.textAlign = "right";
    navStyle.display = "block";

    fleche.marginLeft = "4.5em";

    texteMenuAnim1.animationPlayState = "running";
    texteMenuAnim2.animationPlayState = "running";
    texteMenuAnim3.animationPlayState = "running";

    isBlock = false;
    
    document.querySelector("#retourAccueil").addEventListener("click", function(){

    imgAnim.animationPlayState = "running";
    retourAccueil.style.animationPlayState = "running";

    navStyle.display = "none";
    
    texteFuturAnim.animationPlayState = "running";
    textePasseAnim.animationPlayState = "running";

    isBlock = true;

    setTimeout(pauseAnim, 2000);
    setTimeout(pauseAnimRetour, 999);
    
    


});
    
}

function apparitionMenuFutur(){
    
    retourAccueil.style.animationPlayState = "running";
    setTimeout(pauseAnim, 999);
    
    navStyle.animationName = "disparitionTexteFuturSale";
    navStyle.marginLeft = "6em";
    navStyle.textAlign = "left";

    navStyle.display = "block";

    fleche.marginLeft = "52em";

    //Code qui modifie les href des liens
    document.querySelector("#menu a:nth-of-type(1)").href = "futur.html#titre";
    document.querySelector("#menu a:nth-of-type(2)").href = "futur.html#globalCrafting";
    document.querySelector("#menu a:nth-of-type(3)").href = "futur.html#ecranEquipe";

    texteMenuAnim1.animationPlayState = "running";
    texteMenuAnim2.animationPlayState = "running";
    texteMenuAnim3.animationPlayState = "running";

    isBlock = false;
    
        document.querySelector("#retourAccueil").addEventListener("click", function(){

        imgAnim.animationPlayState = "running";
        retourAccueil.style.animationPlayState = "running";
    
        texteFuturAnim.animationPlayState = "running";
        textePasseAnim.animationPlayState = "running";

        isBlock = true;

        navStyle.display = "none";

        setTimeout(pauseAnim, 2000);
        setTimeout(pauseAnimRetour, 999);
    


        });
    
}

function pauseAnimRetour(){
    
    retourAccueil.style.animationPlayState = "paused";

    texteMenuAnim1.animationPlayState = "paused";
    texteMenuAnim2.animationPlayState = "paused";
    texteMenuAnim3.animationPlayState = "paused";

    
}


