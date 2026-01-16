window.onload = function (){
    const frases = ["¡Bienvenido a la Escuela de Hechicería!",
        "Gojo Satoru te está observando...",
        "¿Tienes suficiente energía maldita para entrar?",
        "¡No dejes que las maldiciones te atrapen!"
    ];
    const frasealeatoria = frases[Math.floor(Math.random() * frases.length)]
    alert(frasealeatoria)
};
window.onscroll = function(){
    let btn = document.getElementById("btn");
    if(document.body.scrollTop> 300 || document.documentElement.scrollTop > 300){
        btn.style.display = "block";

    }
    else{
        btn.style.display = "none";
    }
};
function topFunction(){
    window.scrollTo({top:0, behavior:'smooth'});
}