import React from "react";
import EditableTable from "./components/EditableTable";
import './../styles/App.css';

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Track edited cells to log updates for future</h2>
        <EditableTable />
    </div>
  )
}

export default App
