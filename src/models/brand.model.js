/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const brandSchema = mongoose.Schema( 
    {
        name: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
        },
    },
    {
      timestamps: true,
    }    
)


brandSchema.plugin(toJSON);


const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;