import React from 'react'

export default props => (
  <section id="contact" class="s-contact target-section">

        <div class="overlay"></div>

        <div class="row narrow section-intro">
            <div class="col-full">
                <h3>Contact</h3>
                <h1>Say Hello.</h1>

                <p class="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
            </div>
        </div>

        <div class="row contact__main">
            <div class="col-eight tab-full contact__form">
                <form name="contactForm" id="contactForm" method="post" action="">
                    <fieldset>

                    <div class="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="" aria-required="true" class="full-width"/>
                    </div>
                    <div class="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" aria-required="true" class="full-width"/>
                    </div>
                    <div class="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" class="full-width"/>
                    </div>
                    <div class="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
                    </div>
                    <div class="form-field">
                        <button class="full-width btn--primary">Submit</button>
                        <div class="submit-loader">
                            <div class="text-loader">Sending...</div>
                            <div class="s-loader">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>
                        </div>
                    </div>

                    </fieldset>
                </form>

                <div class="message-warning">
                    Something went wrong. Please try again.
                </div>

                <div class="message-success">
                    Your message was sent, thank you!<br/>
                </div>

            </div>
            <div class="col-four tab-full contact__infos">
                <h4 class="h06">Phone</h4>
                <p>Phone: (+63) 555 1212<br/>
                Mobile: (+63) 555 0100<br/>
                Fax: (+63) 555 0101
                </p>

                <h4 class="h06">Email</h4>
                <p>someone@holawebsite.com<br/>
                info@holawebsite.com
                </p>

                <h4 class="h06">Address</h4>
                <p>
                1600 Amphitheatre Parkway<br/>
                Mountain View, CA<br/>
                94043 US
                </p>
            </div>

        </div>

    </section>
)
