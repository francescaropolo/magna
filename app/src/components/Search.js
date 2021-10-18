import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import throttle from 'lodash.throttle';
import styled from 'styled-components';

const Content = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing(0.3)} ${props => props.theme.spacing(1.5)};
    border-radius: 50px;
    border: 2px solid ${props => props.theme.colors.orange};
`
const List = styled.ul`
    padding: ${props => props.theme.spacing(2)};
    margin: 0;
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 101;
    background-color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing(1.5)};
`
const Item = styled.li`
    list-style: none;
`
const Input = styled.input`
    width: 100px;
    background-color: ${props => props.theme.colors.white};
    border: none;
    font-family: ${props => props.theme.typography.secondaryFont};
    padding: ${props => props.theme.spacing(1)};
`

const Search = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const [autocompleteLoading, setAutocompleteLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        let active = true;
        if (searchTerm && searchTerm !== "") {
            setAutocompleteLoading(true);
            fetchResults(searchTerm, results => {
                if (active) {
                    setAutocompleteLoading(false);
                    setSearchResults(results);
                }
            });
        } else if (searchTerm === "") {
            setSearchResults([]);
        }
        
        return () => {
            active = false;
        };
    }, [searchTerm])

    const fetchResults = React.useMemo(
        () =>
            throttle((input, callback) => {
                fetch(`${process.env.REACT_APP_API_BASE_PATH}/ricettes?title_contains=${input}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        callback(data)
                    })
                    .catch((error) => {
                        console.error(error);
                    }); 
            }, 300),
        [],
    );

    return (
        <Content>
            <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            🔍
            <List>
                {!autocompleteLoading && searchResults.map(item => (
                    <Item><Link to={`/recipe/${item.id}`}>{item.title}</Link></Item>
                ))}
            </List>
        </Content>
    );
};

Search.propTypes = {
    
};

export default Search;