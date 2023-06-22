import 'dotenv/config';
import express from 'express';
import * as nutritionlog from './model.mjs';
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: ["http://localhost:3000", "https://mern-website-y9x4.onrender.com"],
    })
);

app.post('/log', (req, res) => {
    nutritionlog.createNutrition(
        req.body.food,
        req.body.size,
        req.body.cals,
        req.body.carbs,
        req.body.fat,
        req.body.protein,
        req.body.date,
        req.body.unit
    )
        .then(nutrition => {
            res.status(201).json(nutrition);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Nutrition document failed to be created due to invalid syntax.'});
        });
});

app.get('/log', (req, res) => {
    nutritionlog.findNutrition()
    .then(nutrition => {
        if (nutrition !== null) {
            res.json(nutrition);
        }   else {
            res.status(404).json({ error: 'Nutrition document not found.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Request to retrieve a nutrition document failed.'})
    });
});

app.put('/log/:_id', (req, res) => {
    nutritionlog.replaceNutrition(
        req.params._id,
        req.body.food,
        req.body.size,
        req.body.cals,
        req.body.carbs,
        req.body.fat,
        req.body.protein,
        req.body.date,
        req.body.unit
    )
    .then(nutrition => {
        res.json(nutrition);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Attempt to replace the document failed.' })
    });
});

app.delete('/log/:_id', (req, res) => {
    nutritionlog.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'The document does not exist.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.send({ error: 'Request to delete by ID has failed.' });
        });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});