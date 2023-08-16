function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "css/imagens/icons/menu-abertoPreto.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "css/imagens/icons/botao-fecharPreto.png";
    }
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}
  // Fechar o menu dropdown se o usuário clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
};

// Obter todos os itens da lista
const benefitsItems = document.querySelectorAll('.benefits-list li');

// Adicionar evento de clique a cada item da lista
benefitsItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remover a classe 'active' de todos os itens da lista
    benefitsItems.forEach(item => item.classList.remove('active'));

    // Adicionar a classe 'active' ao item clicado (para expandi-lo)
    item.classList.add('active');
  });
});  