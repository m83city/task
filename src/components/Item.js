/* 
import { Button } from 'primereact/button';
import Li from './Li'
import Inputs from './Inputs';
import { useState } from 'react';
function Item() {
  const [tableRows, setTableRows] = useState([
    {
      id: Date.now(),
      firstName: "lorem",
      secondName: "lorem",
      lastName: "lorem",
    },
  ]);

  const addNewRow = () => {
    const newRow = {
      id: Date.now(),
      firstName: Math.random(),
      secondName: "",
      lastName: "",
    };
    setTableRows([...tableRows, newRow]);
  };

  function deleteRow(id) {
    setTableRows(tableRows.filter((row) => row.id !== id));
  }

  return (
    <div className="Item">
      <Button onClick={addNewRow}> Add</Button>
      {tableRows.map((row) => (
        <Li row={row} key={row.id} deleteRow={deleteRow} />
      ))}
    </div>
  );
}
export default  Item; */