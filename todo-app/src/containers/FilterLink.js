import { connect } from "react-redux"
import { setVisibilityFilter } from "../actions/visibilityFilterActions"
import Link from "../components/Link"


function mapStateToProps(state, ownProps) {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink