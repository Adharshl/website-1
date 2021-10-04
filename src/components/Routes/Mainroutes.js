import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../Home/Homepage';
import Navbar from '../Navbar';



function Mainroutes() { 
    return(
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/'exact component={Homepage} />



            </Switch>
        </Router>
    </>
    )
}

export default Mainroutes;