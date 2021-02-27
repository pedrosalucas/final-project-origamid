import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
    const { id } = useParams();
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(id);
        request(url, options);
    }, [request, id]);

    if( error ) {
        return <Error error={error} />;
    } else if( loading ) {
        return <Loading />;
    } else if( data ) {
        return (
            <section className="container mainContainer">
                <PhotoContent data={data} single={true} />
            </section>
        );
    } else {
        return null;
    }
};

export default Photo;
