import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";




export default function DisplayTodo ({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);
     

    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true) {
            setNewTitle(todo.title); 
        } else {
            todo.title = "";
            setNewTitle(e.target.value);

        }

    };

    return (
        <div className="todo__display">
            <input 
               style={{ textDecoration: todo.completed && "line-through"}}
               type="text"
               value={todo.title === "" ? newTitle : todo.title}
               className="list"
               onChange={handleChange} />

               <div>
                   <button
                      className="alldone__button"
                      onClick={() => toggleComplete(todo)}>
                          <CheckCircleIcon id="i" />
                      </button>
                      <button 
                        className="edit__button"
                        onClick={() => handleEdit(todo, newTitle)}>
                            <EditIcon id="i" />
                        </button>
                        <button 
                        className="delete__button"
                        onClick={() => handleDelete (todo.id)}>
                            <DeleteIcon id="i" />
                        </button>


               </div>


        </div>
    );
}