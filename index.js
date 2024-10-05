const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Use CORS
// Allow requests from your frontend's URL
app.use(cors({
  origin: 'https://njuiux-wp.github.io',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!'); // This will be the response when accessing the root URL
});

app.get('/test', (req, res) => {
  res.send('This is a test endpoint.');
});

// Import and use routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const vendorsRoutes = require('./routes/vendorsRoutes');
app.use('/vendors', vendorsRoutes);

const guestsRoutes = require('./routes/guestsRoutes');
app.use('/guests', guestsRoutes);

const locationRoutes = require('./routes/locationRoutes');
app.use('/locations', locationRoutes);

const todoRoutes = require('./routes/toDoRoutes');
app.use('/todo', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
