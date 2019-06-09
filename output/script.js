var slide = document.querySelectorAll('.rslides li');
atualizaNoticias();
setInterval(() => {
  atualizaNoticias();
}, 600000);

function atualizaNoticias() {
  let noticias = fetch('https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=8ccfbb4a59694bee9bb1e025c873f45f');
  let body = noticias.then(resolucao => {
    return resolucao.text();
  }).then(body => {
    dados = JSON.parse(body);
    slide.forEach((item, index) => {
      let tituloAPI = dados.articles[index].title;
      let descricaoAPI = dados.articles[index].description;
      let imagemAPI = dados.articles[index].urlToImage;
      let titulo = item.querySelector('.descricao h1');
      titulo.innerHTML = tituloAPI;
      let descricao = item.querySelector('.descricao p');
      descricao.innerHTML = descricaoAPI;
      let imagem = item.querySelector('img');
      imagem.setAttribute('src', imagemAPI);
    });
  });
}