import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function LogRow({ food, onDelete, onEdit }) {
    return (
        <tr>
            <td title="What is the name of the food item?">{food.food}</td>
            <td title="How many servings?">{food.size} {food.unit}</td>
            <td title="How many calories in total?">{food.cals}</td>
            <td title="How many carbohydrates in total?">{food.carbs}</td>
            <td title="How much fat in total?">{food.fat}</td>
            <td title="How much protein in total?">{food.protein}</td>
            <td title="When was this eaten?">{food.date.slice(0,10)}</td>
            <td><DeleteIcon id="icon" onClick={() => onDelete(food._id)} title="Click the icon to delete the entry."/></td>
            <td><EditIcon id="icon" onClick={() => onEdit(food)} title="Click the icon to edit the entry."/></td>
            <td></td>
        </tr>
    );
}

export default LogRow;