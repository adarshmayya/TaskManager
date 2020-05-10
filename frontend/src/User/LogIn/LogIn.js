import React from "react";
import "./LogIn.css";
import axios from "axios";
import Config from "../../config";
import { Link} from "react-router-dom";

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.submitHandler = this.submitHandler.bind(this);

        this.username = React.createRef();
        this.password = React.createRef();

        this.authenticationHandler = this.props.onAuthentication
        this.state= {isauthenticated:false}
    }
   

    submitHandler(event) {
        // prevent default submit behaviour
        event.preventDefault();
        console.log("login submit handler");

        const uname = this.username.current.value;
        const pwd = this.password.current.value;

        // empty form value and rerender
        this.username.current.value = "";
        this.setState();

        axios.post(Config.domain + "/user/login", {
            username: uname,
            password: pwd
        },{headers: { Authorization: `Bearer ${localStorage.authToken}`} })
            .then((res) => {
                sessionStorage.setItem("isAuthenticated",true)
               //this.setState ({isauthenticated:true})
                console.log("authentication successfull");
                localStorage.setItem("authToken",res.data.token);
                //this.authenticationHandler(res.data.token);
                this.props.history.push("/MainPage");
            })
            .catch((err) => {
                //this.setState ({isauthenticated:false})
                console.log(err)
                alert("invalid username or password")
            })
            
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="login-form">
                <div className="login-img-container">
                </div>
                <div className="login-container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" ref={this.username} name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" ref={this.password} name="psw" required />
                        
                    <button type="submit" className="login-btn">Log In</button>
                    <Link to="/SignUp" >
                    If you dont have account? SignUp
                    </Link> 
                </div>
            </form>
        );
    }
}