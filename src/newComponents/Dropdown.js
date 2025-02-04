import React, { useState } from 'react';
import Cards from './CardsEmpreendimentos';
import { FaChevronDown } from 'react-icons/fa'; // Importando ícone
import './Dropdown.css';

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    // Dados para cada seção
    const emObraCards = [
        {
            src: '/images/predio.avif',
            text: 'The Edition by Living Vila Mariana',
            description: 'ola etaa',
            tags: ['inovação'],
            label: 'Rua Cláudio Rossi, 189 - São Paulo - Vila Mariana - SP',
            path: '/empreendimentos',
            description: '87 a 135m²\n 1 a 3 suites\n 2 a 3 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',

        },
    ];

    const lancamentoCards = [
        {
            src: '/images/lancamento1.png',
            text: 'Living Full Estadia',
            label: 'Av. Morumbi, 7.710 - São Paulo - Brooklin - SP',
            path: '/empreendimentos',
            description: '17 a 38m²\n Studio a 2 dorm.\n\n',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento2.png',
            text: 'High Line By Living',
            label: 'Rua Castro Alves, 254 - São Paulo - Aclimação - SP',
            path: '/empreendimentos',
            description: '62 a 86m²\n 1 a 2 suites\n 2 a 3 dorm. \n 1 vaga',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento3.png',
            text: 'Home Boutique By Living Anália Franco',
            label: 'Rua Acuruí, 577 - São Paulo - Anália Franco - SP',
            path: '/sobreLiving',
            description: '144m²\n 3 suites \n 2 vagas',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento4.png',
            text: 'Living Full Vila Olímpia',
            label: 'Rua Fiandeiras, 71 - São Paulo - Vila Olímpia - SP',
            path: '/qualidade',
            description: '25 a 36m²\n Studio a 1 dorm.\n\n',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento5.png',
            text: '25h By Living',
            label: 'Rua Borges Lagoa, 229 - São Paulo - Vila Clementino - SP',
            path: '/futuro',
            description: '19 a 67m²\nStudio a 1 dorm.\n\n',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento6.png',
            text: 'Home Boutique By Living Ipiranga',
            label: 'Av. Nazaré. 1616 - São Paulo - Ipiranga - SP',
            path: '/novidade',
            description: '137 a 156m²\n 3 suites\n 3 a 4 dorm. \n 2 vagas',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento7.png',
            text: 'Living Full Berrini',
            label: 'Av. Nova Independência, 1061 - São Paulo - Brooklin - SP',
            path: '/empreendimentos',
            description: '25 a 49m²\n 1 suite\n Studio a 2 dorm. \n 1 vaga',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento8.png',
            text: 'Living Grand Exclusive Freguesia do Ó',
            label: 'Avenida Miguel Conejo, 1143 - Freguesia do Ó - São Paulo - Freguesia do Ó - SP',
            path: '/empreendimentos',
            description: '71 a 215m²\n 1 a 3 suites\n 2 a 4 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/lancamento9.png',
            text: 'Living In Freguesia do Ó',
            label: 'Avenida Miguel Conejo, 114 - São Paulo - Freguesia do Ó - SP',
            path: '/empreendimentos',
            description: '31m²\n Studio\n\n',
            buttonText: 'Saiba Mais',
        },
    ];

    const prontoParaMorarCards = [
        {
            src: '/images/morar1.png',
            text: 'Living Unique',
            label: 'Rua Fernandes Moreira, 163 - São Paulo - Chácara Santo Antônio - SP',
            path: '/empreendimentos',
            description: '58 a 145m²\n 1 suite\n 2 a 3 dorm. \n 1 vaga',
            buttonText: 'Saiba Mais',

        },
        {
            src: '/images/morar2.png',
            text: 'Living Privilège',
            label: 'Rua Iporanga, 250 - São Paulo - Barra Funda - SP',
            path: '/empreendimentos',
            description: '61 a 93m²\n 1 suite\n 2 a 3 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',

        },
        {
            src: '/images/morar3.png',
            text: 'Living Alto do Ipiranga',
            label: 'Rua Salvador Simões, 590 - São Paulo - Ipiranga - SP',
            path: '/sobreLiving',
            description: '72 a 125m²\n 1 a 3 suites\n 2 a 4 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/morar4.png',
            text: 'Grand Living Nova Klabin',
            label: 'Rua Caçador de Esmeraldas, 245 - São Paulo - Nova Klabin - SP',
            path: '/qualidade',
            description: '71 a 121m²\n 1 a 3 suites\n 2 a 4 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/morar5.png',
            text: 'Living Concept Panamby',
            label: 'Av. Alberto Augusto Alves, 320 - São Paulo - Panamby - SP',
            path: '/futuro',
            description: '25 a 50m²\n Studio a 2 dorm. \n 1 vaga\n',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/morar6.png',
            text: 'Living Dream Panamby',
            label: 'Av. Alberto Augusto Alves, 200 - São Paulo - Panamby - SP',
            path: '/novidade',
            description: '62 a 76m²\n 1 suite\n 1 a 3 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',
        },
    ];

    const emBreveCards = [
        {
            src: '/images/embreve.png',
            text: 'Living Manuel Correia',
            label: 'Freguesia do Ó | São Paulo-SP',
            path: '/empreendimentos',
            description: '87 a 135m²\n 1 a 3 suites\n 2 a 3 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/embreve.png',
            text: 'Living Tucuruvi',
            label: 'Santana | São Paulo-SP',
            path: '/empreendimentos',
            description: '87 a 135m²\n 1 a 3 suites\n 2 a 3 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',
        },
        {
            src: '/images/embreve.png',
            text: 'Living Morumbi',
            label: 'Brooklin | São Paulo-SP',
            path: '/empreendimentos',
            description: '87 a 135m²\n 1 a 3 suites\n 2 a 3 dorm. \n 1 a 2 vagas',
            buttonText: 'Saiba Mais',
        },
    ];

    // Função para lidar com a mudança de seleção no dropdown
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        const sectionId = event.target.value.replace(/\s+/g, '-').toLowerCase();
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="dropdown-page">
            {/* Dropdown com ícone */}
            <div className="dropdown-container">
                <div className="dropdown-wrapper">
                    <select
                        value={selectedOption}
                        onChange={handleChange}
                        className="dropdown"
                    >
                        <option value="Estágio da obra">Estágio da obra</option>
                        <option value="Em Obra">Em Obra</option>
                        <option value="Lançamento">Lançamento</option>
                        <option value="Pronto para Morar">Pronto para Morar</option>
                        <option value="Em Breve">Em Breve</option>
                    </select>
                    <FaChevronDown className="dropdown-icon" /> {/* Ícone do dropdown */}
                </div>
            </div>

            {/* Seção Em Obra */}
            <section id="em-obra" className="section">
                <Cards
                    title="Em Obra"
                    cardsData={emObraCards}
                    initialCards={1}
                    loadMoreCards={0}
                    layout="small"
                />
            </section>

            {/* Seção Lançamento */}
            <section id="lançamento" className="section">
                <Cards
                    title="Lançamento"
                    cardsData={lancamentoCards}
                    initialCards={6}
                    loadMoreCards={3}
                    layout="default"
                />
            </section>

            {/* Seção Pronto para Morar */}
            <section id="pronto-para-morar" className="section">
                <Cards
                    title="Pronto para Morar"
                    cardsData={prontoParaMorarCards}
                    initialCards={4}
                    loadMoreCards={2}
                    layout="two-per-row"
                />
            </section>

            {/* Seção Em Breve */}
            <section id="em-breve" className="section">
                <Cards
                    title="Em Breve"
                    cardsData={emBreveCards}
                    initialCards={3}
                    loadMoreCards={0}
                    layout="default"
                />
            </section>
        </div>
    );
};

export default Dropdown; 