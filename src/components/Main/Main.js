import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router"
import {BrowserRouter as Router, Redirect} from "react-router-dom"
import Header from "../Header/Header";
import {getApi} from "../../shared/api-service";
import Loading from "../Loading/Loading";
import Games from "../Games/Games";

const Main = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getApi().then( ({games,categories}) => {
            setData({games,categories});
            setIsLoading(false);
        });
    }, []);

    return !isLoading?
        <Router>
            <Header categories={data.categories}/>
            <Switch>
                <Route exact path="/">
                    <Redirect to={`/${data.categories[0].link}`} />
                </Route>
                <Route path="/:category" render={() => <Games data={data}/>} />
            </Switch>
        </Router>
        :
        <Loading/>
};

export default Main;
