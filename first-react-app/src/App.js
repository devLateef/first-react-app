// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  let [num, setNum] = useState(0);

  const enterValue = val =>{
    return val
  }
  const enterChar = val =>{
    return val
  }
  return (
    <div className="App">
      <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
                <input type="text" id="result" value={num}/> 
            </td> 
            <td><input type="button" value="c" onClick={()=>setNum(enterValue(0))}/></td> 
        </tr> 
  
        <tr> 
            <td><input type="button" value="1" onClick={()=>setNum(enterValue(1))}/></td> 
            <td><input type="button" value="2" onClick={()=>setNum(enterValue(2))}/></td> 
            <td><input type="button" value="3" onClick={()=>setNum(enterValue(3))}/></td> 
            <td><input type="button" value="/" onClick={()=>setNum(enterChar('/'))}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="4" onClick={()=>setNum(enterValue(4))}/></td> 
            <td><input type="button" value="5" onClick={()=>setNum(enterValue(5))}/></td> 
            <td><input type="button" value="6" onClick={()=>setNum(enterValue(6))}/></td> 
            <td><input type="button" value="*" onClick={()=>setNum(enterChar('*'))}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="7" onClick={()=>setNum(enterValue(7))}/></td> 
            <td><input type="button" value="8" onClick={()=>setNum(enterValue(8))}/></td> 
            <td><input type="button" value="9" onClick={()=>setNum(enterValue(9))}/></td> 
            <td><input type="button" value="-" onClick={()=>setNum(enterChar('-'))}/></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="0" onClick={()=>setNum(enterValue(0))}/></td> 
            <td><input type="button" value="." onClick={()=>setNum(enterChar('.'))}/></td> 
            <td><input type="button" value="=" onClick={()=>setNum(enterChar('='))}/></td> 
            <td><input type="button" value="+" onClick={()=>setNum(enterChar('+'))}/></td> 
        </tr> 
    </table> 
    </div>
  );
}

export default App;
