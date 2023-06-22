import React from 'react';
import LogRow from './LogRow';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
function LogTable({ foods, onDelete, onEdit }) {
    return (
        <table id="foods">
            <thead>
                <th>Food</th>
                <th>Serving Size</th>
                <th>Calories</th>
                <th>Carbs(g)</th>
                <th>Fat(g)</th>
                <th>Protein(g)</th>
                <th>Date</th>
                <th>Delete</th>
                <th>Edit</th>
                <th><Link to="../add-nutrition"><AddIcon></AddIcon></Link></th>
            </thead>      
            <tbody>
                {foods.map((food, i) =>
                    <LogRow
                        food={food}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default LogTable;