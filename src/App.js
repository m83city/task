
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
    
    function deleteRow (id){ //delete Row
      setTableRows(tableRows.filter((rowTable) => rowTable.id !== id))
    }

  
    
    const [activePopup, setActivePopup] = useState(false);
    function changeState(disable){
      setActivePopup(false)
    }
    function popup(){
      setActivePopup(true)
    }


    function addTodo (first, second, last){
      
      const newRows = {
        id:Date.now(),
        firstName: first,
        secondName: second,
        lastName: last
      }
      console.log(newRows)
      setTableRows([...tableRows, newRows])
    }
   

  return (
    <div className="App">
      
      
      <Popup active = {activePopup} changes = {changeState} onCreate={addTodo}/>
      <Button onClick ={popup}>Add new stroke</Button>
      <div className='boxLable'>
        <label className='itemLable' > id </label>
        <label className='itemLable' >firstName</label>
        <label className='itemLable' >secondName</label>
        <label className='itemLable' >lastName</label>
      </div>
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

