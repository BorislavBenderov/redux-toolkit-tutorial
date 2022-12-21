import { useState } from "react";
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../api/apiSlice';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')

    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();

    const [addTodo] = useAddTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();


    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ userId: 1, title: newTodo, completed: false });
        setNewTodo('');
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">

            </button>
        </form>


    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = todos.map(todo => {
            return (
                <article key={todo.id}>
                    <div className="todo">
                        <input type="checkbox"
                            checked={todo.complete}
                            id={todo.id}
                            onChange={() => updateTodo({ ...todo, completed: !todo.completed })} />
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </div>
                    <button className="trash" onClick={() => deleteTodo({ id: todo.id })}></button>
                </article>
            );
        })
    } else if (isError) {
        content = <p>{error}</p>
    }

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}

export default TodoList;