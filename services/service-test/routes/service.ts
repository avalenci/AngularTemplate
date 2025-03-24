import express from 'express';
import { getData } from '../requests/service';

const router = express.Router();

router.get('/test', async (req, res) => {
    // const data = await getData();
    const data = { message: 'Hello World!'}
    res.send(data);
})

export default router;