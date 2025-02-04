import React from 'react';
import { Link } from 'react-router-dom';
import './CardsEmpreendimentos.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='card__content'> {/* Container para organizar o conteúdo */}
            <div className='cards__item__info'>
              <h5 className='cards__item__text' >{props.text}</h5>
              {props.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
            {/* Botão fixo na parte inferior do card */}
            <div className="card__button-container">
              <Link to={props.path} className="card__button" >Saiba Mais</Link>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
