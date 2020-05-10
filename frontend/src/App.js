import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Config from "./config";
import ToDoApp from "./ToDo/ToDoApp";
import LogIn from "./User/LogIn/LogIn";
import SignUp from "./User/SignUp/SignUp"
import MainPage from "./User/MainPage"
import Navbar from "./Navbar/Navbar"

function App() {
  return (
    
          <BrowserRouter>
            
           {sessionStorage.getItem("isAuthenticated") ? <Navbar /> : null }
              
                <Switch>
                  <Route path="/" exact component={LogIn} />
                  <Route path="/MainPage" component={MainPage} />
                  <Route path="/signup" component={SignUp} />
                </Switch>
              
           
          </BrowserRouter>
        );
      }
    

export default App;   


// localStorage.removeItem(authToken);