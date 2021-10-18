import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { emojies } from '../libs/emojiesCategory';

const Wrapper = styled.div`
    background-color: ${props => props.theme.colors[props.variant]};
    border-radius: 2px;
    padding: ${props => props.theme.spacing(0.5)} ${props => props.theme.spacing(0.8)};
    padding-right: ${props => props.theme.spacing(1)};
    color: ${props => props.theme.colors.white};
    display: inline-block;
    font-weight: 500;
    margin-right: ${props => props.theme.spacing(1)}
`
const Tag = props => {
    const {tag} = props;
    
    return (
        <Link to={`/tags/${tag.id}`}>
            <Wrapper variant={tag.variant}>
                {tag.name} {emojies[tag.name]}
            </Wrapper>
        </Link>
    );
};

Tag.propTypes = {
    
};

export default Tag;