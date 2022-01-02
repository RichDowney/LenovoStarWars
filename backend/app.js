import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authentication.js';
import collectionRouter from './routes/collection.js';
import notFoundErrorMiddleware from './middleware/not-found-error.js';
import serverErrorMiddleware from './middleware/server-error.js';
import allowCrossOriginForLocalHost from './middleware/cross-origin-local-host.js';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Add headers to allow for frontend local host to make api calls
app.use(allowCrossOriginForLocalHost);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/collections', collectionRouter);

// endpoint to force 500 error to test serverErrorMiddleware is functioning
app.get('/example500', (req,res)=>res.send(error()));

app.get('/test', (req,res)=>res.status(200).json({hello: "sup"}));

// Error Handling
app.use(notFoundErrorMiddleware);
app.use(serverErrorMiddleware);

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});