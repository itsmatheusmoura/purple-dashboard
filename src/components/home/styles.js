import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 70px 1fr 1fr 1fr 1fr;
    grid-template-columns: 80px 1fr 1fr 1fr;

    width: 100vw;
    height: 100vh;
    background: #DFE1EB;
`;

export const Aside = styled.aside`
    background-color: #373B53;
    grid-row-start: 1;
    grid-row-end: 6;

    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
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

    display: flex;
    align-items: center;
    justify-content: center;
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

export const IconsBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: yellow;
`;

export const ConfigIcon = styled.div`
    background-color: blue;
`;

export const LogoFielder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6F52ED;
    width: 100%;
    grid-row-start: 1;
    grid-row-end: 1;
    padding: 10px 0;
`;