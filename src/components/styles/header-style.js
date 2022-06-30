import styled from 'styled-components';

export const Header = styled.header`
    padding: 1.5%;
    background-color: rgb(178, 55, 55);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 3px solid rgb(167, 49, 49);

    h3{
        font-size: 20px;  
        padding: .2em;
    }

    h3 > a{
        text-decoration: none; 
        color: white;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 6%;
        margin-left: 6%;
    }

    nav a{
        font-size: 18px;
        text-decoration: none;
        color: white;
        margin-left: 4%;
    }

    nav a:hover{
        transition: .5s;
        font-weight: bold;
        cursor: pointer;
        border-bottom:3px white solid;
    }

    .pedido{
        border: solid 2px white;
        border-radius: 100px;
    }
`;