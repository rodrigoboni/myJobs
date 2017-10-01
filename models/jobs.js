/**
 * Job model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema
 */
const modelSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  employer: { type: Number, required: true },
  weekdays: { type: Boolean, default: true },
  weekends: { type: Boolean, default: false },
  hoursDay: { type: Number, required: true },
  wage: { type: Number, required: true },
  previousExperience: { type: Boolean, default: false },
  obs: { type: String },
});

/**
 * Model
 */
const Model = mongoose.model('jobs', modelSchema);

/**
 * Model methods
 */
module.exports = {
  // create
  create: (e, data) => {
    const promise = new Promise((resolve, reject) => {

      // create a new instance of model with provided data
      var modelInstance = new Model(data);

      // save model
      modelInstance.save((err, result) => {
        if (err) {
          // reject promise on error
          reject(err); 
        }

        if (result) {
          // resolve promise on success
          resolve(result); 
        }
      });
    })
      .then((result) => {
        // trigger event to notify success to route
        e.emit('create', null, result);
      })
      .catch((err) => { 
        // trigger event to notify error to route
        e.emit('create', err, null);
      });
  },

  // list
  getAll: (e) => {
    const promise = new Promise((resolve, reject) => {
      // find without query to return all records
      Model.find({}, (err, results) => {
        if (err) {
          // reject promise on error
          reject(err);
        }

        if (results) {
          // resolve promise on success
          resolve(results);
        }
      });
    })
      .then((results) => {
        // trigger event to notify success to route
        e.emit('getAll', null, results);
      })
      .catch((err) => {
        // trigger event to notify error to route
        e.emit('getAll', err, null);
      });
  },

  // get
  get: (e, id) => {
    const promise = new Promise((resolve, reject) => {
      // find querying by id to return one record
      Model.find({ _id: id }, (err, result) => {
        if (err) {
          // reject promise on error
          reject(err);
        }

        if (result) {
          // resolve promise on success
          resolve(result);
        }
      });
    })
      .then((result) => {
        // trigger event to notify success to route
        e.emit('get', null, result);
      })
      .catch((err) => {
        // trigger event to notify error to route
        e.emit('get', err, null);
      });
  },

  // update
  update: (e, id, data) => {
    const promise = new Promise((resolve, reject) => {
      // update record querying by id
      Model.update({ _id: id }, { $set: data }, (err, result) => {
        if (err) {
          // reject promise on error
          reject(err);
        }

        if (result) {
          // resolve promise on success
          resolve(result);
        }
      });
    })
      .then((result) => {
        // trigger event to notify success to route
        e.emit('update', null, result);
      })
      .catch((err) => {
        // trigger event to notify error to route
        e.emit('update', err, null);
      });
  },

  // delete
  delete: (e, id) => {
    const promise = new Promise((resolve, reject) => {
      // delete record querying by id
      Model.remove({ _id: id }, (err, result) => {
        if (err) {
          // reject promise on error
          reject(err);
        }

        if (result) {
          // resolve promise on success
          resolve(result);
        }
      });
    })
      .then((result) => {
        // trigger event to notify success to route
        e.emit('delete', null, result);
      })
      .catch((err) => {
        // trigger event to notify error to route
        e.emit('delete', err, null);
      });
  }
}
