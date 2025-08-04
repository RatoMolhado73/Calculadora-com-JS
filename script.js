function teste() {
    var numero = prompt("Digite um numero ai: ")
    console.log(numero);
    if (numero > 10) {
        alert("Numero é maior que 10");
    } else if (numero == 10) {
        alert("Numero é igual a 10");
    } else {
        alert("Numero é menor que 10");
    }
}
function fruta() {
    let nomeUser = document.getElementById("uva").value;
    console.log(nomeUser);
}
function pizza() {
    let idadeUser = document.getElementById("frango").value;
    idadeUser = parseInt(idadeUser);
    console.log(idadeUser);
    if (idadeUser < 12) {
        console.log("Você é uma criança");
        alert("Você é uma criança");
    } else if (idadeUser < 18) {
        console.log("Você é um adolescente");
        alert("Você é um adolescente");
    } else if (idadeUser < 60) {
        console.log("Você é um adulto"); 
        alert("Você é um adulto");
    } else{
        console.log("Você é um idoso");
        alert("Você é um idoso");
    }
}
function melancia() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 + num2; 
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    console.log(num1 + num2);

    document.getElementById("img").innerHTML = '<img src="https://d2ur3228349jyd.cloudfront.net/assets/img/characters/mv/kuromi.png" alt="Muleke Muito Irado Come Isopor" style="width=30px">'
    
}
function parOrImpar() {
    let numero = parseInt(document.getElementById("parImpar").value);
    if (numero % 2 == 0) {
        document.getElementById("img").innerHTML = '<img src="https://m.media-amazon.com/images/S/pv-target-images/9d3af1387b66d51578cb7bf2c3e7ed0a6c8df047438c10f61aa49f51e8e24349.jpg" alt="par" style="width: 200px">' + '<img src="https://cdn-icons-png.flaticon.com/512/16/16795.png" alt="like" style="width: 200px"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgjGbq9KzlkjC497awgHFbSPtQuZOr68Nog&s" alt="happy" style="width: 200px">'
    }
    else {
         document.getElementById("img").innerHTML = '<img src="https://gostinhomineiro.com.br/wp-content/uploads/2022/03/Pagina-Nossos-produtos-Pao-de-queijo-Impar-embalagem-1-min.png" alt="par" style="width: 200px"><img src="https://images.emojiterra.com/google/android-pie/512px/1f44e.png" alt="deslike" style="width: 200px"><img src="https://ih1.redbubble.net/image.5410134519.5656/tst,small,845x845-pad,1000x1000,f8f8f8.jpg" alt="sad" style="width: 200px">'
    }
}