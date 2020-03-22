import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import getApi from "../../shared/api-service";
import Loading from "../Loading/Loading";

const Main = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getApi().then( ({games,categories}) => {
            setData({games,categories});
            setIsLoading(false);
        });
    }, []);
    console.log(isLoading)
    return !isLoading?
        <div>
            <Header categories={data.categories}/>
        </div>
        :
        <Loading/>
};

export default Main;
