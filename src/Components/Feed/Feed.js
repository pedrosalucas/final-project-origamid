import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([ 1 ]);
    const [infinite, setInfinite] = React.useState(true);

    React.useEffect(() => {
        let wait = false;
        function ifiniteScroll() {
            if( infinite ) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                if( scroll > height * 0.75 && !wait ) {
                    setPages(pages => [...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener('wheel', ifiniteScroll);
        window.addEventListener('scroll', ifiniteScroll);
        return (() => {
            window.removeEventListener('wheel', ifiniteScroll);
            window.removeEventListener('scroll', ifiniteScroll);
        });
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
            { modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} /> }
            {pages.map(item => {
                return <FeedPhotos key={item} user={user} page={item} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />;
            })}
        </div>
    );
};

export default Feed;
