import React, {useState} from 'react';
import { RiEditBoxFill, RiEditBoxLine, } from 'react-icons/ri';
import { BsTrash, BsTrashFill, } from 'react-icons/bs';

function Exercise({ exercise, onDelete, onEdit }) {
    const [isEditFilled, setEditIcon] = useState(false);
    const toggleEditIcon = () => setEditIcon(!isEditFilled);
    const [isTrashFilled, setTrashIcon] = useState(false);
    const toggleTrashIcon = () => setTrashIcon(!isTrashFilled);
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight} {exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>{isEditFilled
            ?<RiEditBoxFill onChange = {setTimeout(() => setEditIcon(!isEditFilled), 100)}/>
            :<RiEditBoxLine onClick={() =>{ 
                toggleEditIcon()
                setTimeout(() => onEdit(exercise), 120)}} />}</td>
            <td>{isTrashFilled
            ?<BsTrashFill onChange = {setTimeout(() => setTrashIcon(!isTrashFilled), 100)}/>
            :<BsTrash onClick={() => {
                toggleTrashIcon()
                setTimeout(() => onDelete(exercise._id), 105)}} />}</td>
        </tr>
    );
}

export default Exercise;