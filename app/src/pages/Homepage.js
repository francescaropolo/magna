import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Polaroid from '../components/Polaroid';
import Container from '../components/PageContainer';
import { Link } from 'react-router-dom';

const Homepage = props => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getRecipes();
    }, [])

    const getRecipes = () => {
        fetch(`${process.env.REACT_APP_API_BASE_PATH}/ricettes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setRecipes(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <Header transition={true}/>
            <Container>
                {recipes.map((recipe, index) => <Link to={`recipe/${recipe.id}`} key={index} ><Polaroid image={recipe.photo} inclination={false}/></Link>)}
            </Container>
        </>
    );
};

Homepage.propTypes = {
    
};

export default Homepage;