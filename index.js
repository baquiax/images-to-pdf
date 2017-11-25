'use strict'

const Hapi = require('hapi')
const ImagesToPdf = require('./handlers/images-to-pdf')

// Create a server with a host and port
const server = new Hapi.Server({
  port: 8000
})

// Add the route
server.route({
  method: 'POST',
  path: '/pdf',
  handler: ImagesToPdf.toPdf
})

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
})