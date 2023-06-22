import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LogTable from '../components/LogTable';

function LogPage({ setFood }) {
    const redirect = useNavigate();
    const [foods, setFoods] = useState([]);

    // Retrieve list of foods
    const loadFoods = async () => {
        const response = await fetch('https://mern-website-y9x4.onrender.com/log');
        const foods = await response.json();
        setFoods(foods);
    }

    // Update a single food
    const onEditFood = async food => {
        setFood(food);
        redirect("/edit-nutrition");
    }

    // Delete a single food
    const onDeleteFood = async _id => {
        const response = await fetch(`https://mern-website-y9x4.onrender.com/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('https://mern-website-y9x4.onrender.com/log');
            const foods = await getResponse.json();
            setFoods(foods);
        } else {
            console.error(`Failed to delete food with _id = ${_id}, status code = ${response.status}.`)
        }
    }

    // Load all the foods

    useEffect(() => {
        loadFoods();
    }, []);

    return(
        <div>
            <h2>List of Food Entries</h2>
            <p>This page shows the entries of food eaten along with the amount of macronutrients taken in. This is connected to a MongoDB cluster and anyone can make changes to the entries.</p>
            <p>Click on the + to add a new entry.</p>
            <LogTable
                foods={foods}
                onEdit={onEditFood}
                onDelete={onDeleteFood}/>
        </div>
    );
}

export default LogPage;