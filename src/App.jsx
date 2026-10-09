import { useEffect, useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const isTrue = todos.filter((todo) => todo.completed);
    const isFalse = todos.filter((todo) => !todo.completed);

    const addTodo = async () => {
        const requete = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        const reponse = await requete.json();

        setTodos(reponse);
    };

    const creaTodo = async (e) => {
        e.preventDefault();

        const requete = await fetch(
            "https://jsonplaceholder.typicode.com/todos",
            {
                method: "POST",
                body: JSON.stringify({
                    userId: 1,
                    title: title,
                    completed: false,
                }),
            }
        );

        const reponse = await requete.json();

        const nouveauTodo = {
            id: reponse.id,
            userId: 1,
            title: title,
            completed: false,
        };

        setTodos([...todos, nouveauTodo]);

        setTitle("");
    };

    const deleteTodo = async (id) => {
        await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
                method: "DELETE",
            }
        );

        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const changeTodo = async (id, completed) =>{
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}` , {
            method : "PATCH",
            body: JSON.stringify({
                completed: completed,
            })
        })
        
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
    }

    useEffect(() => {
        addTodo();
    }, []);

    return (
        <div>
            <form onSubmit={creaTodo}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button type="submit">
                    Ajouter
                </button>
            </form>

            <div>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        {todo.completed ? <h1 style={{ color: "green" }}>{todo.title}</h1> : <h1 style={{ color: "red" }}>{todo.title}</h1>}

                        <button onClick={() => deleteTodo(todo.id)}>
                            Supprimer
                        </button>
                        
                        <button onClick={() => changeTodo(todo.id, true)}>
                            Marquer comme terminé
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;