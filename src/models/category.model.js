/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const categorySchema = mongoose.Schema( 
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
      timestamps: true,
    }    
)


categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;