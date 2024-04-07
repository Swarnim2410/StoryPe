import express from 'express'
import { addStory } from '../controllers/addstory.js'
import { getStory } from '../controllers/getstory.js'
import upload from '../middlewares/multer.js'
const router = express.Router()
router.post('/addstory',upload.single("image"),addStory)
router.get('/getstory',getStory)
export default router