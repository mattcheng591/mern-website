import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", (err) => {
    if (err){
        res.status(500).json({ error: '500: The connection to the server has failed. Please try again.' });
    } else {
        console.log("You have successfully connected to the MongoDB Nutrition collection.");
    }
});

const nutritionSchema = mongoose.Schema({
    food:   { type: String, required: true },
    size:   { type: Number,
              required: true,
              default: 0,
              min: [0, 'Please enter a value.']},
    cals:   { type: Number,
              required: true,
              default: 0,
              min: [0, 'Please enter a value.']},
    carbs:  { type: Number,
              required: true,
              default: 0,
              min: [0, 'Please enter a value.']},
    fat:    { type: Number,
              required: true,
              default: 0,
              min: [0, 'Please enter a value.']},
    protein:{ type: Number,
              required: true,
              default: 0,
              min: [0, 'Please enter a value.']},
    date:   { type: Date, required: true, default: Date.now},
    unit:   { type: String, required: true, default: 'lbs', min:[0, 'Please enter a value.']}
});

const Food = mongoose.model("Food", nutritionSchema);

const createNutrition = async (food, size, cals, carbs, fat, protein, date, unit) => {
    const nutrition = new Food({
        food: food,
        size: size,
        cals: cals,
        carbs: carbs,
        fat: fat,
        protein: protein,
        date: date,
        unit: unit
    });
    return nutrition.save();
}

const findNutrition = async () => {
    const query = Food.find();
    return query.exec();
}

const findNutritionById = async (_id) => {
    const query = Food.findById(_id);
    return query.exec();
}

const replaceNutrition = async (_id, food, size, cals, carbs, fat, protein, date, unit) => {
    const result = await Food.replaceOne({ _id: _id}, {
        food: food,
        size: size,
        cals: cals,
        carbs: carbs,
        fat: fat,
        protein: protein,
        date: date,
        unit: unit
    });
    return {
        _id: _id,
        food: food,
        size: size,
        cals: cals,
        carbs: carbs,
        fat: fat,
        protein: protein,
        date: date,
        unit: unit
    }
}

const deleteById = async (_id) => {
    const result = await Food.deleteOne({_id: _id});
    return result.deletedCount;
}

export {createNutrition, findNutrition, findNutritionById, replaceNutrition, deleteById}