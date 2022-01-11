import React from 'react';
import Input from "../MyInput/Input";
import styled from "styled-components";

const MyButtonsWrapper = styled.button`
  //height: 220px;
  width: 240px;
  background: black;
  border: none;
  margin-left: 3px;
`

const MyButtons = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: dimgrey;
  font-size: 25px;
  color: white;
  border: none;
  margin-right: 10px;
  margin-bottom: 10px;
`

const MyButtonZero = styled.button`
  height: 60px;
  width: 120px;
  border-radius: 35px;
  background: dimgrey;
  font-size: 25px;
  color: white;
  border: none;
  margin-right: 10px;
  margin-bottom: 10px;
`




const Buttons = ( {handleInput}) => {

    return (
        <MyButtonsWrapper>
            <MyButtons  onClick={(e) => handleInput(e.target.textContent)}>1</MyButtons>
            <MyButtons  onClick={(e) => handleInput(e.target.textContent)}>2</MyButtons>
            <MyButtons  onClick={(e) => handleInput(e.target.textContent)}>3</MyButtons>
            <MyButtons   onClick={(e) => handleInput(e.target.textContent)}>4</MyButtons>
            <MyButtons   onClick={(e) => handleInput(e.target.textContent)}>5</MyButtons>
            <MyButtons onClick={(e) => handleInput(e.target.textContent)}>6</MyButtons>
            <MyButtons  onClick={(e) => handleInput(e.target.textContent)}>7</MyButtons>
            <MyButtons onClick={(e) => handleInput(e.target.textContent)}>8</MyButtons>
            <MyButtons onClick={(e) => handleInput(e.target.textContent)}>9</MyButtons>
            <MyButtonZero  onClick={(e) => handleInput(e.target.textContent)}>0</MyButtonZero>
            <MyButtons   onClick={(e) => handleInput(e.target.textContent)}>.</MyButtons>

        </MyButtonsWrapper>
    );
};

export default Buttons;