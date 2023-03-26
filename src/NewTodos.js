import React, { useState, useEffect } from 'react';

function NewTodos() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Todos fetched successfully', data);
        setTodos(data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Failed to fetch todos');
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, priority }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create todo');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Todo created successfully', data);
        setTitle('');
        setDescription('');
        setPriority('');
        setTodos([...todos, data]);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Failed to create todo');
      });
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Create New Todo</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="button">Create Todo</button>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
      <div className="list-container">
        <h2>Todo List</h2>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.priority}`}>
              <div className="todo-details">
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>
              <div className="todo-priority">
                <span>{todo.priority}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
          }
export default NewTodos;