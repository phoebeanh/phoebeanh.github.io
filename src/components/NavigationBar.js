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
            <a href="/src/coming-soon.html">About</a>
            <a href="/src/coming-soon.html">My Projects</a>
            <a href="/src/coming-soon.html">Resume</a>
          </nav>
        </header>`
        
}