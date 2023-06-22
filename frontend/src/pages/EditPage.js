import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TableHead from '../components/TableHead.js';

export const EditPage = ({ foodToEdit }) => {
    const [food, setFood] = useState(foodToEdit.food);
    const [size, setSize] = useState(foodToEdit.size);
    const [cals, setCals] = useState(foodToEdit.cals);
    const [carbs, setCarbs] = useState(foodToEdit.carbs);
    const [fat, setFat] = useState(foodToEdit.fat);
    const [protein, setProtein] = useState(foodToEdit.protein);
    const [date, setDate] = useState(foodToEdit.date.slice(0,10));
    const [unit, setUnit] = useState(foodToEdit.unit);

    const navigate = useNavigate();

    const editNutrition = async () => {
        const response = await fetch(`https://mern-website-y9x4.onrender.com/log/${foodToEdit._id}`, {
           method: 'PUT',
           body: JSON.stringify({
                food: food,
                size: size,
                cals: cals,
                carbs: carbs,
                fat: fat,
                protein: protein,
                date: date,
                unit: unit
           }),
           headers: {
            'Content-Type': 'application/json',
           },
        });
        if (response.status === 200) {
            navigate("/log");
            alert("Successfully edited food item!");
        } else {
            const errMessage = await response.json();
            navigate("/log");
            alert(`Failed to update food. Status ${response.status}. ${errMessage.Error}`);
        }
    };

    return (
        <>
        <article id="edit-page">
            <h2>Edit a Food Item</h2>
            <table id="food-items">
                <caption>Make changes to the food item. If units stay as "Select Units", no changes will be made.</caption>
                <TableHead/>
                <tbody>
                    <tr>
                        <td><label for="food" >
                            <input type="text" value={food} id="food" name="food"
                                    onChange={e => setFood(e.target.value)} 
                                    autoFocus 
                            />
                        </label></td>
                        <td><label for="size" >
                            <input
                                type="number"
                                value={size}
                                id="size"
                                name="size"
                                onChange={e => setSize(e.target.value)} 
                            />
                        </label>
                        <label for="unit" >
                            <select
                                name='unit'
                                onChange={e => setUnit(e.target.value)}
                            >
                                <option value="select" disabled selected>Select Units</option>
                                <option value="lbs">Lbs</option>
                                <option value="grams">Grams</option>
                                <option value="ounces">Ounces</option>
                                <option value="teaspoons">Teaspoons</option>
                                <option value="tablespoons">Tablespoons</option>
                                <option value="cups">Cups</option>
                                <option value="fluid ounces">Fluid Ounces</option>
                            </select>
                        </label>
                        </td>
                        <td><label for="cals" >
                            <input
                                type="number"
                                value={cals}
                                id="cals"
                                name="cals"
                                onChange={e => setCals(e.target.value)} 
                            />
                        </label></td>
                        <td><label for="carbs" >
                            <input
                                type="number"
                                value={carbs}
                                id="carbs"
                                name="carbs"
                                onChange={e => setCarbs(e.target.value)} 
                            />
                        </label></td>
                        <td><label for="fat" >
                            <input
                                type="number"
                                value={fat}
                                id="fat"
                                name="fat"
                                onChange={e => setFat(e.target.value)} 
                            />
                        </label></td>
                        <td><label for="protein" >
                            <input
                                type="number"
                                value={protein}
                                id="protein"
                                name="protein"
                                onChange={e => setProtein(e.target.value)} 
                            />
                        </label></td>
                        <td><label for="date" >
                            <input type="date" id="date" name="date" value={date}
                                
                                onChange={e => setDate(e.target.value)}
                                pattern="\d{2}-\d{2}-\d{2}"
                                />
                        </label></td>
                        <td><button onClick={editNutrition}>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    )
}

export default EditPage;