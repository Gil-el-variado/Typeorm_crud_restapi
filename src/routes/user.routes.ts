import {Router} from "express"
import {createUser, getUsers} from "../controllers/user.controler"

const router = Router ()

router.get('/users', getUsers)
router.post('/users',createUser)

export default router