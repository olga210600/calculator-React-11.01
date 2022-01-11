import React, {useState} from 'react';
import styled from "styled-components";


const MyInput = styled.input`
  width: 270px;
  height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background: black;
  border: none;
  font-size: 40px;
  text-align: right;
`

const Input = ({calcData}) => {

    return (
        // <MyInput type='text' value={calcData.firstNumber + calcData.operator + calcData.secondNumber + '=' + calcData.result}/>
        <MyInput type='text' value={calcData.result || calcData.firstNumber + calcData.operator + calcData.secondNumber}/>

    );

};

export default Input;