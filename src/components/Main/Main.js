import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import getApi from "../../shared/api-service";

const Main = () => {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getApi().then( ({games,categories}) => {
            console.log(categories)
            setCategories(categories);
            setGames(games);
            setIsLoading(false);
        });
    }, []);
    return (
       <div>
           <Header/>
       </div>
    );

};

export default Main;
