import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TableHead from '../components/TableHead.js';

export const CreatePage = () => {
    const [food, setFood] = useState('Food Item');
    const [size, setSize] = useState('0');
    const [cals, setCals] = useState('0');
    const [carbs, setCarbs] = useState('0');
    const [fat, setFat] = useState('0');
    const [protein, setProtein] = useState('0');
    const [date, setDate] = useState();
    const [unit, setUnit] = useState();

    const navigate = useNavigate()

    const addNutrition = async () => {
        const newNutrition = { food, size, cals, carbs, fat ,protein, date, unit };

        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newNutrition),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201) {
            alert("Successfully added a food item in the log.");
        } else {
            alert(`Failed to add a food item to the log. Status ${response.status}.`);
        }
        navigate("/log");
    };

    return (
        <>
            <article>
            <h2>Log a Food Item</h2>
            <p>Add the food that you have eaten today.</p>
            <table id="foods-table">
                <caption>Add a food item item to the log.</caption>
                <div>
                <TableHead/>
                <tbody>
                    <tr>
                        <td><label for="nutfood" class="required">
                            <input type="text" value={food} id="nutfood" name="food"
                                    onChange={e => setFood(e.target.value)} required
                                    autoFocus 
                            />
                        </label></td>
                        <td><label for="nutsize" class="required">
                            <input
                                type="number"
                                value={size}
                                id="nutsize"
                                name="size"
                                onChange={e => setSize(e.target.value)} required
                            />
                        </label>
                        <label for="sizeunits" class="required">
                            <select
                                name='unit'
                                onChange={e => setUnit(e.target.value)}
                                required
                            >
                                <option value="grams">Grams</option>
                                <option value="ounces">Ounces</option>
                                <option value="lbs">Lbs</option>
                                <option value="teaspoons">Teaspoons</option>
                                <option value="tablespoons">Tablespoons</option>
                                <option value="cups">Cups</option>
                                <option value="fluid ounces">Fluid Ounces</option>
                            </select>
                        </label>
                        </td>
                        <td><label for="nutcals" class="required">
                            <input
                                type="number"
                                value={cals}
                                id="nutcals"
                                name="cals"
                                onChange={e => setCals(e.target.value)} required
                            />
                        </label></td>
                        <td><label for="nutcarbs" class="required">
                            <input
                                type="number"
                                value={carbs}
                                id="nutcarbs"
                                name="carbs"
                                onChange={e => setCarbs(e.target.value)} required
                            />
                        </label></td>
                        <td><label for="nutfat" class="required">
                            <input
                                type="number"
                                value={fat}
                                id="nutfat"
                                name="fat"
                                onChange={e => setFat(e.target.value)} required
                            />
                        </label></td>
                        <td><label for="nutprotein" class="required">
                            <input
                                type="number"
                                value={protein}
                                id="nutprotein"
                                name="protein"
                                onChange={e => setProtein(e.target.value)} required
                            />
                        </label></td>
                        <td><label for="nutdate" class="required">
                            <input type="date" id="nutdate" name="date" value={date}
                                required
                                onChange={e => setDate(e.target.value)}
                                pattern="\d{2}-\d{2}-\d{2}"
                                />
                        </label></td>
                        <td><button class="wait" onClick={addNutrition}>Add</button></td>
                    </tr>
                </tbody>
                </div>
            </table>
            </article>
        </>
    );
}

export default CreatePage;