import mongoose from 'mongoose'
const { Schema } = mongoose

const reportSchema = new Schema({
    isDead: Boolean,
    act: String,
    location: String,
    date: Date,
    desc: String,
    media: [{
        type: Buffer
    }],
    url: String,
    contact: {
        type: {
            phone: String,
            email: String,
            name: String,
        }
    },
    vote: Number,
    urgency: {
        type: String,
        enum: ["Normal", "Urgent", "Critical"]
    }
});

const ReportModel = mongoose.model('Report', reportSchema)
export default ReportModel
