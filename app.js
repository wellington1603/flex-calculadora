
function calcularFlex(){
    var alcool = document.getElementById('alcool').value
    var gasolina = document.getElementById('gasolina').value

    
    var calculo = (gasolina * 70) / 100 > alcool
    console.log(calculo)
    var img = document.getElementById('img')
    if(calculo){
        img.src = './assets/imagem2.png'
    }else{
        img.src = './assets/imagem3.png'
    }
}