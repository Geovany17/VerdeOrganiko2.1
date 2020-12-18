import React from 'react';
import './Product.css';
import "semantic-ui-css/semantic.min.css";
import './Tabs.js';

function Product() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/CV6hMX8/Ficus-elastica-2-500x500.jpg" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">FICUS ELASTICA RUBY</h2>
                        <strong>DESCRIPTION</strong>
                        <p>The Ficus Elastica Ruby displays beautiful, tri-colored variegation with shades of green, pink and white. The leaves are a subtle way to bring a pop of color into a space, and go great with anything mauve and terracotta. It is a high light plant that will appreciate evenly moist soil, although it likes to dry out between waterings.</p>

                        <p>With diligent care, patience and fertilizer, this gem can grow into a fully formed tree, or be pruned back to keep its small stature.</p>

                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Prefers bright indirect light, but is adaptable to medium light conditions.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Be sure to water your plant upon delivery. Rubber plants prefer moderately moist soil. A thorough watering when the top 1" - 2" of the soil are dry is ideal. This plant is sensitive to overwatering and susceptible to root rot.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />High Light. This plant needs at least a few of hours of direct sunlight.</p>
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



export default Product;