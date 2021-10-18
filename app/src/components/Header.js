import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './PageContainer';
import Logo from './Logo';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const HeaderComponent = styled.header`
    width: 100%;
    padding: ${props => props.theme.spacing(2)} 0;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: ${props => props.theme.colors.background};
`
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .8s ease-in-out;

    &.scrolled {
        flex-direction: row;
        justify-content: space-between;
    }

    ${props => !props.transition ? `
        flex-direction: row;
        justify-content: space-between;
    ` : null}
`
const Menu = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    margin-right: ${props => props.theme.spacing(2)};
`
const MenuItem = styled.li`
    list-style: none;
    margin: ${props => props.theme.spacing(.5)};
`
const MenuLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: .8rem;
    color: ${props => props.theme.colors.black};
    font-weight: 500;
    transition: all .2s;

    &:hover {
        color: ${props => props.theme.colors[props.variant]};
        text-decoration: underline;
    }
`
const LinkHome = styled(Link)`
    text-decoration: none;
`
const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = props => {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        if (props.transition) {
            window.addEventListener('scroll', handleScroll);
        }
        getMenu();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [props.transition])

    const getMenu = () => {
        const list = [];
        const courses = ['antipasti', 'primi', 'secondi', 'contorni', 'dolci'];
        fetch(`${process.env.REACT_APP_API_BASE_PATH}/tags`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
               for(let i = 0; i < data.length; i++) {
                    for(let x = 0; x < courses.length; x++) {
                        if(data[i].name === courses[x]) {
                            list.push(data[i]);
                        }
                    }
               }
               setMenuList(list);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleScroll = (event) => {
        const logo = document.getElementById("magnaLogo");
        const container = document.getElementById("container");
        
        if (window.scrollY > 70) {
            container.classList.add('scrolled')
            logo.classList.add('scrolled')
        } else {
            container.classList.remove('scrolled')
            logo.classList.remove('scrolled')
        }
    }

    return (
        <HeaderComponent>
            <Container>
                <Content id="container" transition={props.transition}>
                    <LinkHome to="/"><Logo id="magnaLogo" transition={props.transition} /></LinkHome>
                    <MenuContainer>
                        <Menu>
                            {menuList.map((item, index) => {
                                return <MenuItem key={index}><MenuLink to={`/tags/${item.id}`} variant={item.variant}>{item.name}</MenuLink></MenuItem>
                            })}
                        </Menu>
                        <Search />
                    </MenuContainer>
                </Content>
            </Container>
        </HeaderComponent>
    );
};

Header.propTypes = {

};

export default Header;
