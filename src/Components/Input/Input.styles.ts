import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        width: 100%;
        height: 75px;
        background-color: #212529;
        color: white;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
    }
`