import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddActivity() {
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title, 
                completed: false,
            });
            setTitle("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="input__box">
                <input 
                type="text"
                placeholder="So what are your goals for today 🤷 ?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="btn__box">
                <button>Add Activity</button>
            </div>
        </form>
    )
}