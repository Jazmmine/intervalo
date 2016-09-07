window.addEventListener("load",function () {

    var btn = document.getElementById("btnCalcular");

    btn.addEventListener("click",function () {
        var segundos = parseInt(document.getElementById("segundos").value);
        var numero = parseInt(document.getElementById("numero").value);
        var resultado = document.getElementById("resultado");
        var texto = "";
        setInterval(function () {
            
            texto = texto +  numero+".. ";
            resultado.innerHTML= texto;                         
            numero++;
        },segundos*1000);
        
    });



});
 

