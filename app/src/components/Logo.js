import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Magna = styled.h1`
    font-family ${props => props.theme.typography.primaryFont};
    color: ${props => props.theme.colors.black};
    font-size: 4rem;
    margin: 0;
    transition: all .2s linear; 

    span {
        color: ${props => props.theme.colors.yellowOrange}
    }

    &.scrolled {
        font-size: 1.3rem;
    }

    ${props => !props.transition ? `
        font-size: 1.3rem;
    ` : null}
`

const Logo = props => {
    return (
        <Magna {...props}>
            Magna<span>.</span>
        </Magna>
    );
};

Logo.propTypes = {

};

export default Logo;