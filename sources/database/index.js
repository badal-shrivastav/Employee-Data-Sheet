import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = global.Promise;

const dbConnection = () => {
    return mongoose.connect(`mongodb+srv://{process.env.user}:{process.env.password}@{process.env.db}.pkwpemf.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export {dbConnection}
