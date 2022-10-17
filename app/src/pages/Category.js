import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Container from '../components/PageContainer';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import Polaroid from '../components/Polaroid';
import styled from 'styled-components';
import { emojies } from '../libs/emojiesCategory';

const Title = styled.h2`
    color: ${props => props.theme.colors[props.variant]};
    text-transform: capitalize;
`

const Category = props => {
    const {id} = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        getData();
    }, [id])

    const getData = () => {
        fetch(`${process.env.REACT_APP_API_BASE_PATH}/measurement-units`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.API_TOKEN_SALT}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCategory(data)
            })
            .catch((error) => {
                console.error(error);
            });
        // fetch(`${process.env.REACT_APP_API_BASE_PATH}/tags/${id}`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         setCategory(data)
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    return (
        <>
            <Header transition={false} />
            <Container>
                {category && <Title variant={category.variant}>{category.name} {emojies[category.name]}</Title>}
                {((category || {}).ricette || []).length > 0 ? 
                    category.ricette.map((recipe, index) => <Link to={`/recipe/${recipe.id}`} key={index} ><Polaroid image={recipe.photo} inclination={false} /></Link>) 
                    : <Loading />
                }
            </Container>
        </>
    );
};

Category.propTypes = {
    
};

export default Category;