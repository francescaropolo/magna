import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Polaroid from '../components/Polaroid';
import Container from '../components/PageContainer';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Html from '../libs/html';
import ReactMarkdown from 'react-markdown';
import Tag from '../components/Tag';
import Difficulty from '../components/Difficulty';
import Time from '../components/Time';
import Loading from '../components/Loading';

const Intro = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${props => props.theme.spacing(3)};
    align-items: end;
`
const Text = styled.div``
const Title = styled.h2`
    font-family: ${props => props.theme.typography.primaryFont};
    font-size: 2rem;
`
const Description = styled.p`
    font-family: ${props => props.theme.typography.secondaryFont};
`
const Main = styled.section`
    padding-top: ${props => props.theme.spacing(3)};
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: ${props => props.theme.spacing(3)};
    align-items: start;
`
const Ingredients = styled.div``
const SectionTitle = styled.h4`
    font-family: ${props => props.theme.typography.primaryFont};
`
const List = styled.ul`
    margin: 0;
    padding: 0;
`
const Item = styled.li`
    list-style: none;
    font-family: ${props => props.theme.typography.secondaryFont};
    padding: ${props => props.theme.spacing(0.5)} 0;
`
const Procedure = styled.div`
    font-family: ${props => props.theme.typography.secondaryFont};
`
const TagsContainer = styled.div``


const Recipe = props => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        getRecipe();
    }, [id])

    const getRecipe = () => {
        fetch(`${process.env.REACT_APP_API_BASE_PATH}/ricettes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setRecipe(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <Header />
            <Container>
                {recipe ? <>
                    <Intro>
                        <Polaroid image={recipe.photo} recipe={recipe.title} inclination={true}/>
                        <Text>
                            <TagsContainer>{recipe.tags.map((tag, index) => {
                                return <Tag key={index} tag={tag} />
                            })}</TagsContainer>
                            <Title>{recipe.title}</Title>
                            <Description>{recipe.description}</Description>
                            <Difficulty difficulty={recipe.difficulty} />
                            <Time time={recipe.time} />
                        </Text>
                    </Intro>
                    <Main>
                        <Ingredients>
                            <SectionTitle>Ingredienti</SectionTitle>
                            <List>
                                {recipe.ingredients.data.map((ingredient, index) => {
                                    return <Item key={index}>{ingredient.quantity ? `${ingredient.quantity}${ingredient.unit}` : ''} {ingredient.product} {!ingredient.quantity ? ingredient.unit : ''} {ingredient.note ? ingredient.note : ''}</Item>
                                })}
                            </List>
                        </Ingredients>
                        <Procedure>
                            <SectionTitle>Cuciniamo</SectionTitle>
                            <ReactMarkdown>{recipe.procedure}</ReactMarkdown>
                        </Procedure>
                    </Main>
                </> :
                <Loading />
                }
            </Container>
            <Footer />
        </>
    );
};

Recipe.propTypes = {
    
};

export default Recipe;