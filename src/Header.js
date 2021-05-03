import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {  Link } from 'react-router-dom';


function Header() {
    return (
        <Container>
    
            <HeaderOptionCart>
                <Link to="/cart">
                    <ShoppingCartIcon/>
                    <CartCount>5</CartCount>
                </Link>
            </HeaderOptionCart>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    height:60px;
    background-color:#0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const HeaderOptionCart = styled.div`
    display: flex;
   a {  display: flex;
        align-items: flex-end;
        color: white;
        text-decoration: none;
        float: right !important;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
`