import React from "react";
import { Link, Redirect } from "react-router-dom";

import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

import classes from "./Navbar.module.scss";


class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        redirect: false,
        isAuthenticated: false
    }

}

logout = () => {
  console.log("logout")
  localStorage.removeItem("Token");
  localStorage.removeItem("authToken")
    this.setState({ redirect: true });
    sessionStorage.removeItem("isAuthenticated")


}

// componentDidUpdate() {
//    let isAuthenticated = sessionStorage.getItem("isAuthenticated")
//    this.setState({isAuthenticated})
// }



render() {
    if (this.state.redirect) {
        return (
            <Redirect to={'/'} />
        )
    }

  
  return (
    <header>
      <AppBar   position="static">
        <Toolbar  className={classes.nav}>
          <div>
            <Link to="/" className={classes.logo}>
              <Typography variant="h6">Task Manager App</Typography>
            </Link>
          </div>
          <div>
            
            <Button onClick={this.logout}  variant="contained" color="secondary">
              Log out
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
}
         
      
    

export default NavBar;
