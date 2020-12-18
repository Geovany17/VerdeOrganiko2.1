import React from "react";
import "semantic-ui-css/semantic.min.css";
import About from "../About/About";
import About2 from "../About/About2";
import About3 from "../About/About3";
import About4 from "../About/About4";
import "./Hero.css";
const Hero = () => (
  <>
    <div class="elfsight-app-2d5a33c3-a371-44d5-91d0-496ed2d6bc2e"/>
    <section>
      <div className="ui jumbotron">
        <h3>WELCOME</h3>
      </div>
    </section>
    <section className="img-1 ">
      <h1>Succulents</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About />
      </div>
    </section>

    <section className="img-2">
      <h1>Tropical Plants</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About2 />
      </div>
    </section>

    <section className="img-3">
      <h1>Cactus</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About3 />
      </div>
    </section>

    <section className="img-4">
      <h1>Nature Beauty's</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About4 />
      </div>
    </section>
  </>
);

export default Hero;