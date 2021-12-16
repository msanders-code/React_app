import * as exercises from './exercises_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

/**
 * Create a new exercise with name of exercie, the number of reps performed, 
 * the weight of the weights used during the exercise, the unit of weight (lbs or kgs),
 * and the date the exercise was performed.
 */
app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercises => {
            res.status(201).json(exercises);
        })
        .catch(error => {
            console.error(error);
            
            // Send back status code 500 in case of an error with an explanation of the error.
            res.status(500).json({ Error: error });
        });
});

/**
 * Retrive all exercises from collection. 
 */
app.get('/exercises', (req, res) => {
    exercises.findExercises({}, '', 0)
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(error => {
            console.error(error);
            // Send back status code 500 in case of an error with the explanation of the error.
            res.status(500).json({ Error: error });
        });
});

/**
 * Update the exercise whose id is provided in the path and set
 * its name, number of reps, weight used, weight unit, and date 
 * preformed to the values provided in the body.
 */
app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200)
                    .json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, 
                        unit: req.body.unit, date: req.body.date })
            } else {
                res.status(404).json({ Error: 'The exercise was not found in the database.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
});

/**
 * Delete the exercise with the given id.
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExercise(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Exercise was not found in the database' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});