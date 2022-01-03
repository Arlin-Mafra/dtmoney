import styled from 'styled-components';
import {darken,transparentize} from 'polished';

interface ButtonBoxProps{
    isActive:boolean;
    activeColor: 'green' | 'red';
}


const colors =  {
    green: '#33CC95',
    red: '#e52e4d'
}

export const Container = styled.form`
   

  h2{
      color: var(--text-title);
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 2rem;
  }

  input{
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #E7E9EE;
    font-size: 1rem;

    ::placeholder{
        color: var(--text-body);
    }

    & + input{
        margin-top: 1rem;
    }
}

    button[type="submit"]{
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem;
        color: #fff;
        background: var(--green);

        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;

        :hover{
            filter: brightness(0.8);
        }
    }

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    background: #E7E9EE;

    
`;
export const ButtonBox = styled.button<ButtonBoxProps>`

        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${props => props.isActive ? 
        transparentize(0.9 ,colors[props.activeColor]) : 
        'transparent' };
        
        font-size: 1rem;
        transition: border-color 0.2s;

        :hover{
            border-color: ${darken(0.1 ,'#d7d7d7')} ;
        }

        span{
            margin-left:1rem ;
            display: block;
            font-size: 1rem;
            color: var(--text-title);
        }

        img{
            width: 20px;
            height: 20px;
        }
    
`;