import React from "react";
import {render} from 'react-dom'
import App from './App'
import Nav from "./src/pages/Nav";

render( <div>
    <Nav/>
    <App/>
</div>, document.getElementById('app'));