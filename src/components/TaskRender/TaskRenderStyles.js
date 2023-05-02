import styled from "styled-components";

export const TaskContainerStyled = styled.ul`
display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: min(550px, 90%);
  gap: 1rem;
  padding: 0;
`;

export const WrapperTask = styled.li`
  background: #282828;
  color: rgb(226, 226, 226);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-wrap: wrap;
`;

export const ButtonStyled = styled.button`
    background: linear-gradient(45deg, #421432, #f53);
    outline: none;
    border: 0px solid;
    padding: 15px 20px;
    border-radius: 8px;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    font-weight: 700;
`;
