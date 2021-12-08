
import { Button } from 'primereact/button';
import './App.css';
import Li from './components/Li'
import './component_style/Ul.css'
import { useState } from 'react';
import Popup from './components/Popup'


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

  return (
    <div className="App">
      <input value = "Popup" type = "button" onClick = {togglePopup}/>
      <Button onClick ={ addNewRow}  >Add new stroke</Button>
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

