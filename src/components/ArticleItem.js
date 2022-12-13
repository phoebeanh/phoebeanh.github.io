export default {
    name: 'ArticleItem', // necessary for self-reference
    props: {
      article: Object
    },
    template: `
    <article class="card">
      <img src="../photos/article.png">
      <a :href="article.url"><h2>{{article.title}}</h2></a>
      <p>{{article.exerpt}}</p>
    </article>
    `
  }
  