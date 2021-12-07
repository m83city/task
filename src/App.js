
import { Button } from 'primereact/button';
import './App.css';
import Li from './components/Li'
import './component_style/Ul.css'
import { useState } from 'react';
import Popup from './components/Popup'


function App() {
 let tableId = 0 ;
    const [tableRows, setTableRows] = useState([
      {
        id: Date.now(),
        firstName: "lorem",
        secondName: "lorem",
        lastName: "lorem"}
  ]);

  const togglePopup = () =>{
    alert("ff")
  }
  
  
  
    const addNewRow = () =>{
      const newRow = {
        id:Date.now(),
        firstName: "",
        secondName: "",
        lastName: ""
      } 
      setTableRows([...tableRows, newRow])
    }

  return (
    <div className="App">
      <input value = "Popup" type = "button" onClick = {togglePopup}/>
      <Button onClick = {addNewRow}>Add new stroke</Button>
      <ul className = 'ul__box'>
        {tableRows.map((row,id) =>{
          if(row)
          return(<Li row={row} key={id}  />  )
        }
        )}
         
      </ul>
    </div>
  );
}


export default App;

