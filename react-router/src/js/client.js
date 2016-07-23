import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2"

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="/page1(/:hello)" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
        </Route>
    </Router>,
app);
