//modules
import React from 'react';
import {Container} from '@material-ui/core';
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
//components
import Header from "./components/global-components/Header";
import Admin from "./components/pages/admin/Admin";
import Public from "./components/pages/public/Public"; 


const Main = () =>{
    return(
        <Container>
            <Header/>
        <Router>
        
                <Switch>

                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/">
                        <Public />
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default Main;