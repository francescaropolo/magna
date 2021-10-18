import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    justify-content: center;
`
const Loading = props => {
    return (
        <Content>
            <div style={{width:'100%',height:0,paddingBottom:'56%',position:'relative'}}><iframe src="https://giphy.com/embed/l0HlKrB02QY0f1mbm" width="100%" height="100%" style={{position:'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
        </Content>
    );
};

Loading.propTypes = {
    
};

export default Loading;