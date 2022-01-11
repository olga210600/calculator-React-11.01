import React from 'react';
import styled from "styled-components";

const MyMathButtonsWrapper = styled.button`
    width:70px;
  flex-direction: column;
  background: black;
  border: none;
  position: absolute;
  top: 133px;
  left: 223px;

`


const MyMathButtons = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: orange;
  font-size: 25px;
  color: white;
  border: none;
  //margin-right: 10px;
  margin-bottom: 10px;
`

const EngeenerNumber = ({handleMathButtons, handleResult, handleDelete}) => {
    return (
        <MyMathButtonsWrapper>
            <MyMathButtons onClick={(e) => handleMathButtons(e.target.textContent)}>+</MyMathButtons>
            <MyMathButtons onClick={(e) => handleMathButtons(e.target.textContent)}>-</MyMathButtons>
            <MyMathButtons onClick={(e) => handleMathButtons(e.target.textContent)}>*</MyMathButtons>
            <MyMathButtons onClick={(e) => handleMathButtons(e.target.textContent)}>/</MyMathButtons>
            <MyMathButtons onClick={(e) => handleResult(e.target.textContent)}>=</MyMathButtons>
        </MyMathButtonsWrapper>
    );
};

export default EngeenerNumber;