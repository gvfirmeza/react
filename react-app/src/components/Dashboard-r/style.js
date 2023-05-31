import styled from "styled-components";

const Lerer = styled.div`
    display: none;

    @media (max-width: 1400px) {
        display: block;
        width: 600px; 
        margin-top: 5em;
        border-radius: 2rem;
        padding: 2em;
        align-items: center;
        justify-content: center;
        background: linear-gradient(0deg, rgba(39,34,195,1) 0%, rgba(45,213,253,1) 100%);  
        
        .jonas{
            width: 500px;
        }
    
    }

    @media (max-width: 700px) {
        display: block;
        width: 400px;   
        
        .jonas{
            width: 300px;
        }
    
    }
    @media (max-width: 400px) {
        display: block;
        width: 320px;
        
        
        .jonas{
            width: 250px;
        }
    
    }
`;

export { Lerer };