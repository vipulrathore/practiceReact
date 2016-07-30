import React from "react"
import ReactDOM from "react-dom"
import AddTodo from "./AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"
import Footer from "../components/Footer"


export default class App extends React.Component {
    render() {
        return(
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}