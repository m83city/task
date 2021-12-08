import React from 'react';
import Inputs from './Inputs';
import {Button} from '../../node_modules/primereact/button'
import '../component_style/Li.css'
import PropTypes from 'prop-types'

function Li(props, onChange ){
    
    const showProps = () =>{
        console.log(props.row.id)
    }
    ///////////////////onDelete(props.row.id)
    
    ///////////////////
    return(
        <li className = "item_li">
            <Inputs valTable = {props}/>
            
        </li>
        
    )
}

export default  Li;