
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[bill,setBill]=useState("");
  const[tip,setTip]=useState("10%");
  const[split,setSplit]=useState(1);
  const[splitTotal,setSplitTotal]=useState(0.0);
  const handleTipChange=(e)=>{
    let value =e.target.value.replace("%","");
    if(value.indexOf("%")=== -1)
    {
      value=value+"%";
    }
    setTip(value)
    
  }

  const handleBillChange=(e)=>{
    setBill(e.target.value);
    
  }
  const splitMinus=()=>{
   setSplit(oldvalue=>Math.max(oldvalue - 1, 1));
   
  }
  const splitPlus=()=>{
    setSplit(oldvalue=>oldvalue + 1)
    
  }
  const calculate=()=>{
       const percentage= 1 + parseInt(tip.replace("%",""))/100;
       const result=(bill * percentage / split).toFixed(2);
    
       setSplitTotal(result);
  }
  useEffect(()=>{
calculate();
  },[bill,tip,split]);
  return (
    <div>
      <label>Bill Total</label>
      <input type="text" placeholder={0.0} value={bill} onChange ={handleBillChange}/>
      <label>Tip</label>
      <input type="text" placeholder={0.0} value={tip} onChange={handleTipChange}/>
       <div className='summary'>
         <div className='split'>
         <label>Split</label>
             <div className='split-control'>
              <button onClick={splitMinus}>-</button>
              <span>{split}</span>
              <button onClick={splitPlus}>+</button>
             </div>
             </div>
           <div className='result'>
            <label>Split total</label>
            <span>{splitTotal}</span>     
           </div>
         </div>
       </div>
  
  );
}

export default App;
