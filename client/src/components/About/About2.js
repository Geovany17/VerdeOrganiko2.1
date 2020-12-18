import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://media2.giphy.com/media/stYnZNptINFsY/giphy.webp?cid=ecf05e47ed8c6dc95c140abacd4957e125551f739a802216&rid=giphy.webp"
          ></img>
        </div>
        <div class="column">
          <h2 className="ui aligned header"> OUR SPECIALTY</h2>
          <h3 className="ui aligned header">
            Verde Organiko specializes in providing a large selection of named
            individual succulents, hand-picked special collections, and
            affordable assorted trays with no minimum order or wholesale account
            requirements. We also try our best to accommodate special orders, so
            feel free to contact us if a particular succulent, tray, or
            collection you need isn't listed.{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;
