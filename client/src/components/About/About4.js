import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://i.ibb.co/nnyK2qW/circle-cropped.png"
          ></img>
        </div>
        <div class="column">
          <br />
          <h2 className="ui left aligned header"> VerdeOrganikopr 🌿💚</h2>
          <h4>
            <ul>
              <li>Tropical Plants</li>
              <li>Cactus</li>
              <li>Suculents</li>
              <li>939-287-5136</li>
              <li>𝑪𝒂𝒃𝒐 𝑹𝒐𝒋𝒐 𝑷.𝑹</li>
            </ul>
          </h4>{" "}
        </div>
      </div>
    </div>
  </>
);
export default About;
