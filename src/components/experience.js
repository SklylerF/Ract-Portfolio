import React from "react";
import "../css/resume.min.css"
import "../css/resume.css"
function experience() {
    return (

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
            <div class="my-auto"> </div>
            <h2 class="mb-5">Experience</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5"></div>
            <div class="resume-content mr-auto">
                <h3 class="mb-0"> Full-stack Developer</h3>
                <div class="subheading mb-3">Manolos barbershop</div>
                <p>In this project, I worked with a four-man team to provide an online application for a local business.
                    This is a MERN stack application that demonstrates strenth in many subjects such as React, javascript,
                    Node.js, Express, MongoDB, CSS, Bootstrap, and Stripe. My team and I are proud of the product we have
                    created for this client and recommend a visit.</p>
                <a href="https://manolo-barbershop.herokuapp.com/">Visit Manolos Barbershop!</a>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5"></div>
            <div class="resume-content mr-auto">
                <h3 class="mb-0"> Front End Developer</h3>
                <div class="subheading mb-3">Madeleines Nail Boutique</div>
                <p>In this project, I worked with a four-man team to provide an online application for a local business. In
                    this project, I worked front end using languages like handlebars, bootstrap, CSS,HTML, and created a model
                    with javascript.</p>
                <a href="https://madelines-nail-boutique.herokuapp.com/">Visit Madeleines Nail Boutique!</a>
                <p> <a href="./assets/madalines letter of recomendation -Skyler.pdf">Click here for letter of
                    recomendation!</a></p>

            </div>

            <div class="resume-date text-md-right">
                <span class="text-primary">August 14th 2022 - Present</span>
            </div>
        </section>

    )
}

export default experience;