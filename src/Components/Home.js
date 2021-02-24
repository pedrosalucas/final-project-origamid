import React from 'react';
import styled from 'styled-components';
import Feed from './Feed/Feed';

const SectionHome = styled.section``;

const Home = () => {
    return (
        <SectionHome className="container mainContainer">
           <Feed /> 
        </SectionHome>
    );
};

export default Home;
