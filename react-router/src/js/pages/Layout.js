import React from "react";
import { Link } from "react-router"

export default class Layout extends React.Component {
    navigate() {
        this.props.history.pushState(null, "/");
    }
    render() {
        return(
            <div>
                <h1>Welcome</h1>
                {this.props.children}
                <Link to="page1">Page1</Link>
                <Link to="page2">Page2</Link>
                <button onClick={this.navigate.bind(this)}>Home</button>
            </div>
        );
    }
}