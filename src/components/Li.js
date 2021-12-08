import React from 'react';
import Inputs from './Inputs';
import {Button} from '../../node_modules/primereact/button'
import '../component_style/Li.css'

function Li(props, onChange){
    
    return(
        <li className = "item_li">
            <Inputs valTable = {props}/>
            <input type = "button" onClick = {() => props.onChange(props.row.id)} value = "Delete" />
        </li>
        
    )
}
export default  Li;