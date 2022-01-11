import React from 'react';
import styled from 'styled-components'

const MyTopButtonsWrapper = styled.div`
  width: 210px;
  height: 60px;
  display: inline-block;
  padding: 1px 6px;
  margin-left: 10px;
  margin-bottom: 8px;

`
const MyTopButtons = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: darkgrey;
  font-size: 25px;
  color: black;
  border: none;
  margin-right: 10px;
  margin-bottom: 10px;

`

const TopButtons = ({handleMathButtons, handleResult, handleDelete}) => {
    return (
        <MyTopButtonsWrapper>
            <MyTopButtons onClick={(e) => handleMathButtons(e.target.textContent)}>+/-</MyTopButtons>
            <MyTopButtons onClick={(e) => handleMathButtons(e.target.textContent)}>%</MyTopButtons>
            <MyTopButtons onClick={(e) => handleDelete(e.target.textContent)}>AC</MyTopButtons>
        </MyTopButtonsWrapper>
    );
};

export default TopButtons;