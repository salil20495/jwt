import * as mongoose from 'mongoose'

//import * as mongoose from 'mongoose'
export const UsersSchema=new mongoose.Schema({
    name:String,
    std:String,
    rollno:String,
    section:String,
    username:String,
    password:String
});

export interface Usersinterface  extends mongoose.Document {
    readonly username: string;
    readonly password: string;
}
