import { User } from "../entity/user"
import { Request, Response } from "express"



export const getUsers = async (req:Request, res:Response) => {
    try {

    
    const listaUsers = User.find()
    return res.json(listaUsers)
}catch (error) 
{
    if(error instanceof Error) 
    {
    return res.status(500).json({message: error.message})
    }
}
}

export const createUser = async (req:Request, res:Response) => {
    try 
    {
        console.log(req.body)
        const {nombre,ap_paterno,ap_materno} = req.body
        const user = new User()

        user.name = nombre
        user.ap_paterno = ap_paterno
        user.ap_materno = ap_materno


        await user.save()
        return res.json(user)
    
    }catch (error) 
    {
        if(error instanceof Error) 
        {
        return res.status(500).json({message: error.message})
        }
    }
}


