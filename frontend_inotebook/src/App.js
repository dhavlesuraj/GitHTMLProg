import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './componant/Navbar';
import Home from './componant/Home';
import About from './componant/About';
import NoteState from './context/notes/NoteState';
import Alert from './componant/Alert';
import Login from './componant/Login';
import Signin from './componant/Signin';


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is Amazing react Course"/>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path='/login' exact element={<Login/>}/>
              <Route path='/signin' exact element={<Signin/>}/>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App

