```html
<div id="project-grid">
  <section>
    <div class="project-title">
      <a href="https://github.com/kataya1/Pinterest">Pinterest</a>
    </div>
    <p>
      Led a team of 6 to build a Pinterest clone Website. Tech used:
      <b
        >React, Django, PostgreSQL, Postman, Tokens, Schema Design, API,
        cloudinary, git, Heroku.</b
      >.
    </p>
  </section>
  <!-- <section>
        <div class="project-title"><a href="https://kataya1.github.io/movie_website_landing_page/">A
                movie website landing page</a></div>
        <p>
            A Responsive landing page for a movie website. Tech used: <b>HTML, CSS, JavaScript,
                Google
                Lighthouse</b>.
        </p>
    </section> -->

  <section>
    <div class="project-title">
      <a href="https://github.com/kataya1/Casting-Agency">Casting Agency</a>
    </div>
    <p>
      An app that's responsible for creating movies, managing and assigning
      actors to those movies. Tech used:<b>
        JWT, OpenID, OAuth2, Auth0, Flask, SqlAlchemy, PostgreSQL.</b
      >
    </p>
  </section>
  <!-- <section>
        <div class="project-title"><a href="https://github.com/kataya1/a-game-story">FPS Game</a>
        </div>
        <p>
            Story coding and user interface part of a 3D game. Tech used:<b> C#, Unity3D, Blender,
                ShaderLab</b>.
        </p>
    </section> -->
  <section>
    <div class="project-title">
      <a href="https://www.npmjs.com/package/express-socket-routes"
        >express-socket-routes</a
      >
    </div>
    <p>
      An unopinianated npm package that adds routes for http's upgrade event to
      the ExpressJS framework. Tech used:<b> Javascript, sockets</b>.
    </p>
  </section>
  <section>
    <div class="project-title">
      <a href="https://github.com/kataya1/tic-tac-toe">tic-tac-toe</a>
    </div>
    <p>
      A multiplayer tic-tac-toe game framework. Tech used:<b
        >Typescript, HTML, CSS</b
      >.
    </p>
  </section>

  <section>
    <div class="project-title"><a href="https://kataya1.com">My Résumé</a></div>
    <p>
      This Resume is a Website, it's both responsive and made so it can fit
      inside a single page of paper size A4 or letter when printed. Tech used:
      <b>HTML, CSS, JavaScript</b>.
    </p>
  </section>
  <section>
    <div class="project-title">
      <a href="https://github.com/kataya1/Oil-Paint-it">Oil-Paint-it</a>
    </div>
    <p>
      Convert an input image into an oil painting. Tech used:<b>
        Python, OpenCV, Matplotlib, Numpy</b
      >.
    </p>
  </section>
</div>
```

and here is the css that applies to it

```css
#project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-template-rows: repeat(fit-content);
  grid-auto-flow: dense;
  gap: 5px;
}
```

my problem is the that currently i have 6 elements(projects) occupying two rows and three columns they are responsive and all but when I want to reduce the number to five elements the last two elements in the second row occupy only two cols and i get an empty grid cell which is not what i want. is there a way to make the last two elements occupy the three cells equally
