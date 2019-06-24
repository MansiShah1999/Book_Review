import React,{Component} from 'react'
import { Nav , Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import NavLink from 'react-bootstrap/NavLink';

const Styles=styled.div`
.navbar{
    background-color:grey;
}
.navbar-brand,.navbar-link{
    color:white;

    &:hover{
        color:black;
    }
}
`;

export const Menu=()=>{
    return(
        <Styles>
            <Navbar expand="lg">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/mystery">Mystery</NavLink>
                <NavLink href="/romance">Romance</NavLink>
                <NavLink href="/fiction">Fiction</NavLink>
                <NavLink href="/fantasy">Fantasy</NavLink>
            </Navbar>
        </Styles>
    )
};

