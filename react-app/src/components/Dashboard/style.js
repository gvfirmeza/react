import styled from "styled-components";

const Lerer = styled.div `
    margin-top: 5em;
    width: fit-content;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(39,34,195,1) 0%, rgba(45,213,253,1) 100%);
        
    div {
        margin: 0em;
        padding: 6em;
    }

    .jonas {
        margin-top: 1em;
    }

    @media (max-width: 2400px) {
        div {
            padding: 4em;
        }
    }

    @media (max-width: 1900px) {
        div {
            padding: 2em;
        }
    }

    @media (max-width: 1400px) {
        display: none;
    }
`;

export { Lerer } ;