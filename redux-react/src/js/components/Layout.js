import React from "react";
import { connect } from "react-redux";
import axios from "axios";


@connect((store) => {
    return {
        users: store.user.users,
        tweets: store.user.tweets
    };
})
export default class Layout extends React.Component {
    componentWillMount(){
        this.props.dispatch({
            type: 'FETCH_USERS',
            payload: axios.get('http://rest.learncode.academy/api/wstern/users')
        })
    }
    render() {
        const { users } = this.props;

        const mappedUsers = users.map(user => <li>{user.age}</li>)
        return(
            <h1>{mappedUsers}</h1>
        );
    }
}