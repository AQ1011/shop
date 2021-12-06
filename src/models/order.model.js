/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const orderSchema = mongoose.Schema( 
    {
        products: [{
            product: {
                type: mongoose.SchemaTypes.ObjectId,
                require: true,
            },
            quantity: {
                type: Number,
                require: true,
                default: 1,
            }
        }],
        buyer: {
            type: mongoose.SchemaTypes.ObjectId,
            require: true,
        },
        status: {
            type: String,
            require: true,
            default: ''
        }
    },
    {
      timestamps: true,
    }    
)


orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;