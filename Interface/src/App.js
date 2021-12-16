import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home';
import CreateExercise from './pages/create_exercise';
import EditExercise from './pages/edit_exercise';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/create_exercise">
            <CreateExercise />
          </Route>
          <Route path="/edit_exercise">
            <EditExercise exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;