/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { Comment } = require('./comment.model');

const productSchema = mongoose.Schema( 
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
        },
        comment: {
            type: [Comment],
            required: false,
        },
        rating: {
            type: Number,
            default:5,
            min: 1,
            max: 5,
        },
        category: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'Category'
        },
        details: {
            type: mongoose.SchemaTypes.Mixed,
        }

    },
    {
      timestamps: true,
    }    
)


productSchema.plugin(toJSON);
productSchema.plugin(paginate);


const Product = mongoose.model('Product', productSchema);

module.exports = Product;