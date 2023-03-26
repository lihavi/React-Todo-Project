import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import Navbar from "./Navbar";
import NewTodos from "./NewTodos";
import Todos from "./Todos";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        
        <div className="container">
          <div className="content">
            <Routes>
              <Route path='/todos' element={<Todos/>}/>
              <Route path='/new-todo' element={<NewTodos/>}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
