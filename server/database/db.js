import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@taskmanaagement.wying2q.mongodb.net/?retryWrites=true&w=majority` ;

    mongoose.set('strictQuery', false);
    
    mongoose.connect(URL, {useNewUrlParser: true});

    mongoose.connection.on('connected', () =>
    {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () =>
    {
        console.log('Database disconnected ');
    })

    mongoose.connection.on('error', () =>
    {
        console.log('Error while connecting with the databse ', error.message);
    })
}

export default Connection ;