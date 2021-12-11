import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';

export const register = (router: Router) => {
  router.get('/status', handler);
};

async function handler(req: Request, res: Response) {
  res.status(httpStatus.OK).send();
}
