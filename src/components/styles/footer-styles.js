import styled from 'styled-components';

export const Footer = styled.footer`
    .vazio{
        content: '';
        width: 100%;
        height: 16.5%;
        bottom: -181.5%;
        position: absolute;
        background-color:rgb(237, 192, 192);
        z-index: -1;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5%;
    }
    .card{
        margin:0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:rgb(238, 103, 103);
        width: 800px; 
        border-radius:12px;
        box-shadow: 3px 6px 16px 3px rgb(134, 37, 37);
    }
    .card-text{
        color:white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: row;
        height: 150px;
    }
    .card-text div{
        margin: 0 16%;
    }

    .card-text > p{
        border-right: 3px solid rgb(191, 78, 78);
        height: 70%;
    }
    .card-text > div > img{
        width: 60px;
        margin: 5%;
    }
`