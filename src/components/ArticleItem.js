export default {
    name: 'ArticleItem', // necessary for self-reference
    props: {
      article: Object //current article value
    },
    template: `
    <article class="card">
      <a :href="article.url"><h2>
        <img src="../photos/article.png">
        {{article.title}}
        </h2>
      </a>
      <p>{{article.exerpt}}</p>
    </article>
    `
  }
  