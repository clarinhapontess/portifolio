// Botão de alternância de tema (claro/escuro) com persistência no localStorage

const toggleButton = document.getElementById("toggle-theme");

// aplica tema salvo, se existir
function aplicarTemaInicial() {
  const temaSalvo = window.localStorage.getItem("theme");
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    if (toggleButton) toggleButton.textContent = "☀️";
  }
}

// alterna o tema quando clica no botão
function alternarTema() {
  document.body.classList.toggle("dark");
  const usandoDark = document.body.classList.contains("dark");
  if (toggleButton) {
    toggleButton.textContent = usandoDark ? "☀️" : "🌙";
  }
  window.localStorage.setItem("theme", usandoDark ? "dark" : "light");
}

// inicialização
aplicarTemaInicial();

if (toggleButton) {
  toggleButton.addEventListener("click", alternarTema);
}
