import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://media3.giphy.com/media/X8M7iJQPh8RpFVGlZz/giphy.gif?cid=ecf05e4787758d53bfbd4537c3dc4ee4fbf8924358c2af57&rid=giphy.gif"
          ></img>
        </div>
        <div class="column">
          <br />
          <h2 className="ui aligned header"> Good for decoration</h2>
          <h3 className="ui aligned">
            Succulents also make a relaxing addition to any home office. We
            thank you for visiting Verde Organiko and invite you to browse our
            succulents for sale in our ONLINE STORE »{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;
