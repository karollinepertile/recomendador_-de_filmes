let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(850, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(86, 7, 100));
  textAlign(CENTER, CENTER);
  textSize(45);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 15) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "alice no pais das maravilhas";          
        } else{
         return "coraline";
        }
      } else {
        if (gostaDeFantasia) {
          return "Abracadabra";
        } else {
          return "viva a via e uma festa";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return " ";
    } else {
      return " aliçe no pais das maravilhas";
    }
  }
}
