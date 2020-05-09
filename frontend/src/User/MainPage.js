import React from "react";
import axios from "axios";
import Config from "../config";
import ToDoApp from "../ToDo/ToDoApp";
import LogIn from "./LogIn/LogIn";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_list : [],
            authenticated: false,
            //firstLoad: true
        }
        this.authenticationHandler = this.authenticationHandler.bind(this);
        this.loadTaskData = this.loadTaskData.bind(this);
    }

    authenticationHandler(token) {
        console.log(" authentication handler");

        // save token to the localStorage
        localStorage.authToken = token;

        this.loadTaskData((newList) => {
            this.setState({
                task_list: newList,
                authenticated: true
            });
        });
        
    }

    loadTaskData(callback) {
        console.log("loading task data");
        axios.get(Config.domain + "/task", {headers: { Authorization: `Bearer ${localStorage.authToken}`} })
            .then(res => {
                const newList = res.data;
                console.log("data received");
                callback(newList);
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.loadTaskData((newList) => {
            this.setState({
                task_list: newList,
                authenticated: true
            });
        });
    //    if(this.state.firstLoad){
    //     window.location.reload()
    //     this.setState({firstLoad: false})
    //    }
        
    }

    render() {
       

       
        
            let child = <ToDoApp taskList={this.state.task_list}/>
        

        

        return child;
    }
}