import React from "react";
import "../css/resume.min.css"
import "../css/resume.css"
function Education() {
    return (

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div class="my-auto">
                <h3 class="mb-2">Education</h3>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                        <h3 class="mb-1">University of California Riverside</h3>
                        <div class="subheading mb-3">Boot Camp Certificate</div>
                        <div>Computer Science - Full Stack Developement</div>
                        <p>GPA: 3.0</p>
                    </div>

                </div>

                <div class="resume-item d-flex flex-column flex-md-row">
                    <div class="resume-content mr-auto">
                        <h3 class="mb-1">Etiwanda High School</h3>
                        <div class="subheading mb-3">High School Deploma</div>
                    </div>
                </div>

            </div>
        </section>

    )

}

export default Education;