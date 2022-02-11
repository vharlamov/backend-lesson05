const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		content: { type: String, required: true },
		pageId: { type: Schema.Types.ObjectId, ref: 'user' },
		userId: { type: Schema.Types.ObjectId, ref: 'user' },
	},
	{
		timestamps: { createdAt: 'created_at' },
		versionKey: false,
	}
)

module.exports = model('Comment', schema)
