
import "./App.css";
import React from "react";
import ProfileSpace  from "./components/ProfileSpace";
import AddActivity from "./components/AddActivity";
import DisplayTodo from "./components/DisplayTodo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";



function App() {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id});
      });
      setTodos(todosArray);

    });

    return () => unsub();
  

  }, []);

   const handleEdit = async (todo, title) => {
     await updateDoc(doc(db, "todos", todo.id), { title: title });
   };
     const toggleComplete = async (todo) => {
       await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
     };
     const handleDelete = async (id) => {
       await deleteDoc(doc(db, "todos", id));
     };

     
  


  return (
    <div className="App">
      <div> 
        <ProfileSpace />
      </div>
      <div>
        <AddActivity />
      </div>
      <div className="todo__box">
        {todos.map((todo) => (
          <DisplayTodo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit} />


        ))}
      </div>
  

    </div>

  

   


  );
}

export default App;
