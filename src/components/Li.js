import React from 'react';
import Inputs from './Inputs';
import {Button} from '../../node_modules/primereact/button'
import '../component_style/Li.css'

function Li(props, deleteRows){
    let idTable = props.row.id
    const showProps = () =>{
        console.log(props.row.id)
    }
    ///////////////////
    const removeRow = () =>{
        console.log(idTable) // id Element
        let a = deleteRows.deleteRow(idTable) // non-work code
    }
    ///////////////////
    return(
        <li className = "item_li">
            <Inputs valTable = {props}/>
            <Button  onClick = {removeRow}>Delete</Button>
        </li>
        
    )
}
export default  Li;