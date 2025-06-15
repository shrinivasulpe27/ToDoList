import React, { useState } from "react";
import "../Component/Todo.css";

const Todo = () => {
  let [text, setText] = useState("");
  let [editText, setEditText] = useState("");
  let [list, setList] = useState([]);
  //   let [edit, setEdit] = useState(false);
  let [isIndex, setIsIndex] = useState(null);

  const handleAdd = () => {
    let data = [...list];
    data.push(text);
    setList(data);
    setText("");
    console.log(data);
  };
  const handleDelete = (index) => {
    console.log(index);
    let filteredData = list.filter((ele, i) => {
      return index !== i;
    });
    setList(filteredData);
  };

  const handleEdit = (index) => {
    setIsIndex(index);
    setEditText(list[index]);
    // setEdit(!edit);
  };

  const handleEditSave = () => {
    let data = [...list];
    data[isIndex] = editText;
    setList(data);
    // setEdit(!edit);
    setIsIndex(null);
  };
  return (
    <>
      <div className="list-todo">
        <input
          type="text"
          placeholder="Enter todo list"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={handleAdd}>ADD</button>
      </div>

      <ul className="list-container">
        {list.map((ele, index) => (
          <div key={index}>
            {index == isIndex ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="save" onClick={() => handleEditSave()}>
                  Save
                </button>
              </div>
            ) : (
              <li key={index}>
                {ele}
                <div className="button-group">
                  <button className="dlt" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                  <button className="edt" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                </div>
              </li>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};
export default Todo;
