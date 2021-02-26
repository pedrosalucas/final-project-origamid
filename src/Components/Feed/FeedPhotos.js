import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from '../../api';
import styled from 'styled-components';

const PhotosList = styled.ul`
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;

    @media (max-width: 40rem) {
        grid-template-columns: repeat( 2, 1fr);
    }
`;

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const total = 3;
            const { url, options } = PHOTOS_GET({ page, total, user  });
            const { response, json } = await request(url, options);
            if( response && response.ok && json.length < total ) {
                setInfinite(false);
            }
        }
        fetchPhotos();
    }, [request, user, page, setInfinite])

    if( error ) {
        return <Error error={error} />
    } else if( loading ) {
        return <Loading />
    } else if( data ) {
        return (
            <PhotosList className="animeLeft">
                {data.map(photo => (
                    <FeedPhotosItem 
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))} 
            </PhotosList>
        );
    } else {
        return null;
    }
};

export default FeedPhotos;
