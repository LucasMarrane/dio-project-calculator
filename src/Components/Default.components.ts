import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #212529;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #343a40;
    border-radius: 30px;
    padding:20px;
    width: 50%;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`