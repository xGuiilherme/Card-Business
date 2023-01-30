function toggleMode() {
  const html = document.documentElement;

  //  Cria uma condição para adicionar ou remover o modo de visualização do tema Dark/Light ao clicar no botão.
  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  // O metodo toggle faz a mesma coisa do If/Else, porem ele faz essa alteração por de baixo dos panos ao clicar no botão.
  html.classList.toggle("light");

  // Pega a tag imag
    const img = document.querySelector("#profile-img") {

        if(html.classList.contains('light')) {
          // se tiver light mode, adicionar a nova imagem light.
          img.setAttribute('src', './assets/avatar-light.png')
        } else {
          // se tiver sem light mode, manter a imagem normal.
          img.setAttribute('src', './assets/avatar.png')
        }
    }
}
