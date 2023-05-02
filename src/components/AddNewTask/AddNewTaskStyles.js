import styled from "styled-components";

export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background-color: #dfdeea
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #222;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;

  &::placeholder {
    font-size: 1rem;
    letter-spacing: 0.5px;
    color: #c1c0c9;
    font-weight: 200;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;


export const ButtonDelete = styled.button`
    background: linear-gradient(45deg, #421432, #f53);
    outline: none;
    border: 0px solid;
    padding: 15px 20px;
    border-radius: 8px;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    font-weight: 700;
`;

export const ButtonAdd = styled(ButtonDelete)`
    background: green;
    padding: 15px;
`;