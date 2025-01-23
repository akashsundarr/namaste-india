//index.js

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Create Express app
const app = express();

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Discover Indian Culture' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Indian Culture' });
});

app.get('/places', (req, res) => {
    res.render('places', { title: 'Places to Visit' });
});

app.get('/culture', (req, res) => {
    res.render('culture', { title: 'Indian Festivals: A Cultural Insight' });
});

app.get('/home', (req, res) => {
    res.render('index', { title: 'Indian Festivals: A Cultural Insight' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
