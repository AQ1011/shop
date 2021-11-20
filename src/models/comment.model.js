/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const commentSchema = mongoose.Schema( 
    {        
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
      timestamps: true,
    }    
)


commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;