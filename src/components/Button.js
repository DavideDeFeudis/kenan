import styled from 'styled-components'

export const Button = styled.button`
    display: inline-block;
     padding: 0.4em 2em;
     border: 0.16em solid #3A3A3A;
    //  margin: 0 0.3em 0.3em 0;
     box-sizing: border-box;
     text-decoration: none;
     font-family: 'Roboto',sans-serif;
     font-weight: 400;
     color: #C7C7C7;
     background-color: #292929;
     text-align: center;
    //  transition: all 0.15s;
    // &:hover {
    //     color: #DDDDDD;
    //     border-color: #DDDDDD;
    // }
    // &:active{
    //      color: #BBBBBB;
    //      border-color: #BBBBBB;
    // }
    &:focus {
        outline: none;
    }
`   
