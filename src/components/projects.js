import React from "react";
import "../css/resume.min.css"
import "../css/resume.css"
function projects() {
    return (

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="Projects">
            <div class="my-auto">
                <h2 class="mb-5">Projects</h2>
                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                        <h3 class="mb-0">Full stack developer
                        </h3>
                        <div class="subheading mb-3">Danger-Zone</div>
                        <p>In this project, I worked alone and demonstrated skills like Javascript, HTML5, and CSS to create a
                            secure password generator that can be accessed and used by the public. </p>
                        <a href="https://sklylerf.github.io/Danger-Zone/">Visit Danger-Zone!</a>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">June 19th 2022 - Present</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                        <h3 class="mb-0">back end developer</h3>
                        <div class="subheading mb-3">README Generator</div>
                        <p>In this project, I worked alone and demonstrated my skills in Javascript to create a professional
                            README
                            generator that can be downloaded from my GitHub page and used alongside the provided instructions. </p>
                        <a href="https://github.com/SklylerF/Professional-README-Generator">Visit Repo!</a>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">July 10th 2022 - July 31st 2022</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row">
                    <div class="resume-content mr-auto">
                        <h3 class="mb-0">full stack developer</h3>
                        <div class="subheading mb-3"> Password Generator</div>
                        <p>In this project, I worked alone and demonstrated skills like Javascript, HTML5, and CSS to create a
                            secure password generator that can be accessed and used by the public. </p>
                        <a href="https://sklylerf.github.io/Passeord-Generator/">Visit Password Generator!</a>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">June 5th 2022 - Present</span>
                    </div>
                </div>

            </div>

        </section>

    )

}

export default projects;