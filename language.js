// Função para redirecionar para a página principal com o idioma selecionado
function redirect(language) {
  // Mapear os códigos de idioma para as páginas correspondentes
  var pages = {
    spanish: "index_es/index_es.html",
    english: "index_en/index_en.html",
    portuguese: "index_pt/index_pt.html",
  };

  // Verificar se o idioma está mapeado
  if (language in pages) {
    window.location.href = pages[language];
  } else {
    alert("Idioma selecionado não é suportado.");
  }
}

// Associar a função de redirecionamento aos botões de idioma
document.getElementById("spanish-button").addEventListener("click", function () {
  redirect("spanish");
});

document.getElementById("english-button").addEventListener("click", function () {
  redirect("english");
});

document.getElementById("portuguese-button").addEventListener("click", function () {
  redirect("portuguese");
});

window.addEventListener("DOMContentLoaded", function () {
  var versionNumberElement = document.getElementById("version-number");
  versionNumberElement.innerText = "1.1.5"; // Coloque a versão atual do seu programa aqui
});

// Adicionar funcionalidade para alternar o tema
var themeToggle = document.getElementById("theme-toggle");
var themeIcon = document.getElementById("theme-icon");
var body = document.body;

themeToggle.addEventListener("click", function () {
  if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
  } else {
      body.classList.add("dark-theme");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
  }
});
