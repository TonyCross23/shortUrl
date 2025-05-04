import app from '../src/app';
import { NowRequest, NowResponse } from '@vercel/node';

// wrap app to handle requests like a serverless function
export default app;