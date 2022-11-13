import {dbConnection} from './sources/database/index.js';
import {parseExcel} from './helper/parse_file.js'
import {modifyingData} from './helper/modifying_data.js'
import Employee from './models/employee.js'
import mongoose from "mongoose";

dbConnection().then(() => console.log('Connection Establised')).catch(err => console.log(err))

const parsedExcel = parseExcel();
const sourceData = modifyingData(parsedExcel);
await Employee.deleteMany()
Employee.create(sourceData).then(customer => {
    console.info("New employee added");
    mongoose.connection.close()
})


