import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.p`
    font-size: .85rem;
`

const Time = props => {
    const { time } = props;
    return (
        <Item>
            Tempo: {time} ⏰
        </Item>
    );
};

Time.propTypes = {

};

export default Time;