import "./Style.css";
import React, { useState } from "react";

const ToDoList = () => {
  const [new_item, setItem] = useState("");
  const [items, setItems] = useState([]);
  



  //ajoute tache
  const handleAddTask = () => {
    if (!new_item) {
      alert("veuillez ajouter une tâche");
      return;
    }
    const tache = {
      id: Math.floor(Math.random() * 1000),
      value: new_item,
      completed: false,
    };
    setItems((oldList) => [...oldList, tache]);
    setItem("");
  };

  const handelDeleteTask = (id) => {
    const new_Array = items.filter((item) => item.id !== id);
    setItems(new_Array);
  };
  const handelCompleteTask = () => {
    

    if (items.item === false) {
      return !items.item 
    }

    console.log(!items.item);
  };

  return (

    <div style={{ position: "relative", top: "50px" }}>
      <h1 className="title">Ma liste de tâches</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Ajouter une tache"
          className="form-control"
          style={{ width: "40%", position: "relative", left: "500px" }}
          value={new_item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          ajouter une tâche
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} style={{ margin: "20px", display: "flex" }}>
              {item.value}
              <button
                onClick={() => handelDeleteTask(item.id)}
                className="btn btn-danger m-1"
              >
                Supprimer
              </button>

              <input
                className="btn btn-success m-1 "
                onClick={() =>
                  handelCompleteTask(item.completed)
                }
             
                type="submit"
                value="Termine"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
