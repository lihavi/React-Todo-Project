import React from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import Navbar from "./Navbar";
import NewTodos from "./NewTodos";
import Todos from "./Todos";

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
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
