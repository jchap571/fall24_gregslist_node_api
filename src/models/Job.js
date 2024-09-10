import { Schema } from "mongoose";

export const JobSchema = new Schema(
    {
    company: {type: String, minlength: 0, maxlength: 100},
    jobTitle: {type: String, minlength: 0, maxlength: 100},
    hours: {type: Number, min: 1, max: 168, required: true},
    rate: {type: Number, min: 1, max: 10000000, required: true},
    imgUrl: {type: String, minlength: 0, maxlength: 500},
    description: {type: String, minlength: 0, maxlength: 500},
    creatorId: {type: Schema.ObjectId, required: true, ref: 'Account'}

    }
)