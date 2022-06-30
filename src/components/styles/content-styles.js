import styled from 'styled-components';

export const Home = styled.div `

    .vazio{
        content: "";
        width: 100%;
        height: 78.6%;
        background-color:rgb(237, 192, 192);
        position: absolute;
        top: 0;
        left:0;
        z-index: -1;
    }
    
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    
    .textos{
        justify-content: center;
        align-items: center;
        padding:5%;
    }
    
    .textos h4{
        color: rgb(226, 84, 84);
        font-size: 18px;
        font-weight: bold;
    }
    
    .textos h1{
        font-size: 50px;
        margin-top: 5%;
    }

    .textos > p{
        font-size: 16px;
        margin-top: 2%;
    }

    button{
        margin: 5% 0%;
        color: white;
        background-color: rgb(196, 52, 52);
        padding: 2% 6%;
        border: none;
        border-radius: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    button:hover{
        font-weight: bold;
        background-color:rgb(134, 37, 37);
        transform: translate(2%,5%);
        transition: .7s;
        box-shadow: 3px 4px 6px rgb(227, 102, 102);
    }

    .card{
        margin:0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color:rgb(238, 103, 103);
        width: 800px; 
        border-radius:12px;
        box-shadow: 3px 6px 16px 3px rgb(134, 37, 37);
    }

    .card-texto{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 150px;
    }

    .card-texto div{
        margin:0 23px;
        text-align: center;
    }

    .card-texto > p{
        height:70%;
        border-right: 3px solid rgb(191, 78, 78);
    } 

    .card-texto div p{
        font-size: 16px;
        margin: 2% 0;
    }

`

export const Candy = styled.div `

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 6%;
        color: rgb(226, 84, 84);
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .container-doces{
        margin: 5% 0;
        display: grid;
        justify-content:center;
        align-items:center;
        grid-template-areas: "div div div" "div div div";
        grid-row: container-doces;
        grid-gap: 20px;
    }

    .container-doces > div{
        grid-area: "div";
        padding: 10px 10px;
        width: 230px;
        height: 270px;
        justify-content: center;
        border-radius: 12px;
        background-color:rgb(239, 189, 189);
    }
    .container-doces > div:hover{
        transform: translate(2%,2%);
        box-shadow: 5px 5px 16px 2px rgb(227, 102, 102);
        transition: .7s
    }

    .container-doces > div > img{
        width: 100%;
        height: 160px;
        border-radius: 12px;
    }

    .container-doces > div > .container-desc{
        margin: 2px 0;
        background-color: white;
        width: 100%;
        height: 38%;
    }

    .container-doces div .titulo{
        margin: 0px 10px;
        padding: 3px 2px;
        font-weight: bold;
        border-bottom: 2px rgb(121, 70, 70) solid;
    }
    .container-doces div .valor{
        margin: 5% auto;
        display: flex;
        text-align: center;
        justify-content:center;
    }
`
export const About = styled.div `
    
        margin: 5%;
        margin-bottom: 3%;
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        

    .texto{
        max-width: 300px;
    }

    .container .imagem{
        margin: 0px 2%;
    }

    .imagem img{
        width:490px;
    }

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 10px auto;
        color: rgb(226, 84, 84);
    }
    h1{
        font-size: 24px;
        margin-bottom: 7px;
    }
`