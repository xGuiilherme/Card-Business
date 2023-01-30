function toggleMode() {
  const html = document.documentElement;

  //  Cria uma condição para adicionar ou remover o modo de visualização do tema Dark/Light ao clicar no botão.
  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  // O metodo toggle faz a mesma coisa do If/Else, porem faz essa alteração por de baixo dos panos.
  html.classList.toggle("light");

  // Pega a tag imag para troca de imagem
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-lightmode.png");
  } else {
    img.setAttribute("src", "assets/avatar.png");
  }
}
