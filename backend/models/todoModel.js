const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	text : {
		type: String,
		required: [true, 'Please add a text value']
	},
	done: {
		type:mongoose.SchemaTypes.Boolean,
		required:true
	}
}, {
	timestamps: true
}); 

module.exports = mongoose.model('todo', todoSchema);