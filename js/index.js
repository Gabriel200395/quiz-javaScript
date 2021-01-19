function resposta() {
  let pais = window.document.getElementsByName("pais");
  validarResposta(pais);
}

function validarResposta(pais) {
  if (pais[0].checked) {
    alert("errou");
  } else if (pais[1].checked) {
    alert("errou");
  } else if (pais[2].checked) {
    alert("Acertou");
  } else if (pais[3].checked) {
  }
}
