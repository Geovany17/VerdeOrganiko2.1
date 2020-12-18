import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Monstera() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/3Cgh3JK/Screen-Shot-2020-11-08-at-2-33-27-PM-500x500.png" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">MONSTERA ADANONSII</h2>
                        <strong>DESCRIPTION</strong>
                        <p>The Monstera Adansonii, aka the "Swiss Cheese" plant, gets its nickname from the large holes in its leaves called "fenestrations." These holes are a theorized evolutionary advantage that allows light to pass to the lower leaves of the plant in its natural low light environment beneath the jungle canopy, as well as allowing wind to easily pass through the leaves.</p>


                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Appreciates bright, indirect light. It is tolerant of medium - low light conditions, but prefers an east or west facing window.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Be sure to water your plant upon delivery. Monstera prefer soil that is consistently moist with a dry out period between waterings. As epiphytes with aerial roots, they are sensitive to overwatering. Typically, you shouldn't have to water your Monstera more than once every 7-10 days.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />Medium Light. This plant will do best in a bright location with mostly indirect light.</p>
                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/noun_Van_217023.png?v=1588260466" className="sunStyle" width="28" height="28" />Local Delivery within Puerto Rico from $10.</p>
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Monstera;