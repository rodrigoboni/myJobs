var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    avaliableRoutes: [
      {
        route: 'employers',
        endpoints: [
          {
            description: 'Get all employers',
            uri: '/employers/',
            method: 'GET',
          },
          {
            description: 'Get a employer',
            uri: '/employers/:id',
            method: 'GET',
            uriParameters: [
              { id: { type: 'Number' } }
            ],
          },
          {
            description: 'Create a employer',
            uri: '/employers/',
            method: 'POST',
            body: {
              name: { type: 'String', required: true },
              city: { type: 'String', required: true },
              obs: { type: 'String' },
            },
          },
          {
            description: 'Update a employer',
            uri: '/employers/:id',
            method: 'PUT',
            uriParameters: [
              { id: { type: 'Number' } }
            ],
            body: {
              name: { type: 'String', required: true },
              city: { type: 'String', required: true },
              obs: { type: 'String' },
            },
          },
          {
            description: 'Delete a employer',
            uri: '/employers/:id',
            method: 'DELETE',
            uriParameters: [
              { id: { type: 'Number' } }
            ],
          },
        ],
      },

      {
        route: 'jobs',
        endpoints: [
          {
            description: 'Get all jobs',
            uri: '/jobs/',
            method: 'GET',
          },
          {
            description: 'Get a job',
            uri: '/jobs/:id',
            method: 'GET',
            uriParameters: [
              { id: { type: 'Number' } }
            ],
          },
          {
            description: 'Create a job',
            uri: '/job/',
            method: 'POST',
            body: {
              title: { type: 'String', required: true },
              description: { type: 'String', required: true },
              _employer: { type: 'Schema.Types.ObjectId', required: true, ref: 'employers' },
              weekdays: { type: 'Boolean', default: true },
              weekends: { type: 'Boolean', default: false },
              hoursDay: { type: 'Number', required: true },
              wage: { type: 'Number', required: true },
              previousExperience: { type: 'Boolean', default: false },
              obs: { type: 'String' },
            },
          },
          {
            description: 'Update a job',
            uri: '/jobs/:id',
            method: 'PUT',
            uriParameters: [
              { id: { type: 'Number' } }
            ],
            body: {
              title: { type: 'String', required: true },
              description: { type: 'String', required: true },
              _employer: { type: 'Schema.Types.ObjectId', required: true, ref: 'employers' },
              weekdays: { type: 'Boolean', default: true },
              weekends: { type: 'Boolean', default: false },
              hoursDay: { type: 'Number', required: true },
              wage: { type: 'Number', required: true },
              previousExperience: { type: 'Boolean', default: false },
              obs: { type: 'String' },
            },
          },
          {
            description: 'Delete a job',
            uri: '/jobs/:id',
            method: 'DELETE',
            uriParameters: [
              { id: { type: 'Number' } }
            ],
          },
        ],
      }
  ] });
});

module.exports = router;
