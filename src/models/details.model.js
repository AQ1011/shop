/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const detailSchema = mongoose.Schema( 
    {
        CPU: {
            type: String,
        },
        RAM: {
            type: Number,
        },
        storage: {
            type: String,
        },
        GPU: {
            type: String,
        },
        year: {
            type: Number,
        },
        os: {
            type: String,
        },
        size: {
            type: String,
        },
        weight: {
            type: String,
        },
        ports: {
            type: String,
        },
        ramSpeed: {
            type: String,
        },      
    },
    {
      timestamps: true,
    }    
)


detailSchema.plugin(toJSON);

const Detail = mongoose.model('Details', detailSchema);

module.exports = Detail;