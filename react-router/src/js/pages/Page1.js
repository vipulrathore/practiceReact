import React from "react";

export default class Page1 extends React.Component {
    render() {
        const { params } = this.props;
        const { query } = this.props.location;
        const { naam, kaam } = query;
        return(
            <div>
                {naam},{kaam}
                <h1>Page1 ({params.hello})</h1>
            </div>
        );
    }
}