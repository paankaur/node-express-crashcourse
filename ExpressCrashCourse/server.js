import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// setup static folder, makes next code obsolete
//app.use(express.static(path.join(__dirname,'public')));

//this is 'next code'
/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','about.html'));
}); */

//routes
app.use('/api/posts', posts);


app.listen(port, () => console.log(`Server running on port ${port}`));
