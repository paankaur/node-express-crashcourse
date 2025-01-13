import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

// get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Logger middleware
app.use(logger);


// setup static folder, makes next code obsolete
app.use(express.static(path.join(__dirname,'public')));

//this is 'next code'
/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','about.html'));
}); */

//routes
app.use('/api/posts', posts);


//Error handler
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));
