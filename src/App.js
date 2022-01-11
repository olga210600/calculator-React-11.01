import React, {useState} from 'react';
import MyInput from "./MyInput/Input";
import Buttons from "./MyButtons/Buttons";
import EngeenerNumber from "./EngeenegNumber/EngeenerNumber";
import TopButtons from "./TopButtons/TopButtons";
import styled from 'styled-components'

const MainWrapper = styled.div`
  width: 305px;
  height: 480px;
  background: black;
  padding-top: 10px;
  position: relative;
`


const converItem = (item, toNum) => (toNum ? +item : item.toString())

const App = () => {
    const [calcData, setCalcData] = useState({
        firstNumber: '',
        operator: '',
        secondNumber: '',
        result: ''
    })
    const handleInput = (textContent) => {

        if (calcData.firstNumber && calcData.operator) {
            setCalcData((prevState) => ({...prevState, secondNumber: calcData.secondNumber.concat(textContent)}))
        } else {
            setCalcData((prevState) => ({...prevState, firstNumber: calcData.firstNumber.concat(textContent)}))
        }

        console.log('textContent', textContent)

    }
    console.log(calcData, 'calcDat)')

    const handleMathButtons = (textContent) => setCalcData((prevState) => ({...prevState, operator: textContent}))


    const handleResult = () => {

        const firstNumber = converItem(calcData.firstNumber, true)
        const secondNumber = converItem(calcData.secondNumber, true)

        if (calcData.firstNumber && calcData.secondNumber && calcData.operator) {
            switch (calcData.operator) {
                case "/":
                    setCalcData((prevState) => ({...prevState, result: firstNumber / secondNumber}))
                    break;
                case "+":
                    setCalcData((prevState) => ({...prevState, result: firstNumber + secondNumber}))
                    break;
                case "-":
                    setCalcData((prevState) => ({...prevState, result: firstNumber - secondNumber}))
                    break;
                case "*":
                    setCalcData((prevState) => ({...prevState, result: firstNumber * secondNumber}))
                    break;
                default:
                    return;
            }
        }

    }


    const handleDelete = (useState) => {

        setCalcData({
            firstNumber: '',
            operator: '',
            secondNumber: '',
            result: ''
        })
    }

    return (
        <MainWrapper>
            <MyInput calcData={calcData}/>
            <TopButtons handleMathButtons={handleMathButtons} handleResult={handleResult}
                        handleDelete={handleDelete}/>
            <Buttons handleInput={handleInput}/>
            <EngeenerNumber handleMathButtons={handleMathButtons} handleResult={handleResult}
                            handleDelete={handleDelete}/>
        </MainWrapper>
    );
};

export default App;
