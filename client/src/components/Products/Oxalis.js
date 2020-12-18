import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Oxalis() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/fdjb3q2/Oxalis-triangularis-500x500.jpg" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">OXALIS TRIANGULARIS</h2>
                        <strong>DESCRIPTION</strong>
                        <p>Yes, you read it right - This is a Purple Shamrock plant that's unlike any other. Although its soft whitish-pink flowers are delicate and beautiful, it's the remarkable leaves that will truly capture your attention. Oxalis Triangularis boasts deep purple, heart-shaped leaves in an impressive shamrock formation.</p>


                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Appreciates bright, indirect light. It is tolerant of medium - low light conditions, but prefers an east or west facing window.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Allow the soil to dry between watering, ensure the top 2cm of soil is dry before watering. The worst thing you can do with bulbs is overwater as it will rot the bulb. Expect to water about once every 2 weeks.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />Partial Sun; Bright Direct to Bright Indirect Indoors</p>
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



export default Oxalis;