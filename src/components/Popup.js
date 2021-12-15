import React from "react";
import '../component_style/Popup.css'
import { InputText } from '../../node_modules/primereact/inputtext';
import {Button } from '../../node_modules/primereact/button';
import { useState } from 'react';

function Popup(props){
  const state = props.active
    let claass = 'popup__window';
  if (state) {
    claass+= ' active';
  }
  else{
    claass += ' closed'
  }

  const[valueFirst, setValueFirst] = useState();
  const[valueSecond, setValueSecond] = useState();
  const[valueLast, setValueLast] = useState();

/*   function takeValue (){
    let getFirst = document.getElementById("first").value
    let getSecond = document.getElementById("second").value
    let getLast = document.getElementById("last").value
    let data = [getFirst, getSecond, getLast]
    console.log(data)
    
  } */
  function submitHandler(event){
    event.preventDefault()
    
  
    let convertd = /\d/g


    
    if(valueFirst === undefined || valueSecond === undefined || valueLast === undefined){
      alert("Поля не можуть бути пустими")
    }
    else if(valueFirst === '' || valueSecond === '' || valueLast === ''){
      alert("Поля не можуть бути пустими")
    }
    else if( Boolean(valueFirst.match(convertd))  || Boolean(valueSecond.match(convertd)) || Boolean(valueLast.match(convertd)) ){
      alert("Поля не можуть містити цифри")
    }
    else{
      props.onCreate(valueFirst,valueSecond,valueLast);
    }



    
   
  }


    return(
        
            <form className={claass} onSubmit={submitHandler}>
                <div className = "popup__content">
                    <InputText value={valueFirst} onChange={event => setValueFirst(event.target.value)} />
                    <InputText value={valueSecond} onChange={event => setValueSecond(event.target.value)}/>
                    <InputText value={valueLast} onChange={event => setValueLast(event.target.value)}/>
                    <Button type="submit"  >Submit</Button>
                </div>
                <input type = "button" onClick = {() => props.changes(false)} value = "&times;" />
            </form>
        
    )
}
export default Popup