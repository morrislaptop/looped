import express, { RequestHandler } from 'express'

const router = express.Router()

router.get('/router', (req, res) => {
    res.send('Hello Router')
})

export const routes: { [path: string]: RequestHandler } = {
    '/': router
}
