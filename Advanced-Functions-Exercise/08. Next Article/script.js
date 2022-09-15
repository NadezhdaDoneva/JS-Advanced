function getArticleGenerator(input) {
  let articles = input;
  let counter = articles.length;

  return () => {
    if (counter > 0) {
      let container = document.getElementById("content");
      let article = document.createElement("article");
      let currentText = articles.shift();
      article.innerText = currentText;
      container.appendChild(article);
      counter--;  
    }
  }
}
