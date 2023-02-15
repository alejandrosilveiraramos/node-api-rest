import { Router } from 'express';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Hey, Dev!');
});

router.post('/test', (req: Request, res: Response) => {
  console.log(req);

  return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
