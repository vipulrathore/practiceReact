import React from "react";
import { Link } from "react-router";


export default class Layout extends React.Component {
    navigate(e) {
        this.props.history.pushState(null, '/')
    }
    render() {
        return(
            <div>
                <h1>Welcome Peeps!!</h1>
                <Link to="favourites">Favourites</Link>
                <Link to="settings">Settings</Link>
                <button onClick={this.navigate.bind(this)}>Home</button>
                {this.props.children}
            </div>
        );
    }
}