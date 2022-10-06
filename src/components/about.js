import React from "react";

import MyImage from '../image/sky.jpg';

function about() {
    return (
        <div>
            <h2 id="#about">About</h2>
            <h1>Skyler Ferreira</h1>
            <img src={MyImage} alt="slyler" />
            <p>7452 VICKSBURG PL. · CA 92336 · (909) 728-3434</p>
            <p>SKYLERFERREIRA994@GMAIL.COM</p>
            <p>Along my journey, as a software developer, I have learned many useful languages such as javascript, Node.js, And data languages such as MySQL and mongooseDB as well as many others I am proud to demonstrate these skills below. In the ocean that is software development, I am excited to explore and learn any language that can play an important role in your company. I am a team player that loves to communicate with other developers about new strategies, languages, and opportunities to grow as a vital role in any project. The work I have put into this journey has been immense and extremely rewarding and I look forward to playing my role in the next generation of development.</p>
            <a href="https://www.github.com/SklylerF" target="_blank" rel="noreferrer"><img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                width="32" height="32" /></a> <a href="https://www.linkedin.com/in/skyler-ferreira-a65233252/"
                    target="_blank" rel="noreferrer"><img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                    width="32" height="32" /></a>
        </div>

    )
}
export default about;