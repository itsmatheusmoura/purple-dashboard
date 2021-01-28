import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 1fr 1fr 1fr 1fr;
    grid-template-columns: 80px 1fr 1fr 1fr;

    width: 100vw;
    height: 100vh;
    background: #DFE1EB;
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;

    background-color: #FFFFFF;
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 6;

    padding: 10px;
    overflow: hidden;
`;

export const IndicatorsBox = styled.div`
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row: 3/4;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -250px;
`;

export const ProfileBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    #icon{
        margin: 10px;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    padding: 10px;
    width: 100%;

    input{
        width: 80%;
        border: none;
        outline: none;
        padding: 35px 10px;
        letter-spacing: 2px;
    }

    button{
        border: none;
        background-color: #FFFFFF;
        margin-right: 10px;
        cursor: pointer;
    }
`;

export const Username = styled.span`
    color: #000000;
    font-size: 14px;
    min-width: 110px;
`;

export const Login = styled.small`
    margin-left: 13px;
    font-size: 10px;
    color: #A6ACBE;
`;

export const UserAvatar = styled.div`
    img{
        width: 40px;
        height: 40px;
        border-right: 1px solid #eee;
        margin-right: 10px;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10px;
    }
`;

export const Aside = styled.aside`
    background-color: #373B53;
    grid-row-start: 1;
    grid-row-end: 6;
`;


export const LogoFielder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6F52ED;
    height: 10%;
`;

export const Icones = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg{
        margin-top: 15px;
        padding: 15px;
        cursor: pointer;
    }

    svg:hover{
        background-color: #FFFFFF;
        border-radius: 8px;
        transition: 400ms;
        fill: #6F52ED
    }
`;

export const TitleContainer = styled.div`
    grid-column: 2/6;
    grid-row: 2/3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -30px 150px;
    max-height: 150px;
`;

export const Title = styled.div`
    p{
        font-size: 14px;
        color: #A6ACBE;
        margin-top: 5px;
    }

    h1{
        font-size: 30px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;

    button{
        margin-right: 15px;
        border: 1px solid #DADCE5;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        color: #6F52ED;
        border-radius: 4px;
        cursor: pointer;

        svg{
            margin-right: 5px;
            fill: #6F52ED;
        }

        &:nth-child(1){
            background-color: #DADCE5;
        }

        &:nth-child(2){
            background-color: #6F52ED;
            color: #FFFFFF;

            svg{
                fill: #FFFFFF;
            }
        }

        &:nth-child(1):hover{
            background-color: #6F52ED;
            transition: 400ms;
            color: #FFFFFF;

            svg{
                fill: #FFFFFF;
            }
        }

        &:nth-child(2):hover{
            background-color: #DADCE5;
            transition: 400ms;
            color: #FFFFFF;

            svg{
                fill: #6F52ED;
            }
        }


    }
`;