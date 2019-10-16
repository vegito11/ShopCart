import styled from 'styled-components';

export const ButtonContainer = styled.button`    
    background: ${props => 
        props.cart? "var(--green-3)":"var(--grey-5)" };
    border-color: ${props => 
        props.cart? "var(--green-3)":"var(--grey-5)" };
    color:snow;
    padding: 0.5rem 1.4rem ;
    margin:0.1rem 0.5rem 0.2rem 0;
    border-radius:0.6rem;
    border:2px solid var(--blue-2);
    transition:all 0.5s ease-in
    transition:background 0.4s ease-in-out

    &:hover{
        background:var(--pink-4);
        // background: transparent;        
    }
    i{
        margin-right:0.6rem;
    }
    outline:none;
`;

