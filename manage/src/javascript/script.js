import { auth } from "./firebaseConfig.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const emailsAutorizados = [ "jana@gmail.com", "gustavo@gmail.com"];

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, user => {
    if (!user || emailsAutorizados.includes(user.email)) {
      window.location.href = "../index.html";
    } else {
      initApp();
    }
  });
});

function initApp() {
  const menu = document.getElementById("menu");
  const conteudo = document.getElementById("conteudo");
  const btnP = document.getElementById("btnProdutos");
  const btnA = document.getElementById("btnAvaliacoes");
  const btnE = document.getElementById("btnEstatisticas");

  btnP.addEventListener("click", () => {
    window.location.href = "produtoAdmin.html";
  });
  
  btnA.addEventListener("click", () => {
    window.location.href = "avaliacoes.html";
  });
  
  btnE.addEventListener("click", () => {
    window.location.href = "estatistica.html";
  });
}
