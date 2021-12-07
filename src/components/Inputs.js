import { InputText } from '../../node_modules/primereact/inputtext';
import React from 'react';
import { Button } from 'primereact/button';

    function Inputs(props) {
        
        
        

        return(
            <div>
                <InputText value = {props.valTable.row.id}/>
                <InputText value = {props.valTable.row.firstName}/>
                <InputText value = {props.valTable.row.secondName}/>
                <InputText value = {props.valTable.row.lastName}/>
            </div>
            
        )
    }



export default Inputs;