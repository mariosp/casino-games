import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./Games.css";
import {Col, Container, Row} from "reactstrap";
import Game from "./Game/Game";
import {JACKKPOTS} from "../../shared/jackpots.js";

// const getJackpots = (filteredGames) => {
//     const jackpots = JACKKPOTS;
//     if(JACKKPOTS.length){
//         const gamesWithJackpots = filteredGames.map(game => {
//             if(game.id === )
//         });
//
//     } else {
//         return null;
//     }
// };

const Games = ({data}) => {
    const { category } = useParams();
    const [jackpots, setJackpots] = useState( []);

    const [filteredGames, setFilteredGames] = useState([]);
    useEffect(()=>{
        console.log("RENDER ")
        const filteredCategory = data.categories.filter(cat => cat.link === category)[0];
        const filteredGames = data.games.filter( game => game.categories.some( cat=> filteredCategory.categories.includes(cat)) );
        setFilteredGames(filteredGames);
    },[category]);

    useEffect(() => {
        const timer = setInterval(() =>{
            console.log("INTERVAL")
            setJackpots(JACKKPOTS);
        }, 10000);
        return () => clearInterval(timer);
    },[]);

    console.log("RENDER WITH")
    // const filteredCategory = data.categories.filter(cat => cat.link === category)[0];
    // const filteredGames = data.games.filter( game => game.categories.some( cat=> filteredCategory.categories.includes(cat)) );

    // React.useEffect(() => {
    //     const timer = setInterval(() => , 10000);
    //     return () => clearInterval(timer);
    // });

    const renderGameItems =  filteredGames.map(game => (
            <Col key={game.id} className="column-wrapper" xs="12" sm="6" md="4" lg="3">
                <Game game={game} category={category} jackpot={jackpots.find(jackpot=> jackpot.game === game.id)}/>
            </Col>
        )
    );

    return(
        <Container className="mt-5 container-wrapper">
            <Row>
                {renderGameItems}
            </Row>
        </Container>
    );
    // const renderGameItems =  filteredGames.map(game => <Col xs="12" sm="4" md="3"> <Game game={game}/> </Col>);


};

export default Games;
