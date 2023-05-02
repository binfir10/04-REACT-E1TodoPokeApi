import React from "react";
import styled from 'styled-components';


const MyAppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13rem;

  && h1 {
    color: red;
    font-size: 3rem;
  }

`;

const Error404 = () => {
  return (
    <MyAppContainer>
      <h1>ERROR 404 NOT FOUND!</h1>
    </MyAppContainer>
  );
};

export default Error404;
