import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/exercise_table';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function HomePage({ setExerciseToEdit }) {

    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setExercises(exercises.filter(exercise => exercise._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = async exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit_exercise");
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <Link to="/create_exercise">Add A New Exercise</Link>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
        </>
    );
}

export default HomePage;