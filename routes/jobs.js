/**
 * Job route
 */
var express = require('express');
var router = express.Router();
var EventEmitter = require('events');
var Model = require('../models/jobs.js');

/* POST insert */
router.post('/', (req, res, next) => {
  console.log('-----\nRequest', { type: 'insert', body: req.body, headers: req.headers, method: req.method });
  
  var data = req.body;
  var Events = new EventEmitter();

  // define model events
  Events.once('create', (err, result) => {
    // invalid model or error
    if (err) {
      console.log('Response', { err });
      res.status(500).json({ message: 'Could not create job', err: err });
    }

    // model ok / insert done
    if (result) {
      console.log('Response', { result });
      res.status(201).json(result);
    }
  });

  // call model method to insert
  Model.create(Events, data);
});

/* GET list */
router.get('/', (req, res, next) => {
  console.log('-----\nRequest', { type: 'get all', headers: req.headers, method: req.method });

  var Events = new EventEmitter();

  // define model events
  Events.once('getAll', (err, result) => {
    // error
    if (err) {
      console.log('Response', { err });
      res.status(500).json({ message: 'Could not retrieve jobs', err: err });
    }

    // ok
    if (result) {
      console.log('Response', { result });
      res.status(200).json(result);
    }
  });

  // call model method to get all records
  Model.getAll(Events);
});

/* GET */
router.get('/:id', (req, res, next) => {
  console.log('-----\nRequest', { type: 'get', params: req.params, headers: req.headers, method: req.method });

  if (!req || !req.params || !req.params.id) {
    console.log('Response', { err: 'invalid id' });
    res.status(500).json({ message: 'Invalid ID' });
    return;
  }

  var id = req.params.id;
  var Events = new EventEmitter();

  // define model events
  Events.once('get', (err, result) => {
    // error
    if (err) {
      console.log('Response', { err });
      res.status(500).json({ message: `Could not retrieve job ${id}`, err: err });
    }

    // ok
    if (result) {
      console.log('Response', { result });
      res.status(200).json(result);
    }
  });

  // call model method to get record
  Model.get(Events, id);
});

/* PUT update */
router.put('/:id', (req, res, next) => {
  console.log('-----\nRequest', { type: 'put', body: req.body, params: req.params, headers: req.headers, method: req.method });

  if (!req || !req.params || !req.params.id) {
    console.log('Response', { err: 'Invalid ID' });
    res.status(500).json({ message: 'Invalid ID' });
    return;
  }

  var id = req.params.id;
  var data = req.body;
  var Events = new EventEmitter();

  // define model events
  Events.once('update', (err, result) => {
    // error
    if (err) {
      console.log('Response', { err });
      res.status(500).json({ message: `Could not udpate job ${id}`, err: err });
    }

    // ok
    if (result) {
      console.log('Response', { result });
      res.status(200).json(result);
    }
  });

  // call model method to update record
  Model.update(Events, id, data);
});

/* PUT delete */
router.delete('/:id', (req, res, next) => {
  console.log('-----\nRequest', { type: 'delete', params: req.params, headers: req.headers, method: req.method });

  if (!req || !req.params || !req.params.id) {
    console.log('Response', { err: 'Invalid ID' });
    res.status(500).json({ message: 'Invalid ID' });
    return;
  }

  var id = req.params.id;
  var Events = new EventEmitter();

  // define model events
  Events.once('delete', (err, result) => {
    // error
    if (err) {
      console.log('Response', { err });
      res.status(500).json({ message: `Could not delete job ${id}`, err: err });
    }

    // ok
    if (result) {
      console.log('Response', { result });
      res.status(200).json(result);
    }
  });

  // call model method to get record
  Model.delete(Events, id);
});

module.exports = router;