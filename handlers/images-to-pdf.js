'use strict'
const PDFKit = require('pdfkit')
const BlobStream  = require('blob-stream')

const toPdf = (request, reply) => {
    const newPdf = new PDFKit
    const stream = newPdf.pipe(BlobStream())    
    newPdf.image('../images/war.png', {

    })
    newPdf.end()  
    stream.on('finish', () => {
        const blob = stream.toBlobUrl('application/pdf')
        reply.send(blob)
    })
}

module.exports = {
    toPdf
}