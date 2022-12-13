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
            <a href="index.html">Home</a>
            <a href="articles.html">Articles</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="photography.html">Photography</a>
            <a href="resume.html">Resume</a>
            <a href="aboutme.html">About</a>
          </nav>
        </header>`
        
}