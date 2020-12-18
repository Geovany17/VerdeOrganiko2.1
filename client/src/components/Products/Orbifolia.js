import React from 'react';
import './Product.css';
import './Tabs.js';
import "semantic-ui-css/semantic.min.css";

function Orbifolia() {
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui stackable grid">
                    <div className="six wide column">
                        <img className="ui image" src="https://i.ibb.co/cb2kRy3/Calathea-orbifolia-500x500.jpg" />
                    </div>
                    <div className="ten wide column">
                        <h2 className="ui header">CALATHEA ORBIFOLIA</h2>
                        <strong>DESCRIPTION</strong>
                        <p>This exotic variety of Calathea is renowned for its broad, elegantly patterned leaves. Dramatic striping on Orbifolia's foliage adds texture and impact to your space. It prefers medium to low light conditions and consistent, moderate watering. When properly cared for, its leaves can reach upwards of 8" wide.</p>


                        <strong>LIGHT REQUIREMENTS</strong>
                        <br />
                        <p>Prefers bright indirect light, but is adaptable to bright direct light conditions.</p>
                        <strong>WATER REQUIREMENTS</strong>
                        <p>Be sure to water your plant upon delivery. Calathea like moderately moist soil but will rot when too much moisture is present. If soil is dry an inch below the top of the pot and the Calathea leaves are beginning to curl, it is time to water.</p>

                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/Sun_d9bae001-a9e2-4608-951a-30d33a88b10b.png?v=1588337016" className="sunStyle" width="28" height="28" />Medium Light. This plant will do best in a bright location with mostly indirect light.</p>
                        <p><img src="https://cdn.shopify.com/s/files/1/0013/3529/6118/files/noun_Van_217023.png?v=1588260466" className="sunStyle" width="28" height="28" />Local Delivery within Puerto Rico from $10.</p>
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHZwYJKoZIhvcNAQcEoIIHWDCCB1QCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAm8epWtiZo7iZ7qEUXEO3DzFRPbzvxpAoxzasRTnx8vyWHHJdLTuqA0ZjSmjgyxRuBLlHpXJ+JFzzdAxHWC42ri1XTvCx25gnN4LqquOGvAsjqm0ae2JKw6jTZAXZmXDtWXg/xaUYFTdHw0soZACf7XfNIYbJv6n46gXzAAg1dwTELMAkGBSsOAwIaBQAwgeQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIcxYqsXzRXZWAgcCImYEqrGwNCiHTMQPz0N473K14ZAWa81qndZbn+TH1WAWnSQqMBiZH4c/5qsNpHfYGQBElMD5AJuryTmLriMeuzKiovji43T/C1kJc3pv7wwml+EJjr7fbewo6WBa7vnIi2/9bszcRalI5jK3cxW11BWi+aGzD1OkcRFa2trWNzSm4t6zuv1488tg8wY8UYDKI0RTHFHJkHnom3wfF4o8lBgvupukIA5xxE+kIkNpYwVgE69SzOoAJHC2i88Ur+eKgggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0yMDExMDgyMjMzMDVaMCMGCSqGSIb3DQEJBDEWBBSE37fD8bsWDwZ2s5cmqy6sPWwOeTANBgkqhkiG9w0BAQEFAASBgIrJUEuG518Rf5mhX1UgtS0pb7WxlTNXQauDWGn98C/aDr7zuAkZKMe1h3ATDCIezgJ61WX9CID8ncnALdb4XwVAT4r4aVq9pbW3NVxTzrNpqtWa4bwUF+R4EmbIbfQLL95jgNutwuBE2Ann2yJW4ZCVN7XDkvO70BBo8Zh4o32J-----END PKCS7-----" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Orbifolia;