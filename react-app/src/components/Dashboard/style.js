import styled from "styled-components";

const Lerer = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 70vh;

    div {
        margin: 0em;
        padding: 6em;
    }

    .jonas {
        margin-top: 1em;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

export { Lerer } ;