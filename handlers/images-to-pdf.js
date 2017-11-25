'use strict'
const PDFKit = require('pdfkit')
const BlobStream = require('blob-stream')
const fs = require('fs')

const toPdf = function (request, reply) {
  const newPdf = new PDFKit()
  // TODO: create random name
  newPdf.pipe(fs.createWriteStream('out.pdf'))

  // TODO: Do better
  for (let i = 0; i < 10; i++) {
    newPdf.addPage().image(__dirname + '/../images/war.png', {
      fit: [250, 300],
      align: 'center',
      valign: 'center'
    })
  }
  newPdf.end()
  return reply({response: 'ok'})
}

module.exports = {
  toPdf
}