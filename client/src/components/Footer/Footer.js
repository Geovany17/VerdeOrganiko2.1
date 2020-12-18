import React from "react";
import { Button } from "semantic-ui-react";
import './Footer.css';

const Footer = () => (
  <div className="ui inverted black vertical footer segment">
    <div className="ui center aligned container">
      <div class="elfsight-app-dfac43c0-8661-423f-84b0-39e230a7ec51"></div>

      <h3 className="ui inverted header">
        &copy; Copyright 2020 | All rights reserved | Verde_Organiko
        <br />
        <br /> Follow us on Instagram
      </h3>
      <Button
        href="https://www.instagram.com/verde_organiko/"
        className="ui instagram button"
        basic
        ui
        inverted
        color="purple"
        data-inverted="center"
        data-tooltip="Follow Us"
        data-position="top center"
      >
        <i className="instagram icon"></i>
        Instagram
      </Button>
    </div>
  </div>
);

export default Footer;
