import './calculator.css';
import  {useState} from 'react'

function Calculator() {
  let [num, setNum] = useState(0);
  const remove = () => {
    try {
      setNum(num.slice(0, -1));
    } catch (error) {
      setNum('');
    }
  }
  const calculate = ()=>{
    try {
      setNum(eval(num))
    } catch (error) {
      setNum('Error')
    }
  }
  const operand = (e) => {
    if(num === 0){
      setNum(e.target.value)
    }else{
      setNum(num + e.target.value)
    }
  }
  return (
    <>
      <div>
        <h3>The Simple Calculator</h3>
      </div>
      <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
                <input type="text" id="result" defaultValue={num} value={num}/> 
            </td> 
            <td><input type="button" id='reset' value="c/ce" onClick={()=>remove()} readOnly/></td> 
        </tr> 
  
        <tr> 
            <td><input type="button" value="2" onClick={operand} readOnly/></td> 
            <td><input type="button" value="1" onClick={operand} readOnly/></td> 
            <td><input type="button" value="3" onClick={operand} readOnly/></td> 
            <td><input type="button" value="/" onClick={operand} readOnly/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="4" onClick={operand} readOnly/></td> 
            <td><input type="button" value="5" onClick={operand} readOnly/></td> 
            <td><input type="button" value="6" onClick={operand} readOnly/></td> 
            <td><input type="button" value="*" onClick={operand} readOnly/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="7" onClick={operand} readOnly/></td> 
            <td><input type="button" value="8" onClick={operand} readOnly/></td> 
            <td><input type="button" value="9" onClick={operand} readOnly/></td> 
            <td><input type="button" value="-" onClick={operand} readOnly/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="0" onClick={operand} readOnly/></td> 
            <td><input type="button" value="." onClick={operand} readOnly/></td> 
            <td><input type="button" value="=" onClick={()=>calculate()} readOnly/></td> 
            <td><input type="button" value="+" onClick={operand} readOnly/></td> 
        </tr> 
    </table> 
    </>
  )
}

export default Calculator;
