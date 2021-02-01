import express from 'express';
import { addUser, authUser, deleteUser, editUser, fetchUser, fetchUsers } from '../controllers/userControllers.js';
const router = express.Router();

router.get('/' , fetchUsers);
router.get('/:id' , fetchUser);
router.post('/new' , addUser);
router.post('/admin/login' , authUser);
router.put('/admin/:id' , editUser);
router.delete('/admin/:id' , deleteUser)


export default router