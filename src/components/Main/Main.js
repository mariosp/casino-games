import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import getApi from "../../shared/api-service";
import Loading from "../Loading/Loading";

const Main = () => {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(()=> {
    //     getApi().then( ({games,categories}) => {
    //         console.log(categories)
    //         setCategories(categories);
    //         setGames(games);
    //         setIsLoading(false);
    //     });
    // }, []);
    return !isLoading?
        <div>
            <Header/>
        </div>
        :
        <Loading/>
};

export default Main;
