import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercise = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Exercise Successfully Added!");
        } else {
            alert(`Failed To Add Exercise!, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Add New Exercise</h1>
            <fieldset>
                <input
                    type="text"
                    placeholder="Exercise Name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <br />
                <input
                    type="number"
                    value={reps}
                    placeholder="Number of reps"
                    onChange={e => setReps(e.target.value)} />
                <br />
                <input
                    type="number"
                    placeholder="Weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
                <br />
                <input
                    type="text"
                    placeholder="kgs or lbs"
                    value={unit}
                    onChange={e => setUnit(e.target.value)} />
                <br />
                <input
                    type="text"
                    placeholder="Date (MM-DD-YY)"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                <br />
                <button
                    onClick={addExercise}
                >-Add Exercise-</button>
            </fieldset>
        </div>
    );
}

export default CreateExercise;