import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Conheça nossos imóveis!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/predio.avif' 
              text='Arquitetura moderna e diferenciada!'
              label='Inovação'
              path='/empreendimentos'
            />
            <CardItem
              src='/images/casaInterior.jpg'
              text='Sua casa do seu jeito!'
              label='Personalidade'
              path='/empreendimentos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/lazer.jpg'
              text='Espaço para você e sua família!'
              label='Lazer'
              path='/empreendimentos'
            />
            <CardItem
              src='/images/techHouse.jpg'
              text='Tecnologia e inovação no seu dia a dia!'
              label='Tecnologia'
              path='/sobreLiving'
            />
            <CardItem
              src='/images/qualidade.jpg'
              text='Tudo pensado para seu conforto!'
              label='Qualidade'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
