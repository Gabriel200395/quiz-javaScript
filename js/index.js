function resposta() {
  let pais = document.getElementsByName("pais");
  let resposta = document.getElementById("finalizar");
  resposta.style.background = "red";
  validarResposta(pais, resposta, resposta1);
}

function validarResposta(pais, resposta) {
  if (pais[0].checked) {
    resposta.innerHTML = `Errou outra vez `;
    resposta.style.background = "red";
  } else if (pais[1].checked) {
    resposta.innerHTML = `Errou`;
    resposta.style.background = "red";
  } else if (pais[2].checked) {
    resposta.innerHTML = `Acertou`;
    resposta.style.background = "blue";
  }
}
