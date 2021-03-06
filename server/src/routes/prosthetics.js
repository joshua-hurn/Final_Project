import { Router } from 'express';
import Table from '../queries/table';

let router = Router();
let prostheticsTable = new Table('prosthetics');

router.get('/:id?', (req, res) => {
    if (req.params.id) {
        prostheticsTable.getOne(req.params.id)
            .then(results => res.send(results))
            .catch(e => res.status(500).send(e));
    } else {
        prostheticsTable.getAll()
            .then(results => res.send(results))
            .catch(e => res.status(500).send(e));
    }
});

router.post('/', (req, res) => {
    let newProsthetic = req.body;
    newProsthetic.userid = req.user.id;
    if(newProsthetic.prosthetic_image.length === 0) {
        delete newProsthetic.prosthetic_image;
    }
    prostheticsTable.insert(newProsthetic)
        .then(results => res.send(results))
        .catch(e => res.status(500).send(e));
});

router.put('/:id', (req, res) => {
    prostheticsTable.update(req.params.id, req.body)
        .then(results => res.send(`Post ID ${req.params.id} has been updated!`))
        .catch(e => res.status(500).send(e));
});

router.delete('/:id', (req, res) => {
    prostheticsTable.delete(req.params.id)
        .then(results => res.send(`Post ID ${req.params.id} has been deleted!`))
        .catch(e => res.status(500).send(e));
});

export default router;