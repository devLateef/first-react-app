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
  return (
    <div className="App">
      <div>
        <h3>The Simple Calculator</h3>
      </div>
      <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
                <input type="text" id="result" value={num}/> 
            </td> 
            <td><input type="button" id='reset' value="c/ce" onClick={()=>remove()}/></td> 
        </tr> 
  
        <tr> 
            <td><input type="button" value="1" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="2" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="3" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="/" onClick={(e)=>setNum(num + e.target.value)}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="4" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="5" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="6" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="*" onClick={(e)=>setNum(num + e.target.value)}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="7" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="8" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="9" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="-" onClick={(e)=>setNum(num + e.target.value)}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="0" onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="." onClick={(e)=>setNum(num + e.target.value)}/></td> 
            <td><input type="button" value="=" onClick={()=>calculate()}/></td> 
            <td><input type="button" value="+" onClick={(e)=>setNum(num + e.target.value)}/></td> 
        </tr> 
    </table> 
    </div>
  );
}

export default App;
