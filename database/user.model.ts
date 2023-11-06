import { Schema,model,models,Document } from "mongoose";


export interface IUser extends Document {

clerkId:string;
name:string;
username:string;
description?:string;
email:string;
password?:string;
picture:string;
githubUrl?:string;
linkedinUrl?:string
projects?:Schema.Types.ObjectId[]

}


const UserSchema = new Schema({
    clerkId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project", // Replace "Project" with the actual model name for projects
      },
    ],
  });


const User = models.User || model('User',UserSchema) 

export default User