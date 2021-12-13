import React from "react";
import '../component_style/Popup.css'
function Popup(props){

  
  const state = props.active
  

  const  disablePopup = () =>{
    
  }


  let claass = 'popup__window';
  if (state) {
    claass+= ' active';
  }
  else{
    claass += ' closed'
  }
    return(
        
            <div className={claass}>
                <div className = "popup__content">
                    <input></input>
                    <input></input>
                    <input></input>
                    <button >Submit</button>
                </div>
                <input type = "button" onClick = {() => props.changes(false)} value = "&times;" />
            </div>
        
    )
}
export default Popup