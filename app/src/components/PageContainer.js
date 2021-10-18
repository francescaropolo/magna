import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    // height: 100%;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing(2)};
    @media(min-width: ${props => props.theme.smQuery}) {
        padding: 0;
        max-width: 90%;
    }
    @media(min-width: ${props => props.theme.lgQuery}) {
        max-width: 80%;
    }
`

const PageContainer = props => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

PageContainer.propTypes = {};

export default PageContainer;
