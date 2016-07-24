import React from "react";

export default class Todo extends React.Component {
    render() {
        const { id, description, completed } = this.props;
        return(
            <p>
                {id}, {description}, {completed}
            </p>
        );
    }
}