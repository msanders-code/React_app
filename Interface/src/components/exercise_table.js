import React from 'react';
import Exercise from './exercise';

function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight and Unit</th>
                    <th>Date Performed<div>(MM-DD-YY)</div></th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
