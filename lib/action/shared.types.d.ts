import { IUser } from "@/database/user.model";


export interface UserDataParams {
    clerkId:string;
    username:string;
    name:string;
    picture:string;
    email:string;
}

export interface UpdateUserParams{
    clerkId:string;
    updateData:Partial<IUser>;
    path:string
}

export interface DeleteUserParams{
    clerkId:string
}