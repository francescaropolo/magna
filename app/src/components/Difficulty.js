import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const difficulties = {
    "facile": "🙃",
    "medio": "🧐",
    "difficile": "🥵",
    "pro": "🤯",
}
const Item = styled.p`
    font-size: .85rem;
`

const Difficulty = props => {
    const {difficulty} = props;
    return (
        <Item title={difficulty}>
          Difficoltà: {difficulties[difficulty]}
        </Item>
    );
};

Difficulty.propTypes = {
    
};

export default Difficulty;