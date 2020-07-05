import express from 'express';

const routes = express.Router();

routes.get('/test', (_req, res) => {
  return res.status(200).json({ success: 'Api is running!' });
});

export default routes;
