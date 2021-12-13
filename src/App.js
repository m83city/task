
import { Button } from 'primereact/button';
import './App.css';
import Li from './components/Li'
import './component_style/Ul.css'
import { useState } from 'react';
import Popup from '../src/components/Popup'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';


function App() { //start Array
    const [tableRows, setTableRows] = useState([
      {
        id: Date.now(),
        firstName: "lorem",
        secondName: "lorem",
        lastName: "lorem"},
  ]);

  const togglePopup = () =>{
    alert("ff")
  }
  
    const addNewRow = () =>{ // add new Row
      const newRow = {
        id:Date.now(),
        firstName: "fff",
        secondName: "fff",
        lastName: "fff"
      } 
      setTableRows([...tableRows, newRow])
    }

    
    function deleteRow (id){ //delete Row
      setTableRows(tableRows.filter((rowTable) => rowTable.id !== id))
    }

    function testing (value){
      /* const getValue = document.getElementById("title").value
     
      document.getElementById("spanId").value = getValue; */
      console.log("getValue")
    }
    /* let activePopup = true; */
    const [activePopup, setActivePopup] = useState(false);
    
    function changeState(disable){
      setActivePopup(false)
    }
    function popup(){
      setActivePopup(true)
    }
    
      ч

  

  return (
    <div className="App">
      
      <Popup active = {activePopup} changes = {changeState}/>
      <Button onClick = {popup}>popup</Button>
      <Button onClick ={addNewRow}>Add new stroke</Button>
      <ul className = 'ul__box'>

        {tableRows.map((row,id) =>{
          if(row)
          return(<Li row={row} key={id}  onChange = {deleteRow}/>  )
        }
        )}
         
      </ul>
      
    </div>
  );
}


export default App;

