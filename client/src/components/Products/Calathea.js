import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Calathea() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/8MNvKnD/Calathea-ornata-500x500.jpg" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">CALATHEA MEDALLION</h2>
                        <strong>DESCRIPTION</strong>
                        <p>Calathea roseopicta, known at the ‘Medallion’ has large, oval shaped foliage with distinctive pink and white feather-shaped variegation on its emerald green leaves. The underside of each leaf exhibits a deep, rich burgundy hue. .</p>

                        <p>Like all Calatheas, the ‘Medallion' enjoys bright, indirect light and evenly moist soil.</p>

                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Prefers bright light, but is adaptable to bright indirect light conditions.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Be sure to water your plant upon delivery. Calathea like moderately moist soil but will rot when too much moisture is present. If soil is dry an inch below the top of the pot and the Calathea leaves are beginning to curl, it is time to water.</p>

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



export default Calathea;