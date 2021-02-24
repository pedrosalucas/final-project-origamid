import React from 'react';
import styled from 'styled-components';
import VisualizacaoImg from '../../Assets/visualizacao.svg';

const PhotoItem = styled.li`
    display: grid;
    border-radius: .2rem;
    overflow: hidden;
    cursor: pointer;

    img {
        grid-area: 1 / 1;
    }

    .visualizacao {
        grid-area: 1 / 1;
        background-color: rgba(0, 0, 0, .3);
        color: #fff;
        font-size: 1rem;
        text-align: center;
        display: none;
        align-items: center;
        justify-content: center;
    }

    .visualizacao::before {
        width: 16px;
        height: 10px;
        content: '';
        display: inline-block;
        margin-right: .25rem;
        background: url(${VisualizacaoImg}) no-repeat;
    }

    &:hover .visualizacao {
        display: flex;
    }

    &:nth-child(2) {
        grid-column: 2 / 4;
        grid-row: span 2;
    }

    @media (max-width: 40rem) {
        &:nth-child(2) {
            grid-column: initial;
            grid-row: initial;
        }
    }
`;

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
    return (
        <PhotoItem onClick={ () => setModalPhoto(photo) }>
            <img src={photo.src} alt={photo.title} />
            <span className="visualizacao">{photo.acessos}</span>
        </PhotoItem>
    );
};

export default FeedPhotosItem;
