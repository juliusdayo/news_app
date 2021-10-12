//modules
import {useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {useDispatch} from 'react-redux';

import {getNews} from './actions/news.js'

//components
import Header from "./components/global-components/Header";
import Admin from "./components/pages/admin/Admin";
import Public from "./components/pages/public/Public"; 



const Main = () =>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getNews())
    },[dispatch])

    return(
        <Container>
            <Grid container direction="column" spacing={8}>
                <Grid item>
                    <Header/>
                </Grid>
                <Grid>
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
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main;