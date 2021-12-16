import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight} {exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FaEdit onClick={() => onEdit(exercise)} /></td>
            <td><FaTrash onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;