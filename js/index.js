function resposta() {
  let pais = document.getElementsByName("pais");
  let resposta = document.getElementById("resposta");
  let resposta1 = document.getElementById("resposta1");

  validarResposta(pais, resposta, resposta1);
}

let contadorAcertos = 0;
let contadorErros = 0;

function validarResposta(pais, resposta, resposta1) {
  if (pais[0].checked) {
    contadorErros += 1;
    resposta.innerHTML = "ERROU!";
    resposta.style.background = "red";
  } else if (pais[1].checked) {
    contadorErros += 1;
    resposta.innerHTML = "ERROU!";
    resposta.style.background = "red";
  } else if (pais[2].checked) {
    contadorAcertos += 1;
    resposta.innerHTML = "ACERTOU";
  } else if (pais[3].checked) {
    contadorAcertos += 1;
    resposta1.innerHTML = "ACERTOU";
  }

  return pais, resposta;
}

function finalizar(acerto, erro) {
  let resultado = document.getElementById("finalizar");
  resultado.innerHTML = `Acertos: ${acerto} e Erros: ${erro}`;
}
