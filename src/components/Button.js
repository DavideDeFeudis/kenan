import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
     padding: 0.6em 2.2em;
     border: 0.16em solid #3a3a3a;
     box-sizing: border-box;
     text-decoration: none;
     font-family: "Roboto", sans-serif;
     font-size: 1rem;
     font-weight: 400;
     color: #c7c7c7;
     background-color: #292929;
     text-align: center;
    border-radius: 5px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;
