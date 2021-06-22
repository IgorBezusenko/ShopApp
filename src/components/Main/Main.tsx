import React from "react";
import {Link} from "react-router-dom";

import css from "./Main.module.css"

export const Main: React.FC = () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <h2>This is a shop!</h2>
                <strong>I used in this project:</strong>
                <p>React, redux,react-router-dom,<br/> typescript, axios, css-module</p>
                <Link to={"/products"}><h3>Go to products</h3></Link>
            </div>

            {/*<h1>About me</h1>*/}
            {/*<p>My name is Igor</p>*/}
            {/*<p>I am a front-end developer</p>*/}
            {/*<strong>My skills: </strong>*/}
            {/*<p> HTML, CSS, SCSS, css-module, bootstrap</p>*/}
            {/*<p>JavaScript, typeScript, restAPI, axios, git</p>*/}
            {/*<p>React, redux, redux-thunk, react-router-dom</p>*/}
            {/*<p>Vue, vuex, vue-router</p>*/}


        </div>
    )
}