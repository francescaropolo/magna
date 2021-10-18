import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import Container from '../components/PageContainer';

const Content = styled.div`
    padding-top: ${props => props.theme.spacing(4)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const P = styled.p`
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
`

const NotFound = props => {
    return (
        <> 
            <Header transition={false} />
            <Container>
                <Content>
                    <div style={{width:'100%',height:0,paddingBottom:'56%',position:'relative'}}><iframe src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn" width="100%" height="100%" style={{position:'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
                    <P>404 - Page not found</P>
                </Content>
            </Container>
        </>
    );
};

NotFound.propTypes = {

};

export default NotFound;
