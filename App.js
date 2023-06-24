import React, { useState } from "react";

const App = () => {

  const [num,setnum]=useState(0);

  const incnum=()=>{
    setnum(num+1);
  }

  const decnum=()=>{
    if(num>0)
    return setnum(num-1);
    else{
      alert("Sorry, Zero limit reached");
    }
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
          <button onClick={incnum}>Inc</button> 
          <button onClick={decnum}>Dec</button> 

          </div>
        </div>
      </div>
    </>
  );
}; 
export default App;
