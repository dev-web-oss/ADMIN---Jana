// Configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCY5FczRqvDpxGaVUwes579kgcAQJEd4UY",
    authDomain: "fonte-artigo.firebaseapp.com",
    projectId: "fonte-artigo",
    storageBucket: "fonte-artigo.appspot.com",
    messagingSenderId: "449652212731",
    appId: "1:449652212731:web:8a3dc4ba54a6b60aeb415e",
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Emails autorizados (mesmos que você cadastrou manualmente)
  const emailsAutorizados = ["gustavo@gmail.com", "jana@gmail.com"];
  
  document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const erroMensagem = document.getElementById("erro-mensagem");
  
    if (!email || !senha) {
      erroMensagem.textContent = "Preencha todos os campos.";
      return;
    }
  
    auth.signInWithEmailAndPassword(email, senha)
      .then((result) => {
        const user = result.user;
  
        if (emailsAutorizados.includes(user.email)) {
          // Redireciona para o painel
          window.location.href = "/ADMIN---Jana/manage/manage.html";
        } else {
          auth.signOut();
          erroMensagem.textContent = "Este email não está autorizado.";
        }
      })
      .catch((error) => {
        console.error("Erro no login:", error);
        erroMensagem.textContent = "Email ou senha incorretos.";
      });
  });  