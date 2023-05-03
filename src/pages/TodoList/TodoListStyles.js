import styled from "styled-components";

export const MyAppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
  @media (max-width: 768px) {
  margin-top: 35px;
    }

  && h1 {
    color: #ffff;
    font-size:40px;
  }
`;

