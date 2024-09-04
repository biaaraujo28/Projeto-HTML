function toggleMode () {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //} ou pode ser substituido por essa linha de código abaixo
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector('#profile img')
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver Light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/bia-light.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/assets/bia.png")
  }

}