export default {
    name: 'NavigationBar', // necessary for self-reference
    props: {
      headerClass: String
    },
    template: `
        <header :class="headerClass">
          <h1 :class="headerClass">Phoebe Ngo</h1>
          <!--Navigation Bar-->
          <nav>
            <a href="../index.html">Home</a>
            <a href="/src/articles.html">Articles</a>
            <a href="/src/portfolio.html">Portfolio</a>
            <a href="/src/photography.html">Photography</a>
            <a href="/src/resume.html">Resume</a>
            <a href="/src/aboutme.html">About</a>
          </nav>
        </header>`
        
}