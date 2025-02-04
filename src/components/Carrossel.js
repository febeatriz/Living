import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import './Carrossel.css';

const Carrossel = () => {
    const glideRef = useRef(null);  // Referência para o carrossel Glide

    useEffect(() => {
        const glide = new Glide(glideRef.current, {
            type: 'carousel',
            startAt: 0,
            perView: 1,        // Mostra uma imagem por vez
            focusAt: 'center', // Foca na imagem central
            autoplay: 2500,    // Muda a imagem a cada 3 segundos
            hoverpause: true,  // Pausa a animação ao passar o mouse
        });

        glide.mount(); // Inicializa o Glide.js

        return () => glide.destroy(); // Limpa o Glide ao desmontar o componente
    }, []);

    return (
        <div className="carrossel-container">
            <h1 className="titulo-carrossel">Conheça os nossos lançamentos</h1>
            <h2 className="subTitulo-carrossel">Descubra qual projeto de vida te inspira</h2>
            <div className="glide" ref={glideRef}>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <img src="/images/carrossel1.png" alt="Imagem 1" />
                        </li>
                        <li className="glide__slide">
                            <img src="/images/carrossel42.png" alt="Imagem 2" />
                        </li>
                        <li className="glide__slide">
                            <img src="/images/carrossel21.png" alt="Imagem 3" />
                        </li>
                        <li className="glide__slide">
                            <img src="/images/carrossel31.png" alt="Imagem 3" />
                        </li>
                    </ul>
                </div>

                {/* Setas de navegação */}
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&#10094;</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&#10095;</button>
                </div>
            </div>
        </div>
    );
};

export default Carrossel;
