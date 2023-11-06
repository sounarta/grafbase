import {model,models,Document,Schema} from 'mongoose'


export interface IProject extends Document{

title:string;
description:string;
image:string;
liveSiteUrl:string;
githubUrl:string;
category:string;
author:Schema.Types.ObjectId
}


const ProjectSchema = new Schema ({
    title: {type: String,required: true,},
    description: {type: String,required: true,},
    image: {type: String,required: true,},
    liveSiteUrl: {type: String},
    githubUrl: {type: String,},
    category: {type: String,required: true},
    author: { type: Schema.Types.ObjectId,ref: "User",  required: true},
  });

const Project = models.Project || model('Project',ProjectSchema)

export default Project