function entrar() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagem");

  if (usuario === "AdmPrincipal" && senha === "011001") {
    
    window.location.href = "home.html";
  } else {
    
    mensagem.textContent = "Usuário ou senha incorretos!";
    mensagem.style.color = "red";
    mensagem.style.textShadow = "0 0 5px red";
  }
}
