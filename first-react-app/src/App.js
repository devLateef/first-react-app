// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
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
    <div className="App">
      <div>
        <h3>The Simple Calculator</h3>
      </div>
      <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
                <input type="text" id="result" defaultValue={num} value={num}/> 
            </td> 
            <td><input type="button" id='reset' value="c/ce" onClick={()=>remove()}/></td> 
        </tr> 
  
        <tr> 
            <td><input type="button" value="1" onClick={operand}/></td> 
            <td><input type="button" value="2" onClick={operand}/></td> 
            <td><input type="button" value="3" onClick={operand}/></td> 
            <td><input type="button" value="/" onClick={operand}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="4" onClick={operand}/></td> 
            <td><input type="button" value="5" onClick={operand}/></td> 
            <td><input type="button" value="6" onClick={operand}/></td> 
            <td><input type="button" value="*" onClick={operand}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="7" onClick={operand}/></td> 
            <td><input type="button" value="8" onClick={operand}/></td> 
            <td><input type="button" value="9" onClick={operand}/></td> 
            <td><input type="button" value="-" onClick={operand}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="0" onClick={operand}/></td> 
            <td><input type="button" value="." onClick={operand}/></td> 
            <td><input type="button" value="=" onClick={()=>calculate()}/></td> 
            <td><input type="button" value="+" onClick={operand}/></td> 
        </tr> 
    </table> 
    </div>
  );
}

export default App;
