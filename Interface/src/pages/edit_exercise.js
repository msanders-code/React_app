import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercise = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editTheExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Exercise Update Successful!");
        } else {
            alert(`Exercise Update Failed!, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Edit Exercise</h1>
            <fieldset>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} /> 
                <br />
                <input
                    type="number"
                    value={reps}
                    onChange={e => setReps(e.target.value)} />
                <br />
                <input
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
                <br />
                <input
                    type="text"
                    value={unit}
                    onChange={e => setUnit(e.target.value)} />
                <br />
                <input
                    type="text"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                <br />
                <button
                    onClick={editTheExercise}
                >-Save-</button>
            </fieldset>
        </div>
    );
}

export default EditExercise;