import React, { useState, useRef } from "react";

export default function EditableTable() {

  const [rows, setRows] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Shyam", age: 30 },
    { id: 3, name: "Ali", age: 35 },
    { id: 4, name: "Shaw", age: 20 },
    { id: 5, name: "Tayyab", age: 50 },
    { id: 6, name: "Lakshmi", age: 40 }
  ]);

  // useRef to track edited rows
  const editedRowsRef = useRef({});

  const handleChange = (id, field, value) => {

    // update UI
    setRows(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );

    // track edits in ref (no re-render)
    editedRowsRef.current[id] = {
      ...editedRowsRef.current[id],
      id,
      [field]: value
    };
  };

  const handleSave = () => {
    console.log("Edited rows:", Object.values(editedRowsRef.current));

    alert(
      "Check console for edited rows:\n" +
      JSON.stringify(Object.values(editedRowsRef.current), null, 2)
    );

    // reset tracking after save
    editedRowsRef.current = {};
  };

  return (
    <div>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {rows.map(row => (
            <tr key={row.id}>

              <td>{row.id}</td>

              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={e =>
                    handleChange(row.id, "name", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={row.age}
                  onChange={e =>
                    handleChange(row.id, "age", e.target.value)
                  }
                />
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={handleSave}>
        Save changes
      </button>

    </div>
  );
}
