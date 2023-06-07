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
    versionNumberElement.innerText = "1.1.4"; // Coloque a versão atual do seu programa aqui
  });
  