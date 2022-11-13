import mongoose from "mongoose";

const employee = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    experience: {type: String},
    salary: {type: String}
})

export default mongoose.model('employee', employee);