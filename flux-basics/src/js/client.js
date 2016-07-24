import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./Pages/Layout";
import Todos from "./Pages/Todos";
import Settings from "./Pages/Settings";
import Favourites from "./Pages/Favourites";


const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path="/favourites" component={Favourites}></Route>
            <Route path="/settings" component={Settings}></Route>
        </Route>
    </Router>,
app)