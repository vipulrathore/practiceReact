import React from "react";
import FilterLink from "../containers/FilterLink"


export default class Footer extends React.Component {
    render() {
        return(
            <p>
                Filters:{" "}
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
                {", "}
                <FilterLink filter="COMPLETED">
                    Completed
                </FilterLink>
                {", "}
                <FilterLink filter="PENDING">
                    Pending
                </FilterLink>
            </p>
        );
    }
}