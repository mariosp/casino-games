import React from "react";
import { useParams } from "react-router-dom";
import "./Games.css";
import {Col, Container, Row} from "reactstrap";
import Game from "./Game/Game";

const Games = ({data}) => {
    const { category } = useParams();
    const filteredCategory = data.categories.filter(cat => cat.link === category)[0];
    const filteredGames = data.games.filter( game => game.categories.some( cat=> filteredCategory.categories.includes(cat)) );

    const renderGameItems =  filteredGames.map(game => (
            <Col key={game.id} className="column-wrapper" xs="12" sm="6" md="4" lg="3">
                <Game game={game}/>
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
