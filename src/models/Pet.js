import { Schema } from "mongoose";

export const PetSchema = new Schema(
    {
    name: {type: String, minlength: 1, maxlength: 100},
    imgUrl: {type: String, minlength: 1, maxlength: 1000},
    age: {type: Number, min: 0, max: 5000, required: true},
    likes: {type: ['']},
    isVaccinated: {type: Boolean},
    status: {type: String, enum: ['adopted', 'adoptable']},
    species: {type: String, enum: ['cat', 'dog', 'bird', 'capybara']},
    creatorId: {type: Schema.ObjectId, required: true, ref: 'Account'}





    }

)