import React from 'react';
import Inputs from './Inputs';
import '../component_style/Li.css'

function Li(props){
    
    return(
        <li className = "item_li">
            <Inputs valTable = {props}/>
            <input type = "button" onClick = {() => props.onChange(props.row.id)} value = "Delete" />
        </li>
        
    )
}

export default  Li;