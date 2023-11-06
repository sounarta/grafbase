'use server'

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose"
import { DeleteUserParams, UpdateUserParams, UserDataParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Project from "@/database/project.mode";


export async function createUser(UserData:UserDataParams) {

    try {
          connectToDatabase();

          const newUser = await User.create(UserData)

          return newUser
    } catch (error) {
        console.log(error)
        throw error
        
    }
    
}


export async function updateUser(params:UpdateUserParams) {

    try {
          connectToDatabase();

          const {clerkId,updateData,path} = params

          await User.findByIdAndUpdate({clerkId},updateData,{new:true})

       revalidatePath(path)
    } catch (error) {
        console.log(error)
        throw error
        
    }
    
}



export async function deleteUser(params:DeleteUserParams) {

    try {
          connectToDatabase();

        const {clerkId} = params;

      const user = await User.findOneAndDelete({clerkId})

      if(!user) {
        throw new Error('User not Found')
      }

        

      await Project.deleteMany({author:user._id})

      const deletUser = await User.findByIdAndDelete(user._id)

     return deletUser

    } catch (error) {
        console.log(error)
        throw error
        
    }
    
}