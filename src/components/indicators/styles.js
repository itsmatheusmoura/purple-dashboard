import styled from 'styled-components';

export const Indicator = styled.div`
    display: flex;
    align-items: center;
    background: red;

    width: 295px;
    height: 100px;
    padding: 15px;
    background-color: #FFFFFF;
    margin: 10px;
    border-radius: 4px;

    #icon{
        padding: 10px;
        border-radius: 50%;
        background-color: rgba(113, 59, 219, 0.1);
    }

    div{
        display: flex;
        flex-direction: column;
        margin-left: 30px;
    };
`;

export const IndicatorText = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

export const IndicatorLegend = styled.small`
    font-size: 13px;
    color: #A6ACBE;
    font-weight: 300;
    margin-top: 8px;
`;
