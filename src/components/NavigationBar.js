export default {
    name: 'NavigationBar', // necessary for self-reference
    props: {
      headerClass: String
    },
    methods: {
      toggle: function() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      }
    },
    template: `
        <header :class="headerClass">
          <h1><a :class="headerClass" href="../../index.html">Phoebe Ngo</a></h1>
          <!--Navigation Bar-->
          <nav>
            <ul class="nav-menu">
              <li class="nav-item"><a href="../../index.html">Home</a> </li>
              <li class="nav-item"><a href="/src/coming-soon.html">About</a> </li>
              <li class="nav-item"><a href="/src/coming-soon.html">Projects</a> </li>
              <li class="nav-item"><a href="/src/coming-soon.html">Resume</a> </li>
            </ul>
          </nav>
          <div v-on:click="toggle()" class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </header>`
        
}