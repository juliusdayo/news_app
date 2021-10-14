//modules
import {useEffect, useState} from 'react';
import {Container, Grid} from '@material-ui/core';
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {useDispatch} from 'react-redux';

import {getNews, getNewsToday} from './actions/news.js'

//components
import Header from "./components/global-components/Header";
import Admin from "./components/pages/admin/Admin";
import Public from "./components/pages/public/Public"; 



const Main = () =>{
    const dispatch = useDispatch();
    const [filter,setFilter] = useState({type:'all'});
    
    
    useEffect(()=>{
        if(filter.type === 'today'){
            return dispatch(getNewsToday())
        }
        dispatch(getNews())
    },[dispatch])

    console.log(filter)



    return(
        <Container disableGutters={true}>
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
                                <Public setFilter={setFilter}/>
                            </Route>
                        </Switch>
                    </Router>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main;