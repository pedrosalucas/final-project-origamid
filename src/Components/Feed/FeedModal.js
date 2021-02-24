import React from 'react';
import styled from 'styled-components';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const ModalPost = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;

    @media (max-width: 40rem) {
        padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }
`;

const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, error, loading, request } = useFetch();
    React.useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
    }, [photo, request]);

    function handleOutSideClick(event) {
        if( event.target === event.currentTarget ) {
            setModalPhoto(null);
        }
    }

    return (
        <ModalPost onClick={handleOutSideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </ModalPost>
    );
};

export default FeedModal;
