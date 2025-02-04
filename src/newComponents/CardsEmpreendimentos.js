import React, { useState } from 'react';
import CardItem from './CardItemEmpreendimentos';

function Cards({ title, cardsData, initialCards, loadMoreCards, layout }) {
    const [visibleCards, setVisibleCards] = useState(initialCards);

    // Função para carregar mais cards
    const handleLoadMore = () => {
        setVisibleCards((prev) => prev + loadMoreCards);
    };

    return (
        <div className='cards'>
            <h1>{title}</h1>
            <div className='cards__container'>
                <div className={`cards__wrapper ${layout}`}>
                    <ul className='cards__items'>
                        {cardsData.slice(0, visibleCards).map((card, index) => (
                            <CardItem
                                key={index}
                                src={card.src}
                                text={card.text}
                                label={card.label}
                                path={card.path}
                                description={card.description}
                                buttonText={card.buttonText}
                            />
                        ))}
                    </ul>
                    {/* Botão "Mais Opções" */}
                    {visibleCards < cardsData.length && (
                        <button className='load-more-button' onClick={handleLoadMore}>
                            Mais Opções
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cards;