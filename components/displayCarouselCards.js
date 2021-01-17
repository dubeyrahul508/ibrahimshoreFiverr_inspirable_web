import React from 'react';
import './displayCarouselCards.scss';

const DisplayCarouselCards = ({books}) => {
    const cardsArray = books.length ? (
        books.map(rE => {
            return(
                <div class="card" id = "card"><img src={rE.picture} alt=""/></div>
            )
        })
    ) : ( <div class = "notFound"><p>Didn't Have Any Data</p></div>);

    return (
        <div class = "displayCards">
            {cardsArray}
        </div>
    );
}

export default DisplayCarouselCards;