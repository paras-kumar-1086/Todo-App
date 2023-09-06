import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();



const Connection = () => {
    
    const URL = process.env.DB_URL ;

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

    mongoose.connection.on('error', (error) =>
    {
        console.log('Error while connecting with the databse ', error.message);
    })
}

export default Connection ;
