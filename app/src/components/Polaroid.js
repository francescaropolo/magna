import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Frame = styled.div`
    width: 400px;
    display: inline-block;
    margin-top: ${props => props.theme.spacing(2)};
    ${props => props.inclination ? 'transform: rotate(-5deg);' : null}
`
const Wrapper = styled.div`
    background: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(8)};
    box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2);
`
const ImgContainer = styled.div`
    height: 350px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const Img = styled.img`
    width: 370px;
    height: 370px;
    object-fit: cover;
`

const Polaroid = props => {
    const {image, recipe, inclination} = props;

    return (
        <Frame inclination={inclination}>
            <Wrapper>
                <ImgContainer>
                    <Img src={`${process.env.REACT_APP_API_BASE_PATH}${image.url}`} alt={recipe} />
                </ImgContainer>
            </Wrapper> 
        </Frame>
    );
};

Polaroid.defaultProps = {
    inclination: false
};
Polaroid.propTypes = {
    inclination: PropTypes.bool
};

export default Polaroid;