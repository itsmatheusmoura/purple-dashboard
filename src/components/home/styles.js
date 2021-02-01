import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;

    svg{
        cursor: pointer;
    }
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    padding: 10px;
    height: 10%;
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

export const IndicatorsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 295px;
    flex-wrap: wrap;

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
    display: flex;
    flex-direction: column;
    background-color: #373B53;
    width: 5%;
    min-width: 50px;
    height: 100vh;
    transition: 800ms;

    &:hover{
        position: fixed;
        top: 0;
        width: 10%;
        min-width: 200px;
        transition: 800ms;
    }
`;


export const LogoFielder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6F52ED;
    height: 10%;
    cursor: pointer;    
`;

export const Icones = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        margin-top: 15px;
        width: 90%;
        cursor: pointer;
        justify-content: center;
    }

    small{
        color: #FFFFFF;
        display: none;
    }

    svg{
        padding: 15px;
        cursor: pointer;
    }

    div:hover{
        background-color: #FFFFFF;
        border-radius: 8px;
        transition: 400ms;
        fill: #6F52ED;

        small{
            color: #6F52ED;
        }
    }

    &:hover{
        div{
            justify-content: stretch;
        }

        small{
            display: block;
            transition: 800ms;
        }
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 150px;
    margin-left: 15px;
    margin-bottom: 15px;
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

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 200px;
    flex-wrap: wrap;
`;
export const Chart = styled.div`
    width: 500px;
    height: 300px;
    border: 1px solid #eee;
    margin: 5px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


